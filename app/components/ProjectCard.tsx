import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import {
    IconBrandNextjs,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandReact,
    IconBrandSupabase,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconApi,
    IconBrandDocker,
    IconBrandAws,
    IconBrandNodejs,
    IconBrandPython,
    IconDatabase,
} from "@tabler/icons-react";

const stackIcons: Record<string, ReactNode> = {
    "Next.js": <IconBrandNextjs size={20} stroke={1.5} color="#000000" />,
    TypeScript: <IconBrandTypescript size={20} stroke={1.5} color="#3178C6" />,
    "Tailwind CSS": <IconBrandTailwind size={20} stroke={1.5} color="#06B6D4" />,
    React: <IconBrandReact size={20} stroke={1.5} color="#61DAFB" />,
    Supabase: <IconBrandSupabase size={20} stroke={1.5} color="#3ECF8E" />,
    JavaScript: <IconBrandJavascript size={20} stroke={1.5} color="#F7DF1E" />,
    HTML: <IconBrandHtml5 size={20} stroke={1.5} color="#E34F26" />,
    CSS: <IconBrandCss3 size={20} stroke={1.5} color="#1572B6" />,
    "REST API": <IconApi size={20} stroke={1.5} color="#8E24AA" />,
    API: <IconApi size={20} stroke={1.5} color="#8E24AA" />,
    Docker: <IconBrandDocker size={20} stroke={1.5} color="#2496ED" />,
    AWS: <IconBrandAws size={20} stroke={1.5} color="#FF9900" />,
    "Node.js": <IconBrandNodejs size={20} stroke={1.5} color="#339933" />,
    Python: <IconBrandPython size={20} stroke={1.5} color="#3776AB" />,
    PostgreSQL: <IconDatabase size={20} stroke={1.5} color="#336791" />,
    Database: <IconDatabase size={20} stroke={1.5} color="#1E88E5" />,
};

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
            className="flex flex-col border-b py-8 px-4 rounded-md gap-4 group/item hover:bg-slate-50 mt-1 transition-colors duration-200"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${name}`}
        >
            <div className="grid grid-cols-1 gap-4 md:gap-y-4  md:grid-cols-5 xl:grid-cols-9 ">
                {/* imagem */}
                <Image
                    className="object-cover w-full sm:w-3/4 aspect-video md:aspect-auto justify-self-center md:col-span-2 xl:col-span-1 xl:self-center rounded-lg md:w-24 md:h-16 md:justify-self-start border border-slate-100 shadow-sm"
                    src={imgUrl}
                    alt={`Imagem do projeto ${name}`}
                    width={480}
                    height={360}
                />

                {/* titulo */}
                <div className="flex items-center col-span-full md:col-span-3 xl:col-span-2 xl:justify-self-center md:justify-self-start justify-self-center">
                    <p className="group-hover/item:text-blue-600 text-xl text-slate-800 font-semibold transition-colors duration-200">
                        {name}
                    </p>
                </div>

                {/* descrição e stack */}
                <div className="self-center md:col-span-full xl:col-span-6 flex flex-col gap-3">
                    <p className="text-slate-600 leading-relaxed">{description}</p>

                    {stack.length > 0 && (
                        <div className="flex gap-2">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    title={tech}
                                    className="hover:-translate-y-1 transition-transform duration-200"
                                >
                                    {stackIcons[tech] || (
                                        <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                                            {tech}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* icone */}
                <div className="mt-2 md:row-start-1 md:row-end-4 md:-col-start-1 xl:-col-start-1 xl:row-end-2 text-slate-500 group-hover/item:text-blue-600 transition-colors duration-200 justify-self-end self-center">
                    <ChevronRight size={20} />
                </div>
            </div>
        </a>
    );
}

export default ProjectsCards;
