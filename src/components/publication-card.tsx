import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function PublicationCard() {
    return (
        <Link href={'/publicacoes/1'}>
            <Card>
            <CardHeader>
                <div className="flex gap-4">
                    <Avatar className="rounded-2xl">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <CardTitle>Título da publicação</CardTitle>
                        <CardDescription>Apenas um resumo de uma publicação.</CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
        </Link>
    )
}