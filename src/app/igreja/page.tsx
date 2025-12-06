import { ChurchBackground } from "@/components/church-background";
import { Mail, MailIcon, MapPinIcon, PhoneIcon, PinIcon } from "lucide-react";

export default function Page() {
    return (
        <div>
            <ChurchBackground />
            <div className="px-4 flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Endereço</h2>
                <div className="flex gap-2">
                    <div className="h-10 w-10 min-w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                        <MapPinIcon />
                    </div>
                    <p>Av. Maria Marcelina, 1200 - Lot. Ipanema, Catalão - GO, 75705-060</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15164.389186961405!2d-47.956289640710175!3d-18.15943132613151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6662712aaa423%3A0x6a181c20f39dd205!2sComunidade%20Evang%C3%A9lica%20Vinde!5e0!3m2!1spt-BR!2sbr!4v1764973815184!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h2 className="text-xl font-semibold">Contato</h2>
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 min-w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                        <PhoneIcon />
                    </div>
                    <p className="text-lg font-medium">(64) 99999-9999</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 min-w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <MailIcon />
                    </div>
                    <p className="text-lg font-medium">coev@gmail.com</p>
                </div>
                <h2 className="text-xl font-semibold">Sobre nós</h2>
                <p>A Comunidade Evangélica Vinde é uma igreja cristã que tem como propósito principal anunciar o amor de Deus e promover o crescimento espiritual de cada pessoa que chega até ela. Com cultos vibrantes, ensino bíblico sólido e um ambiente acolhedor, a Vinde busca ser um lugar onde famílias e indivíduos encontram direção, apoio e comunhão verdadeira.</p>
                <p>Nos encontros semanais, a igreja enfatiza a adoração sincera, a pregação da Palavra e a oração como fundamentos para uma vida transformada. Além dos cultos, a comunidade desenvolve diversos ministérios voltados para crianças, jovens, casais e projetos sociais, tudo com o objetivo de servir à cidade e manifestar o evangelho na prática.</p>
                <p>A Vinde valoriza a simplicidade, a unidade e a presença de Deus. Aqui, cada pessoa é convidada a caminhar com Cristo, descobrir seus dons e participar ativamente da missão de alcançar outras vidas. Com um coração aberto e uma visão voltada para o Reino, a Comunidade Evangélica Vinde deseja ser um farol de esperança e fé para todos que a procuram.</p>
            </div>
        </div>
    )
}