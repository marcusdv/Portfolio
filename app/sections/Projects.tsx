import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
    {
        name: "Meu blog!",
        description: "Em desenvolvimento no momento. Mas já da pra dar uma olhadinha.",

        url: "https://blog-blop.vercel.app/",
        imgUrl: "/images/projects/defaultimage.jpg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        name: "Wiki Game",
        description:
            "Jogo baseado no desafio da Wikipedia: comece em um artigo aleatório e navegue apenas por links internos até chegar ao artigo destino no menor número de cliques possível. Uma API REST personalizada fornece os dados dos artigos e links da Wikipedia.",

        url: "https://wikigame-five.vercel.app/",
        imgUrl: "/images/projects/wikirun.jpeg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "REST API", "Zod", "JWT"],
    },
    {
        name: "CEEFGuru",
        description:
            "Aplicação web especializada em previsão do tempo para o dia do vôlei dos estudantes de Farmácia da UFBA. Para ajudar os alunos a se organizarem para seus jogos de sexta-feira. As APIs de previsão utilizadas foram OpenWeather, MeteoBlue e AccuWeather.",
        url: "https://previsao-do-ceef.vercel.app/",
        imgUrl: "/images/projects/magistral.jpeg",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
        name: "É Pra Hoje!",
        description:
            "Aplicação de lista de tarefas diárias com limite de horário de término e criação de tarefas. Também possui prioridade de tarefa e days streaks.",
        url: "https://to-do-day-pi.vercel.app/",
        imgUrl: "/images/projects/eprahojelogo.png",
        stack: ["React", "JavaScript", "CSS"],
    },
    {
        name: "Salpatos",
        description:
            "Loja de sapatos fictícia, simulando checkout, produtos, login e catálogo, com autenticação e banco de dados no Supabase.",
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
