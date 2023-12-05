import React from "react";
import Stepper from "@/page/resources/Stepper";
import Navigation from "@/page/layout/Navigation";
import CreateAccount from "@/page/auth/create-account";

export default function Page() {
    return (
        <main className="overflow-hidden h-screen bg-gray-100">
            <div className="absolute top-0 w-full">
                <Navigation />
            </div>
            <div className="h-full grid place-items-center w-full">
                <div className="w-full md:w-1/3">
                    <CreateAccount />
                </div>
            </div>
        </main>
    )
}