"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import Wave from "@/assets/svgs/Wave"

export default function Page() {
    const {back} = useRouter()
    return(
        <div className="w-full relative px-10 md:px-0 text-center h-[100vh] grid place-items-center">
            Welcome to the bookkeeping Dashboard

            <section className="grid place-items-center w-full">
                <div className="font-medium text-center text-4xl">
                Coming Soon in Stage 3....

                
                </div>
                <Button onClick={() => {
                    back();
                }} className="bg-blue-600 my-5 text-white hover:bg-blue-800 ">Go back</Button>
            </section>

            <div>
                
               
            </div>
            
            <div className="absolute bottom-0 w-full">
                 <Wave />
            </div>
        </div>
    )
}