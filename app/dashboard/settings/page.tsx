"use client";
import { useState } from "react";
import { User, Lock, Bell, Palette, AlertTriangle } from "lucide-react";
import ProfileTab from "@/app/components/dashboard/settings/ProfileTab";
import PasswordTab from "@/app/components/dashboard/settings/PasswordTab";
import NotificationsTab from "@/app/components/dashboard/settings/NotificationsTab";
import AppearanceTab from "@/app/components/dashboard/settings/Apperance";
import DangerZoneTab from "@/app/components/dashboard/settings/DangerZoonTab";


const tabs = [
  { label: "Profile", icon: User, component: <ProfileTab /> },
  { label: "Password", icon: Lock, component: <PasswordTab /> },
  { label: "Notifications", icon: Bell, component: <NotificationsTab /> },
  { label: "Appearance", icon: Palette, component: <AppearanceTab /> },
  { label: "Danger Zone", icon: AlertTriangle, component: <DangerZoneTab /> },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const current = tabs.find((t) => t.label === activeTab);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* Sidebar */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-5 h-fit">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Settings</h2>
        <div className="space-y-2">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${
                activeTab === label
                  ? label === "Danger Zone"
                    ? "bg-red-600 text-white shadow-lg shadow-red-100"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-100"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3">
        {current?.component}
      </div>

    </div>
  );
}