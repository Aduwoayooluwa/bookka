"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import Wave from "@/assets/svgs/Wave"
import Layout from "../invoice/dashboard/Layout";
import Bookkeeping from "./dashboard";

export default function Page() {
    const {back} = useRouter()
    return(
        <Layout>
            <div className="pt-5 md:pt-20">
                <Bookkeeping />
            </div>

        </Layout>
    )
}