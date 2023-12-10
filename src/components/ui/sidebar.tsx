import React from "react";

const sidebar = () => {
  return (
    <aside className="border w-[16rem] min-h-screen md:block hidden mobile_nav">
      <div className="mb-12 mt-2 border border-solid w-[7rem] h-[7rem] rounded-[100%] text-center py-10 font-bold">
        CN
      </div>
      <nav>
        <ul className="grid gap-8">
          <li>Overview</li>
          <li>Invoice</li>
          <li>Products</li>
          <li>Branding</li>
          <li>Bookkeeping</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default sidebar;
