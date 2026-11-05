import React, { useState } from 'react';
import { X, Bell, Clock, CheckCircle2 } from 'lucide-react';
import { requestNotificationPermission, sendTestNotification } from '../utils/notifications';

export default function ReminderModal({ isOpen, onClose }) {
  const [notificationStatus, setNotificationStatus] = useState(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'unsupported'
  );
  const [testSent, setTestSent] = useState(false);

  if (!isOpen) return null;

  const handleEnableNotifications = async () => {
    const res = await requestNotificationPermission();
    if (res.granted) {
      setNotificationStatus('granted');
    } else {
      setNotificationStatus('denied');
    }
  };

  const handleSendTest = () => {
    const ok = sendTestNotification("Duolingo");
    setTestSent(ok);
    if (!ok && notificationStatus !== 'granted') {
      alert("Please enable notification permissions first!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative border border-slate-200 shadow-xl space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono-tag font-bold text-amber-600 uppercase">
            <Clock className="w-3.5 h-3.5" /> Midday Habit Loop
          </div>
          <h2 className="font-display text-xl font-bold text-slate-900">
            Lunchtime Nudge (12:45 PM)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Nudges you at <strong>12:45 PM</strong> (during your lunch break) with the day's product teardown so you can sharpen your PM thinking in 7 minutes without interrupting morning work.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4 text-slate-600" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Desktop Notifications</span>
              <span className="text-[11px] text-slate-500">
                {notificationStatus === 'granted' ? 'Active daily at 12:45 PM' : 'Permission needed'}
              </span>
            </div>
          </div>

          {notificationStatus === 'granted' ? (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Active
            </span>
          ) : (
            <button
              onClick={handleEnableNotifications}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Enable
            </button>
          )}
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handleSendTest}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Send test alert now
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
          >
            Done
          </button>
        </div>

        {testSent && (
          <p className="text-xs text-emerald-600 text-center font-medium">
            ✓ Test alert sent to your Mac notification center!
          </p>
        )}
      </div>
    </div>
  );
}
