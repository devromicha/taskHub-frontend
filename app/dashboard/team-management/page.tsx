"use client";

import MemberRow from "@/app/components/dashboard/teams/MembarRow";
import AdminTeamCard from "@/app/components/dashboard/teams/TeamsCard";
import { UserPlus, Users, LayoutGrid, Search, MoreHorizontal } from "lucide-react";


export default function TeamsPage() {

  // const userRole = "admin"; 
  const userRole = "manager"; 

  return (
    <div className="space-y-10">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">
            {userRole === "admin" ? "All Organization Teams" : "My Team Management"}
          </h2>
          <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-[10px]">
            {userRole === "admin" ? "Super Admin Overview" : "Manage your team & members"}
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-[22px] font-black text-sm shadow-xl shadow-blue-100 transition-all flex items-center gap-2">
          {userRole === "admin" ? <Plus className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
          {userRole === "admin" ? "Create New Team" : "Add Member"}
        </button>
      </div>


      {userRole === "admin" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <AdminTeamCard teamName="Frontend Squad" manager="Roni" members={8} />
          <AdminTeamCard teamName="Backend Wizards" manager="Arif" members={5} />
          <AdminTeamCard teamName="UI/UX Explorers" manager="Rita" members={3} />
        </div>
      )}


      {userRole === "manager" && (
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="p-6 bg-gray-50/50 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-gray-400">Team Members</h3>
            <div className="flex gap-2">
                <div className="bg-white px-3 py-1 rounded-lg border border-gray-200 text-[10px] font-black">ACTIVE: 08</div>
            </div>
          </div>
          
          <table className="w-full">
            <tbody className="divide-y divide-gray-100">
      
             <MemberRow id="rita-moni" name="Rita Moni" email="rita@gmail.com" role="Member" initials="RM" bgColor="bg-blue-600" />
<MemberRow id="alex-smith" name="Alex Smith" email="alex@gmail.com" role="Member" initials="AS" bgColor="bg-indigo-600" />
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}


function Plus({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>;
}
