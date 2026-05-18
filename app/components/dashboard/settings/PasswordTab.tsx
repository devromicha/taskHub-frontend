"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function PasswordTab() {
  const [show, setShow] = useState({ current: false, newPass: false, confirm: false });
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit() {
    setError("");
    if (!form.current || !form.newPass || !form.confirm) {
      return setError("All fields are required.");
    }
    if (form.newPass.length < 8) {
      return setError("Password must be at least 8 characters.");
    }
    if (form.newPass !== form.confirm) {
      return setError("Passwords do not match.");
    }
    setSuccess(true);
    setForm({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setSuccess(false), 3000);
  }

  const strength = form.newPass.length === 0 ? 0
    : form.newPass.length < 6 ? 1
    : form.newPass.length < 10 ? 2
    : 3;

  const strengthLabel = ["", "Weak", "Medium", "Strong"];
  const strengthColor = ["", "bg-red-400", "bg-orange-400", "bg-green-500"];

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8">

      <div>
        <h3 className="text-3xl font-black text-gray-900">Change Password</h3>
        <p className="text-gray-400 text-sm mt-1 font-bold uppercase tracking-widest">Keep your account secure</p>
      </div>

      <div className="space-y-5">
        {[
          { label: "Current Password", key: "current", showKey: "current" },
          { label: "New Password", key: "newPass", showKey: "newPass" },
          { label: "Confirm Password", key: "confirm", showKey: "confirm" },
        ].map(({ label, key, showKey }) => (
          <div key={key}>
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2 block">
              {label}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type={show[showKey as keyof typeof show] ? "text" : "password"}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full pl-11 pr-12 py-4 border border-gray-200 rounded-2xl font-bold text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShow({ ...show, [showKey]: !show[showKey as keyof typeof show] })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600"
              >
                {show[showKey as keyof typeof show] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}

        {/* Strength Bar */}
        {form.newPass.length > 0 && (
          <div>
            <div className="flex gap-1.5 mb-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= strength ? strengthColor[strength] : "bg-gray-100"}`} />
              ))}
            </div>
            <p className={`text-xs font-black ${strength === 1 ? "text-red-500" : strength === 2 ? "text-orange-500" : "text-green-500"}`}>
              {strengthLabel[strength]} password
            </p>
          </div>
        )}

        {error && (
          <p className="text-xs font-black text-red-500 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
        )}

        {success && (
          <p className="text-xs font-black text-green-600 bg-green-50 px-4 py-3 rounded-xl">Password updated successfully!</p>
        )}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-blue-100 transition"
        >
          Update Password
        </button>
      </div>

    </div>
  );
}