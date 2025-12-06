import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function PrayerCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <CardTitle>Cauã Neto</CardTitle>
                        <CardDescription>Peço oração para minha família e estudos.</CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}