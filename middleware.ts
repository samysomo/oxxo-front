import { NextRequest, NextResponse } from "next/server";

const TOKEN_NAME = process.env.TOKEN_NAME

export default function Middleware(req: NextRequest){
    const token = req.cookies.get(TOKEN_NAME!)?.value
    if(req.nextUrl.pathname.startsWith("/dashboard")){
        if(!token){
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }

    if (req.nextUrl.pathname === "/"){
        return NextResponse.redirect(new URL("dashboard", req.url))
    }
    return NextResponse.next()
}