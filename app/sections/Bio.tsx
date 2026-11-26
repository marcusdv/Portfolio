import { IconBrandLinkedin, IconBrandGithub, IconAt, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const links = [
    {
        href: "mailto:marcus.vinicius.bittencourt.c@gmail.com",
        label: "Email",
        icon: IconAt,
        color: "text-[#EA4335]", // vermelho do Gmail
    },
    {
        href: "https://www.linkedin.com/in/marcus-bittencourt/",
        label: "LinkedIn",
        icon: IconBrandLinkedin,
        color: "text-[#0A66C2]", // azul do LinkedIn
    },
    {
        href: "https://github.com/marcusdv",
        label: "GitHub",
        icon: IconBrandGithub,
        color: "text-[#8250DF]", // roxo do GitHub
    },
];

function Bio() {
    return (
        <section className="py-16 md:py-28">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <Image
                        className="h-14 w-14 rounded-full object-cover grayscale"
                        src="/marcus2.jpg"
                        alt="Foto de Marcus Costa"
                        width={112}
                        height={112}
                    />
                    <div className="flex flex-col gap-1">
                        <span className="label">Desenvolvedor Fullstack</span>
                        <span className="text-sm text-muted">Salvador, BA · disponível para projetos</span>
                    </div>
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] md:text-6xl">
                    Marcus Costa
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                    Construo aplicações web do início ao fim com React, Next.js e TypeScript, integrando APIs REST e
                    modelando dados em PostgreSQL/Supabase. Uso IA generativa e LLMs para acelerar o desenvolvimento,
                    automatizo processos com Python desde 2020 e atualmente atuo como desenvolvedor frontend no
                    Instituto Themis Furigo.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {links.map(({ href, label, icon: Icon, color }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75 ${color}`}
                        >
                            <Icon size={18} stroke={1.5} />
                            {label}
                            <IconArrowUpRight
                                size={14}
                                stroke={1.5}
                                className="opacity-0 transition-opacity group-hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Bio;
