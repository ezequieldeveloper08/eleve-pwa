import { ShareIcon } from "lucide-react";
import { Button } from "./ui/button";

export function ProgramationCard() {
    return (
        <div className="flex-1 flex gap-4 bg-gray-100 p-4 rounded-lg">
            <div className="flex flex-col gap-1 flex-1">
                <span className="bg-zinc-600 w-fit px-4 py-1 rounded-lg text-white mb-2">CULTO</span>
                <span className="text-lg font-medium">Culto de Celebração</span>
                <span>18:00</span>
            </div>
            <Button size={'icon'} variant={"ghost"}><ShareIcon size={18} /></Button>
        </div>
    )
}