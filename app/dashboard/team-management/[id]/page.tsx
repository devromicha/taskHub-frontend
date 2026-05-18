"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Mail, CheckCircle2, Clock, AlertCircle, Calendar } from "lucide-react";

const MEMBERS: Record<string, any> = {
  "rita-moni": {
    name: "Rita Moni",
    email: "rita@gmail.com",
    role: "Member",
    initials: "RM",
    bgColor: "bg-blue-600",
    phone: "+880 1700-000001",
    joinDate: "Jan 2024",
    tasks: [
      { id: 1, title: "Design new onboarding flow", status: "Completed", deadline: "May 10" },
      { id: 2, title: "Update dashboard analytics charts", status: "In Progress", deadline: "May 20" },
      { id: 3, title: "Write API documentation", status: "Pending", deadline: "May 25" },
      { id: 4, title: "Review pull requests", status: "Completed", deadline: "May 8" },
    ],
  },
  "alex-smith": {
    name: "Alex Smith",
    email: "alex@gmail.com",
    role: "Member",
    initials: "AS",
    bgColor: "bg-indigo-600",
    phone: "+880 1700-000002",
    joinDate: "Mar 2024",
    tasks: [
      { id: 1, title: "Fix login page bug", status: "Completed", deadline: "May 5" },
      { id: 2, title: "Build notification system", status: "In Progress", deadline: "May 22" },
      { id: 3, title: "Database optimization", status: "Pending", deadline: "May 30" },
    ],
  },
};

const statusConfig: Record<string, { color: string; icon: any; label: string }> = {
  Completed: { color: "bg-green-50 text-green-600 border-green-100", icon: CheckCircle2, label: "Completed" },
  "In Progress": { color: "bg-blue-50 text-blue-600 border-blue-100", icon: Clock, label: "In Progress" },
  Pending: { color: "bg-orange-50 text-orange-600 border-orange-100", icon: AlertCircle, label: "Pending" },
};

export default function MemberDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const member = MEMBERS[id as string];

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <p className="text-gray-400 font-black text-xl">Member not found</p>
        <button onClick={() => router.back()} className="text-blue-600 font-bold text-sm">← Go Back</button>
      </div>
    );
  }

  const completed = member.tasks.filter((t: any) => t.status === "Completed").length;
  const completion = Math.round((completed / member.tasks.length) * 100);

  return (
    <div className="space-y-8 ">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-sm transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Team
      </button>

      {/* Member Info Card */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className={`w-20 h-20 rounded-[24px] ${member.bgColor} text-white flex items-center justify-center text-2xl font-black shadow-xl`}>
            {member.initials}
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">{member.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-3 h-3 text-gray-400" />
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{member.email}</span>
            </div>
            <span className="mt-3 inline-block px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-600 border-blue-100">
              {member.role}
            </span>
          </div>
        </div>

        {/* Completion Ring */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="32" stroke="#f3f4f6" strokeWidth="8" fill="none" />
              <circle cx="40" cy="40" r="32" stroke="#2563eb" strokeWidth="8" fill="none"
                strokeDasharray={`${2 * Math.PI * 32}`}
                strokeDashoffset={`${2 * Math.PI * 32 * (1 - completion / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-black text-gray-900">{completion}%</span>
            </div>
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Completion</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 text-center">
          <p className="text-3xl font-black text-gray-900">{member.tasks.length}</p>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Total Tasks</p>
        </div>
        <div className="bg-green-50 rounded-[24px] border border-green-100 p-6 text-center">
          <p className="text-3xl font-black text-green-600">{completed}</p>
          <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mt-1">Completed</p>
        </div>
        <div className="bg-orange-50 rounded-[24px] border border-orange-100 p-6 text-center">
          <p className="text-3xl font-black text-orange-500">{member.tasks.filter((t: any) => t.status === "Pending").length}</p>
          <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mt-1">Pending</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 bg-gray-50/50 border-b border-gray-100">
          <h3 className="font-black text-xs uppercase tracking-[0.2em] text-gray-400">All Tasks</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {member.tasks.map((task: any) => {
            const cfg = statusConfig[task.status];
            const Icon = cfg.icon;
            return (
              <div key={task.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-all">
                <div className="flex items-center gap-4">
                  <Icon className={`w-5 h-5 ${
                    task.status === "Completed" ? "text-green-500" :
                    task.status === "In Progress" ? "text-blue-500" : "text-orange-400"
                  }`} />
                  <div>
                    <p className="font-black text-gray-900 text-sm">{task.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3 text-gray-300" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{task.deadline}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase tracking-widest ${cfg.color}`}>
                  {cfg.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}