"use client";
import { useState } from "react";
import { Bell, Mail, MessageSquare, AlertTriangle } from "lucide-react";

const NOTIFICATIONS = [
  { key: "email", icon: Mail, title: "Email Notifications", desc: "Receive updates and reports by email" },
  { key: "push", icon: Bell, title: "Push Notifications", desc: "Get real-time browser alerts" },
  { key: "sms", icon: MessageSquare, title: "SMS Alerts", desc: "Important alerts via text message" },
  { key: "critical", icon: AlertTriangle, title: "Critical Alerts", desc: "System errors and urgent issues" },
];

export default function NotificationsTab() {
  const [prefs, setPrefs] = useState({ email: true, push: false, sms: false, critical: true });
  const [saved, setSaved] = useState(false);

  function toggle(key: string) {
    setPrefs((p) => ({ ...p, [key]: !p[key as keyof typeof p] }));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8">

      <div>
        <h3 className="text-3xl font-black text-gray-900">Notifications</h3>
        <p className="text-gray-400 text-sm mt-1 font-bold uppercase tracking-widest">Manage your preferences</p>
      </div>

      <div className="space-y-4">
        {NOTIFICATIONS.map(({ key, icon: Icon, title, desc }) => (
          <div key={key} className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-gray-200 transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={() => toggle(key)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                prefs[key as keyof typeof prefs] ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${
                prefs[key as keyof typeof prefs] ? "translate-x-6" : "translate-x-0"
              }`} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className={`px-8 py-4 rounded-2xl font-black text-sm transition-all ${
          saved ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
        }`}
      >
        {saved ? "Saved!" : "Save Preferences"}
      </button>

    </div>
  );
}