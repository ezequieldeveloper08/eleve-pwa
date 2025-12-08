import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="relative">
                <AspectRatio ratio={16 / 8} className="bg-gray-900 flex items-center justify-center pb-8">
                    <Image
                        src={`/logo-h-white.png`}
                        alt="Photo by Drew Beamer"
                        width={200}
                        height={48}
                    />
                </AspectRatio>
                <div className="w-full bg-white absolute left-0 right-0 border-0 bottom-0 h-8 rounded-t-2xl z-50"></div>
            </div>
        </div>
    )
}