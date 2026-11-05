import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DailyDrop from './components/DailyDrop';
import WeeklyQuiz from './components/WeeklyQuiz';
import ProductVault from './components/ProductVault';
import CustomTeardownModal from './components/CustomTeardownModal';
import ReminderModal from './components/ReminderModal';
import PRDViewer from './components/PRDViewer';
import { SEED_PRODUCTS, WEEKLY_QUIZZES } from './data/products';
import { generateDeepTeardown } from './data/productIntelligence';
import { sendTestNotification } from './utils/notifications';

export default function App() {
  const [currentTab, setCurrentTab] = useState('daily');
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('proddaily_products');
    if (!saved) return SEED_PRODUCTS;
    try {
      const parsed = JSON.parse(saved);
      const customOnes = parsed
        .filter(p => p.id && p.id.startsWith('custom_'))
        .map(p => {
          // If stored custom product is missing rich personas or coreSurfaces, auto-hydrate with deep intelligence
          if (!p.personas || p.personas.length === 0 || !p.whatIsTheProduct?.coreSurfaces) {
            const enriched = generateDeepTeardown(p.name, p.category);
            return {
              ...p,
              ...enriched,
              id: p.id,
              name: p.name,
              category: enriched.category || p.category
            };
          }
          return p;
        });
      return [...SEED_PRODUCTS, ...customOnes];
    } catch (e) {
      return SEED_PRODUCTS;
    }
  });

  const [currentProductIndex, setCurrentProductIndex] = useState(() => {
    const saved = localStorage.getItem('proddaily_current_idx');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('proddaily_user_progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [userQuizProgress, setUserQuizProgress] = useState(() => {
    const saved = localStorage.getItem('proddaily_quiz_progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('proddaily_streak');
    return saved !== null ? parseInt(saved, 10) : 1;
  });

  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('proddaily_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('proddaily_current_idx', currentProductIndex.toString());
  }, [currentProductIndex]);

  useEffect(() => {
    localStorage.setItem('proddaily_user_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('proddaily_quiz_progress', JSON.stringify(userQuizProgress));
  }, [userQuizProgress]);

  // Sync to disk for PM Retention Coach Agent
  useEffect(() => {
    fetch('/api/save-progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userProgress,
        userQuizProgress,
        streak,
        lastActive: new Date().toISOString()
      })
    }).catch(() => {});
  }, [userProgress, userQuizProgress, streak]);

  useEffect(() => {
    localStorage.setItem('proddaily_streak', streak.toString());
  }, [streak]);

  // Daily 12:45 PM Lunchtime Nudge schedule check
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 12 && now.getMinutes() === 45 && now.getSeconds() < 10) {
        const currentProd = products[currentProductIndex];
        sendTestNotification(currentProd?.name || "Today's App");
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [products, currentProductIndex]);

  const handleSaveProgress = (productId, data) => {
    setUserProgress((prev) => {
      const isFirstTime = !prev[productId];
      const updated = {
        ...prev,
        [productId]: data
      };
      if (isFirstTime) {
        setStreak((s) => s + 1);
      }
      return updated;
    });
  };

  const handleSaveQuizProgress = (weekNumber, data) => {
    setUserQuizProgress((prev) => ({
      ...prev,
      [weekNumber]: data
    }));
  };

  const handleAddCustomProduct = (newProd) => {
    setProducts((prev) => {
      const filtered = prev.filter((p) => p.id !== newProd.id);
      return [newProd, ...filtered];
    });
    setCurrentProductIndex(0);
    setCurrentTab('daily');
  };

  const currentProduct = products[currentProductIndex] || products[0];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        streak={streak}
        masteredCount={Object.keys(userProgress).length}
        totalCount={products.length}
        onOpenReminderModal={() => setIsReminderModalOpen(true)}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'daily' && (
          <DailyDrop
            product={currentProduct}
            onNextProduct={() => setCurrentProductIndex((prev) => Math.min(prev + 1, products.length - 1))}
            onPrevProduct={() => setCurrentProductIndex((prev) => Math.max(prev - 1, 0))}
            hasPrev={currentProductIndex > 0}
            hasNext={currentProductIndex < products.length - 1}
            userProgress={userProgress}
            onSaveProgress={handleSaveProgress}
          />
        )}

        {currentTab === 'quiz' && (
          <WeeklyQuiz
            quizzes={WEEKLY_QUIZZES}
            userQuizProgress={userQuizProgress}
            onSaveQuizProgress={handleSaveQuizProgress}
            onGoToProduct={(prodId) => {
              const idx = products.findIndex((p) => p.id === prodId);
              if (idx !== -1) {
                setCurrentProductIndex(idx);
                setCurrentTab('daily');
              }
            }}
          />
        )}

        {currentTab === 'vault' && (
          <ProductVault
            products={products}
            userProgress={userProgress}
            onSelectProduct={(p) => {
              const idx = products.findIndex((item) => item.id === p.id);
              if (idx !== -1) {
                setCurrentProductIndex(idx);
                setCurrentTab('daily');
              }
            }}
          />
        )}

        {currentTab === 'prd' && <PRDViewer />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
        <p>
          ProdDaily • Built for PM Interview Mastery & Product Sense Expansion • 10y Engineering + MBA Pivot
        </p>
      </footer>

      {/* Modals */}
      <ReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
      />

      <CustomTeardownModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onAddProduct={handleAddCustomProduct}
      />
    </div>
  );
}
