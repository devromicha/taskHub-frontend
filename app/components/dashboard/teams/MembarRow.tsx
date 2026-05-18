"use client";
import { Edit2, Trash2, Eye, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const MEMBERS_DATA: Record<string, { tasks: any[] }> = {
  "rita-moni": {
    tasks: [
      { id: 1, title: "Design onboarding flow", status: "Completed", deadline: "May 10" },
      { id: 2, title: "Update analytics charts", status: "In Progress", deadline: "May 20" },
      { id: 3, title: "Write API documentation", status: "Pending", deadline: "May 25" },
      { id: 4, title: "Review pull requests", status: "Completed", deadline: "May 8" },
    ],
  },
  "alex-smith": {
    tasks: [
      { id: 1, title: "Fix login page bug", status: "Completed", deadline: "May 5" },
      { id: 2, title: "Build notification system", status: "In Progress", deadline: "May 22" },
      { id: 3, title: "Database optimization", status: "Pending", deadline: "May 30" },
    ],
  },
};

export default function MemberRow({ id, name, email, role, initials, bgColor }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const memberData = MEMBERS_DATA[id];
  const tasks = memberData?.tasks ?? [];
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const completion = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <tr className="group hover:bg-gray-50/80 transition-all border-b border-gray-50 last:border-0">

      {/* Member */}
      <td className="p-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-[14px] ${bgColor} text-white flex items-center justify-center font-black text-sm shadow-md`}>
            {initials}
          </div>
          <div>
            <p className="font-black text-gray-900 text-sm leading-tight">{name}</p>
            <p className="text-[10px] font-bold text-gray-400 mt-0.5">{email}</p>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="p-5">
        <span className={`px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
          role === "Admin"
            ? "bg-green-50 text-green-600 border-green-100"
            : "bg-blue-50 text-blue-600 border-blue-100"
        }`}>
          {role}
        </span>
      </td>

      {/* Tasks */}
      <td className="p-5">
        <div className="flex gap-2 flex-wrap">
          {completed > 0 && (
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-2.5 py-1 rounded-lg">
              ✓ {completed} done
            </span>
          )}
          {inProgress > 0 && (
            <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg">
              ● {inProgress} active
            </span>
          )}
          {pending > 0 && (
            <span className="text-[10px] font-black bg-orange-50 text-orange-500 px-2.5 py-1 rounded-lg">
              ○ {pending} pending
            </span>
          )}
        </div>
      </td>

      {/* Progress */}
      <td className="p-5">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
          <span className="text-[11px] font-black text-gray-500 w-8">{completion}%</span>
        </div>
      </td>

      {/* 3-dot Actions */}
      <td className="p-5">
        <div className="flex justify-end" ref={dropdownRef}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>

          {open && (
            <div className="absolute z-50 mt-8 mr-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
              <button
                onClick={() => { setOpen(false); router.push(`/dashboard/team-management/${id}`); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <button
                onClick={() => { setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all"
              >
                <Edit2 className="w-4 h-4" />
                Edit Member
              </button>
              <div className="border-t border-gray-50" />
              <button
                onClick={() => { setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>
      </td>

    </tr>
  );
}