import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        name: "CEEFGuru",
        description:
            "Aplicação web especializada em previsão do tempo para o dia do vôlei dos estudantes de Farmácia da UFBA. Para ajudar os alunos a se organizarem para seus jogos de sexta-feira. As APIs de previsão utilizadas foram OpenWeather, MeteoBlue e AccuWeather. Desenvolvida com Next.js, TypeScript e Tailwind CSS.",
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
            "Loja de sapatos fictícia, simulando checkout, produtos, login, etc. Desenvolvida com Next.js, Supabase, TypeScript, Shadcn e Tailwind CSS.",
        url: "https://loja-de-roupa-delta.vercel.app/",
        imgUrl: "/images/projects/salpato.png",
        stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    },
    {
        name: "Jogo da Velha",
        description:
            "Jogo da velha clássico desenvolvido com interface interativa, permitindo partidas entre dois jogadores com detecção automática de vitória e empate.",
        url: "https://jogo-da-velha-b1rpcivkm-marcusdvs-projects.vercel.app/",
        imgUrl: "/images/projects/jogo-da-velha.png",
        stack: ["React", "JavaScript", "CSS"],
    },
    {
        name: "Animateless",
        description:
            "Coleção de diferentes animações e botões interativos criados para demonstrar técnicas de animação em CSS.",
        url: "https://animated-things.vercel.app/",
        imgUrl: "/images/projects/animateless.png",
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Pasti Berat",
        description:
            "Site desenvolvido para uma entrevista, focado apenas na interface visual, sem funcionalidades dinâmicas.",
        url: "https://pasti-berat-dpbv.vercel.app/",
        imgUrl: "/images/projects/pasti.png",
        stack: ["HTML", "CSS"],
    },
    {
        name: "Organo Adventure Time",
        description:
            "Aplicação web simples e intuitiva para organizar pessoas em diferentes times. Ideal para gerenciar equipes e visualizar sua composição em tempo real.",
        url: "https://organo-adventure-time.vercel.app/",
        imgUrl: "/images/projects/organo.png",
        stack: ["React", "JavaScript", "CSS"],
    },
];

function Projects() {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2 text-slate-800">Projetos</h1>
            <ul className="bg-white text-left rounded-xl p-4 border border-slate-100 shadow-sm">
                {projects.map((project, i) => {
                    return (
                        <li key={i}>
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                url={project.url}
                                imgUrl={project.imgUrl}
                                stack={project.stack}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Projects;
