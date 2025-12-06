'use client'

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function AppBar({title, children}: {title: string, children?: React.ReactNode}) {
    const router = useRouter()

    return (
        <div className="h-20 mb-8">
            <header className="h-20 border-b fixed top-0 left-0 right-0 flex gap-4 p-4 items-center bg-white">
                <Button size={'icon-lg'} variant={"outline"} onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1>{title}</h1>
                <div className="flex-1"></div>
                {children}
            </header>
        </div>
    )
}