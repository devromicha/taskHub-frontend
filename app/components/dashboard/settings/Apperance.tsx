"use client";
import { useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const THEMES = [
  { key: "light", icon: Sun, label: "Light", preview: "bg-gray-100" },
  { key: "dark", icon: Moon, label: "Dark", preview: "bg-gray-900" },
  { key: "system", icon: Monitor, label: "System", preview: "bg-gradient-to-r from-gray-100 to-gray-900" },
];

const ACCENTS = [
  { key: "blue", color: "bg-blue-600" },
  { key: "violet", color: "bg-violet-600" },
  { key: "green", color: "bg-green-600" },
  { key: "rose", color: "bg-rose-500" },
  { key: "orange", color: "bg-orange-500" },
];

export default function AppearanceTab() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("blue");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8">

      <div>
        <h3 className="text-3xl font-black text-gray-900">Appearance</h3>
        <p className="text-gray-400 text-sm mt-1 font-bold uppercase tracking-widest">Customize your dashboard</p>
      </div>

      {/* Theme */}
      <div>
        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Theme</p>
        <div className="grid grid-cols-3 gap-4">
          {THEMES.map(({ key, icon: Icon, label, preview }) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`p-5 rounded-2xl border-2 transition-all ${
                theme === key ? "border-blue-600 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className={`h-16 ${preview} rounded-xl mb-3`} />
              <div className="flex items-center justify-center gap-2">
                <Icon className="w-3.5 h-3.5 text-gray-600" />
                <p className="font-black text-gray-900 text-sm">{label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accent */}
      <div>
        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Accent Color</p>
        <div className="flex gap-3">
          {ACCENTS.map(({ key, color }) => (
            <button
              key={key}
              onClick={() => setAccent(key)}
              className={`w-10 h-10 rounded-full ${color} transition-all ${
                accent === key ? "ring-4 ring-offset-2 ring-blue-400 scale-110" : "hover:scale-105"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className={`px-8 py-4 rounded-2xl font-black text-sm transition-all ${
          saved ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
        }`}
      >
        {saved ? "Saved!" : "Save Appearance"}
      </button>

    </div>
  );
}