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
      className="flex border-b py-8 px- rounded-md gap-4 group/item hover:bg-slate-100 mt-1"
      href={url}
      target="_blank"
    >
      <Image
        className="object-contain w-[80px] h-auto"
        src={imgUrl}
        alt={name}
        width={80}
        height={50}
      />
      <div className="flex flex-col flex-grow">
        <p className="group-hover/item:text-primary text-xl font-semibold">
          {name}
        </p>
        <p className="text-secondary-foreground ">{description}</p>
      </div>
      <div className="flex flex-col justify-center">
        <ChevronRight />
      </div>
    </a>
  );
}

export default ProjectsCards;
