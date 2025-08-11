import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ProjectsCardsProps {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
}

function ProjectsCards({ name, description, url, imgUrl }: ProjectsCardsProps) {
  return (
    <a
      className="flex flex-col border-b py-8 px-4 rounded-md gap-4 group/item hover:bg-slate-50 mt-1 transition-colors duration-200"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver projeto ${name}`}
    >
      <div className="grid grid-cols-2 gap-4 md:gap-0  md:grid-cols-5 xl:grid-cols-9 ">

        {/* imagem */}
        <Image
          className="object-cover md:col-span-2 xl:col-span-1 xl:self-center rounded-lg w-20 h-fit justify-self-start"
          src={imgUrl}
          alt={`Imagem do projeto ${name}`}
          width={80}
          height={60}
        />

        {/* titulo */}
        <div className="flex items-center md:col-span-4 xl:col-span-2 xl:justify-self-center justify-self-start">
          <p className="group-hover/item:text-blue-600 text-xl text-slate-800 font-semibold transition-colors duration-200">
            {name}
          </p>
        </div>

        {/* descrição */}
          <p className="text-slate-600 col-span-3 md:col-span-7 xl:col-span-6 leading-relaxed">{description}</p>

        {/* icone */}
        <div className="mt-2 col-start-2 md:col-start-5 xl:-col-start-1 text-slate-500 group-hover/item:text-blue-600 transition-colors duration-200 justify-self-end self-center">
          <ChevronRight size={20} />
        </div>
      </div>
    </a>
  );
}

export default ProjectsCards;
