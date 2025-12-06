import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PrayerCard } from "./prayer-card";

export function HomePrayers() {
    return (
        <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center justify-between px-4">
                <h4 className="text-lg font-semibold">Pedidos de oração</h4>
                <Link className="text-red-600 font-semibold" href={'/oracoes'}>Ver mais</Link>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <PrayerCard />
                <PrayerCard />
                <PrayerCard />
                <PrayerCard />
            </div>
        </div>
    )
}