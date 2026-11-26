import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
    {
        name: "Tabuleirinho",
        description:
            "Mesa virtual de RPG no navegador, focada em D&D 5.5: mapas com grid, tokens, fichas, névoa de guerra, iniciativa, dados e chat. O link abre uma demo em modo teste; para jogar online, o mestre hospeda o próprio servidor.",
        url: "https://tabuleirinho-wine.vercel.app/",
        imgUrl: "/images/projects/tabuleirinho.png",
        stack: ["TypeScript", "PixiJS", "Vite", "Node.js", "WebSocket", "Playwright"],
    },
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
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "REST API", "Zod", "JWT", "Playwright"],
    },
    {
        name: "CEEFGuru",
        description:
            "Previsão do tempo para o dia do vôlei dos estudantes de Farmácia da UFBA, cruzando OpenWeather, MeteoBlue e AccuWeather.",
        url: "https://previsao-do-ceef.vercel.app/",
        imgUrl: "/images/projects/magistral.jpeg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
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
