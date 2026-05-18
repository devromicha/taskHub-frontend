"use client";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Save } from "lucide-react";

export default function ProfileTab() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Romicha Parvin",
    email: "romicha@gmail.com",
    phone: "+880 1700-000000",
    location: "Dhaka, Bangladesh",
  });

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8">

      <div>
        <h3 className="text-3xl font-black text-gray-900">Profile Settings</h3>
        <p className="text-gray-400 text-sm mt-1 font-bold uppercase tracking-widest">Update your personal information</p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl">
        <div className="w-20 h-20 rounded-[22px] bg-blue-600 text-white flex items-center justify-center text-2xl font-black shadow-lg">
          RP
        </div>
        <div>
          <p className="font-black text-gray-900">{form.name}</p>
          <p className="text-sm text-gray-400 mt-1">{form.email}</p>
          <button className="mt-2 text-xs font-black text-blue-600 hover:underline">
            Change Photo
          </button>
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: "Full Name", key: "name", icon: User, type: "text" },
          { label: "Email Address", key: "email", icon: Mail, type: "email" },
          { label: "Phone", key: "phone", icon: Phone, type: "text" },
          { label: "Location", key: "location", icon: MapPin, type: "text" },
        ].map(({ label, key, icon: Icon, type }) => (
          <div key={key}>
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2 block">
              {label}
            </label>
            <div className="relative">
              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full pl-11 pr-5 py-4 border border-gray-200 rounded-2xl font-bold text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all ${
          saved
            ? "bg-green-500 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
        }`}
      >
        <Save className="w-4 h-4" />
        {saved ? "Saved!" : "Save Changes"}
      </button>

    </div>
  );
}