import Image from 'next/image';

interface ProjectsCardsProps {
    project: {
        name: string;
        description: string;
        url: string;
        imgUrl: string;
    };
}

function ProjectsCards({ project }: ProjectsCardsProps) {
    return (
        <>
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <div className="flex flex-col items-center md:flex-row gap-2  mt-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className='w-[200px] h-[125px] relative'>

                    <Image
                        className="object-cover md:mx-0 mx-auto rounded-md border border-secondary shadow-md hover:scale-105 transition-transform duration-300"
                        src={project.imgUrl}
                        alt="Foto de perfil"
                        fill
                        />
                        </div>
                </a>
                <p className="text-secondary-foreground">
                    {project.description}
                </p>
            </div>
        </>
    );
}

export default ProjectsCards;
