"use client"
import Image from "next/image";
import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { getUserRoles } from "@/helpers/getUserRoles";

export default function DashboardLayout({children, locations}: Readonly<{children: React.ReactNode, locations: React.ReactNode}>){
    const path = usePathname()
    return (
        <div className="bg-rose-200">
            <Header/>
            <div className="flex items-center">
                <Sidebar/>
                {children}
                {path === "/dashboard" ? locations : null}
            </div>
        </div>
    )
}