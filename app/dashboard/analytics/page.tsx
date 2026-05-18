// app/dashboard/analytics/page.tsx

"use client";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">
          Analytics Overview
        </h2>

        <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-[10px]">
          Team productivity & project statistics
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            Total Tasks
          </p>

          <h3 className="text-4xl font-black text-gray-900 mt-4">
            1,240
          </h3>

          <p className="text-green-600 text-sm font-bold mt-2">
            +12% this week
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            Completed
          </p>

          <h3 className="text-4xl font-black text-green-600 mt-4">
            980
          </h3>

          <p className="text-green-600 text-sm font-bold mt-2">
            +8% this month
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            Pending
          </p>

          <h3 className="text-4xl font-black text-orange-500 mt-4">
            190
          </h3>

          <p className="text-orange-500 text-sm font-bold mt-2">
            Needs attention
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            Team Members
          </p>

          <h3 className="text-4xl font-black text-blue-600 mt-4">
            32
          </h3>

          <p className="text-blue-600 text-sm font-bold mt-2">
            Active users
          </p>
        </div>

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Productivity Chart */}
        <div className="xl:col-span-2 bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-gray-900">
                Productivity Trend
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Weekly performance overview
              </p>
            </div>

            <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold">
              Weekly
            </button>
          </div>

          {/* Fake Chart */}
          <div className="h-72 flex items-end gap-4">

            <div className="flex-1 bg-blue-100 rounded-t-3xl h-[40%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Mon
              </div>
            </div>

            <div className="flex-1 bg-blue-200 rounded-t-3xl h-[65%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Tue
              </div>
            </div>

            <div className="flex-1 bg-blue-300 rounded-t-3xl h-[55%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Wed
              </div>
            </div>

            <div className="flex-1 bg-blue-400 rounded-t-3xl h-[85%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Thu
              </div>
            </div>

            <div className="flex-1 bg-blue-500 rounded-t-3xl h-[70%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-white">
                Fri
              </div>
            </div>

            <div className="flex-1 bg-blue-300 rounded-t-3xl h-[50%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Sat
              </div>
            </div>

            <div className="flex-1 bg-blue-200 rounded-t-3xl h-[35%] relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">
                Sun
              </div>
            </div>

          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">

          <h3 className="text-xl font-black text-gray-900">
            Recent Activity
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

              <div>
                <p className="font-bold text-gray-900">
                  New task completed
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Landing page design finished
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

              <div>
                <p className="font-bold text-gray-900">
                  Team member joined
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Alex joined frontend squad
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>

              <div>
                <p className="font-bold text-gray-900">
                  Pending approval
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  3 tasks waiting review
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}