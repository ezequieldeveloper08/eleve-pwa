import { AppBar } from "@/components/app-bar";
import { PrayerCard } from "@/components/prayer-card";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div>
            <AppBar title="Pedidos de oração">
                <Button size={"lg"}>Fazer pedido</Button>
            </AppBar>
            <div className="flex flex-col gap-4 px-4">
                <PrayerCard />
                <PrayerCard />
                <PrayerCard />
                <PrayerCard />
            </div>
        </div>
    )
}