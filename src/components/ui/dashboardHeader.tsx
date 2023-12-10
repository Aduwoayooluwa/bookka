import React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "./dropdown-menu";

const dashboardHeader = () => {
  return (
    <div className="shadow lg:px-12 md:px-8 px-6 h-[3.7rem] flex flex-row justify-between">
      <div className="flex flex-row justify-between py-5 w-[100%] ">
        <span className=" cursor-pointer md:hidden">
          <MenuIcon />
        </span>
        <div className="flex items-center md:justify-start mt-1 justify-center cursor-pointer md:text-3xl text-2xl font-bold w-[100%] text-black">
          Bookka
        </div>
      </div>
      <div className=" flex flex-row mt-[0.6rem]">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default dashboardHeader;
