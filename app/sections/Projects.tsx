import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
    {
        name: "Meu blog!",
        description: "Meu espaço para escrever sobre desenvolvimento web, filmes, séries e livros.",
        url: "https://blog-blop.vercel.app/",
        imgUrl: "/images/projects/blog.png",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        name: "Wiki Game",
        description:
            "Comece em um artigo aleatório da Wikipedia e chegue ao destino usando só links internos, no menor número de cliques.",

        url: "https://wikigame-five.vercel.app/",
        imgUrl: "/images/projects/wikirun.jpeg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "REST API", "Zod", "JWT"],
    },
    {
        name: "CEEFGuru",
        description:
            "Previsão do tempo para o dia do vôlei dos estudantes de Farmácia da UFBA, cruzando OpenWeather, MeteoBlue e AccuWeather.",
        url: "https://previsao-do-ceef.vercel.app/",
        imgUrl: "/images/projects/magistral.jpeg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
        name: "Salpatos",
        description: "Loja de sapatos fictícia com catálogo, login e checkout simulado.",
        url: "https://loja-de-roupa-delta.vercel.app/",
        imgUrl: "/images/projects/salpato.png",
        stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    },
];

function Projects() {
    return (
        <Section
            id="projetos"
            index="01 / Trabalho"
            title="Projetos"
            description="Uma seleção de coisas que construí. Todos estão no ar e o código está no GitHub."
        >
            <ul>
                {projects.map((project, i) => (
                    <li key={i}>
                        <ProjectCard
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            imgUrl={project.imgUrl}
                            stack={project.stack}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default Projects;
