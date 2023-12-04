import React from "react";
import CreateAccount from "@/page/auth/create-account";

export default function AuthDid() {
    return (
        <main className="h-screen w-full grid place-items-center">
          <div className="w-full  md:w-[40%]">
              <CreateAccount />
          </div>
        </main>
    )
}