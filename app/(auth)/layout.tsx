import Image from "next/image";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>){
    return (
        <div className="min-h-screen bg-rose-600 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
                <Image src={"oxxo-logo.svg"} alt="Oxxo logo" width={200} height={100}/>
                {children}
            </div>
        </div>
    )
}