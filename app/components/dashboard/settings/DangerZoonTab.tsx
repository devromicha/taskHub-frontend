"use client";
import { useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";

export default function DangerZoneTab() {
  const [confirm, setConfirm] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="bg-white rounded-[32px] border border-red-100 shadow-sm p-8 space-y-8">

      <div>
        <h3 className="text-3xl font-black text-red-600">Danger Zone</h3>
        <p className="text-gray-400 text-sm mt-1 font-bold uppercase tracking-widest">These actions are permanent</p>
      </div>

      <div className="border border-red-100 rounded-3xl p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-black text-gray-900">Delete Account</h4>
            <p className="text-sm text-gray-500 mt-1">
              Permanently removes your account, all data, teams, and settings. This cannot be undone.
            </p>
          </div>
        </div>

        {!confirm ? (
          <button
            onClick={() => setConfirm(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-black text-sm transition"
          >
            <Trash2 className="w-4 h-4" />
            Delete Account
          </button>
        ) : (
          <div className="bg-red-50 rounded-2xl p-5 space-y-4">
            <p className="text-sm font-black text-red-700">
              Type <span className="bg-red-100 px-2 py-0.5 rounded">DELETE</span> to confirm
            </p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type DELETE here"
              className="w-full border border-red-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <div className="flex gap-3">
              <button
                disabled={input !== "DELETE"}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-black text-sm transition"
              >
                <Trash2 className="w-4 h-4" />
                Confirm Delete
              </button>
              <button
                onClick={() => { setConfirm(false); setInput(""); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm border border-gray-200 hover:bg-gray-50 transition"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}