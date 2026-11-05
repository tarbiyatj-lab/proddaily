import React, { useState } from 'react';
import { Trophy, CheckCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { triggerSuperConfetti } from '../utils/confetti';

export default function WeeklyQuiz({ 
  quizzes, 
  userQuizProgress, 
  onSaveQuizProgress, 
  onGoToProduct 
}) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const activeQuiz = quizzes.find(q => q.week === selectedWeek) || quizzes[0];
  const currentQ = activeQuiz.questions[currentQuestionIndex];

  const handleSelectOption = (index) => {
    if (isAnswerRevealed) return;
    setSelectedAnswer(index);
    setIsAnswerRevealed(true);

    if (index === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    } else {
      setIsFinished(true);
      triggerSuperConfetti();
      onSaveQuizProgress(activeQuiz.week, {
        score: score + (selectedAnswer === currentQ.correctIndex ? 1 : 0),
        total: activeQuiz.questions.length,
        completedAt: new Date().toISOString(),
        badgeName: activeQuiz.badgeName
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <h1 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
          Weekly Retention Diagnostic
        </h1>
        <p className="text-sm text-slate-600">
          Calibrate your mental models and cross-product intuition across this week's apps.
        </p>
      </div>

      {!isFinished ? (
        <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono-tag font-bold text-slate-500">
            <span>QUESTION {currentQuestionIndex + 1} OF {activeQuiz.questions.length}</span>
            <span>SCORE: {score}</span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-900 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100}%` }}
            />
          </div>

          <h2 className="font-display text-xl font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = "bg-white hover:bg-slate-50 text-slate-800 border-slate-200";

              if (isAnswerRevealed) {
                if (idx === currentQ.correctIndex) {
                  btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-400 font-semibold";
                } else if (idx === selectedAnswer) {
                  btnStyle = "bg-rose-50 text-rose-900 border-rose-400";
                } else {
                  btnStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerRevealed}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center font-mono-tag text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {isAnswerRevealed && (
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <strong className="text-slate-900 block font-display">PM Rationale & Context:</strong>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm cursor-pointer"
                >
                  {currentQuestionIndex < activeQuiz.questions.length - 1 ? 'Next Question' : 'View Results'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="editorial-card rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex p-4 rounded-full bg-slate-100 text-slate-900">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-1">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">
              Diagnostic Complete
            </h2>
            <p className="text-sm text-slate-600">
              You scored <strong className="text-slate-900">{score}</strong> out of <strong className="text-slate-900">{activeQuiz.questions.length}</strong>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-600">
            Weekly Mastery Badge: <strong className="text-slate-900">{activeQuiz.badgeName}</strong>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold mx-auto transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
