import Image from "next/image";
import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function DashboardLayout({children, count}: Readonly<{children: React.ReactNode, count: React.ReactNode}>){
    return (
        <div className="bg-rose-200">
            <Header/>
            <div className="flex items-center">
                <Sidebar/>
                {children}
                {count}
            </div>
        </div>
    )
}