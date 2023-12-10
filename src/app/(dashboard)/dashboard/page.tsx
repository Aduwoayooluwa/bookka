import React from "react";
import Sidebar from "@/components/ui/sidebar";
import DashboardHeader from "@/components/ui/dashboardHeader";
const dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="border w-[100%]">
        <DashboardHeader />
      </main>
    </div>
  );
};

export default dashboard;
