"use client";

import { X, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Task {
  id: number;
  title: string;
  status: "Completed" | "In Progress" | "Pending";
  deadline: string;
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  memberName: string;
  tasks: Task[];
}

export default function MemberTasksDrawer({ isOpen, onClose, memberName, tasks }: DrawerProps) {
  if (!isOpen) return null;

  const statusStyles = {
    Completed: "bg-green-50 text-green-600 border-green-100",
    "In Progress": "bg-blue-50 text-blue-600 border-blue-100",
    Pending: "bg-orange-50 text-orange-600 border-orange-100",
  };

  return (
    <div className="fixed inset-0 z-[150] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" onClick={onClose}></div>

      {/* Drawer Content */}
      <div className="relative bg-white w-full max-w-md h-full shadow-2xl p-8 flex flex-col justify-between animate-in slide-in-from-right duration-300 rounded-l-[40px]">
        
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">{memberName}&apos;s Tasks</h3>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                Track workload & performance
              </p>
            </div>
            <button onClick={onClose} className="p-2.5 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
            {tasks?.map((task) => (
              <div key={task.id} className="p-5 bg-gray-50/50 border border-gray-100 rounded-[24px] hover:border-blue-100 transition-all group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                    {task?.title}
                  </h4>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100/50">
                  <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${statusStyles[task.status]}`}>
                    {task?.status}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold uppercase">
                    <Clock className="w-3 h-3" />
                    {task?.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Summary Card */}
        <div className="bg-gray-950 p-6 rounded-[30px] text-white flex justify-between items-center mt-6">
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">Total Workload</p>
            <p className="text-xl font-black mt-1">{tasks?.length} Active Tasks</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-widest text-green-400">Completion</p>
            <p className="text-xl font-black mt-1 text-green-400">
              {Math.round((tasks?.filter(t => t.status === "Completed").length / tasks?.length) * 100 || 0)}%
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}