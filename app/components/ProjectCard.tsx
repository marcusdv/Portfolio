import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

type ProjectsCardsProps = {
    name: string;
    description: string;
    url: string;
    imgUrl: string;
    stack?: string[];
};

function ProjectsCards({ name, description, url, imgUrl, stack = [] }: ProjectsCardsProps) {
    return (
        <a
            className="group grid grid-cols-1 gap-5 border-b border-border py-8 transition-opacity first:pt-0 last:border-b-0 md:grid-cols-[10rem_1fr] md:gap-8"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${name}`}
        >
            <Image
                className="aspect-[16/10] w-full rounded-md border border-border object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                src={imgUrl}
                alt={`Imagem do projeto ${name}`}
                width={480}
                height={300}
            />

            <div className="flex flex-col gap-3">
                <h3 className="flex items-center gap-1.5 text-lg font-medium">
                    {name}
                    <IconArrowUpRight
                        size={16}
                        stroke={1.5}
                        className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                </h3>

                <p className="max-w-2xl text-sm leading-relaxed text-muted">{description}</p>

                {stack.length > 0 && (
                    <ul className="mt-1 flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6875rem] text-muted"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </a>
    );
}

export default ProjectsCards;
