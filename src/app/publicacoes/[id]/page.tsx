import { PublicationBackground } from "@/components/publication-background";
import { ShareIcon } from "lucide-react";

export default function Page() {
    return (
        <div>
            <PublicationBackground />
            <div className="px-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="font-medium">4 de Dezembro de 2025 às 15:42</span>
                    <button><ShareIcon /></button>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Programação Mensal - Dezembro</h2>
                    <h3 className="text-lg">Resumo da programansal mensal do mês de dezembro na comunidade evangélica VINDE.</h3>
                </div>
                <p>Lorem ipsum dolor sit amet. Id tenetur omnis ut voluptatum dolor qui sequi impedit aut internos repellendus est quas voluptatum et commodi quas ut saepe error. Et alias magni At nisi officiis et pariatur galisum qui laboriosam esse. Sed accusamus doloremque et architecto eius cum omnis architecto eum asperiores necessitatibus rem deserunt velit sed pariatur fuga sed impedit culpa.</p>
            </div>
        </div>
    )
}