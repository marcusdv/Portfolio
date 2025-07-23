import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        name: 'CEEFGuru',
        description:
            'Aplicação web especializada em previsão do tempo para o dia do vôlei dos estudantes de Farmácia da UFBA. Para ajudar os alunos a se organizarem para seus jogos de sexta-feira. As APIs de previsão utilizadas foram OpenWeather, MeteoBlue e AccuWeather. Desenvolvida com Next.js, TypeScript e Tailwind CSS.',
        url: 'https://previsao-do-ceef.vercel.app/',
        imgUrl: '/images/projects/magistral.jpeg',
    },
    {
        name: 'Salpatos',
        description:
            'Loja de sapatos fictícia, simulando checkout, produtos, login, etc. Desenvolvida com Next.js, Supabase, TypeScript, Shadcn e Tailwind CSS.',
        url: 'https://loja-de-roupa-delta.vercel.app/',
        imgUrl: '/images/projects/salpatos.jpg',
    },
    {
        name: 'Animateless',
        description:
            'Coleção de diferentes animações e botões interativos criados para demonstrar técnicas de animação em CSS.',
        url: 'https://animated-things.vercel.app/animateless',
        imgUrl: '/images/projects/animateless.png',
    },
    {
        name: 'Pasti Berat',
        description:
            'Site desenvolvido para uma entrevista, focado apenas na interface visual, sem funcionalidades dinâmicas.',
        url: 'https://pasti-berat-dpbv.vercel.app/',
        imgUrl: '/images/projects/defaultimage.jpg',
    },
    {
        name: 'Organo Adventure Time',
        description:
            'Aplicação web simples e intuitiva para organizar pessoas em diferentes times. Ideal para gerenciar equipes e visualizar sua composição em tempo real.',
        url: 'https://organo-adventure-time.vercel.app/',
        imgUrl: '/images/projects/organo.png',
    },
    {
        name: 'Testemunhos da Palestra Científica de Hora de Aventura',
        description:
            'Projeto que reúne depoimentos fictícios de personagens sobre uma palestra científica apresentada pela Princesa Jujuba, com diferentes perspectivas de cada personagem.',
        url: 'https://palestra-de-ciencias-grid-4hkgft02g-marcusdvs-projects.vercel.app/',
        imgUrl: '/images/projects/testemunhos.png',
    },
    {
        name: 'Newsletter Mergulhador',
        description:
            'Interface de newsletter desenvolvida para testar animações e manipulação responsiva de elementos em diferentes tamanhos de tela.',
        url: 'https://newsletter-virid-three.vercel.app/',
        imgUrl: '/images/projects/mergulhador.png',
    },

];

function Projects() {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2 text-slate-800">Projetos</h1>
            <ul className="bg-white text-left rounded-xl p-4 border border-slate-100 shadow-sm">
                {projects.map((project, i) => {
                    return (
                        <li key={i} >
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                url={project.url}
                                imgUrl={project.imgUrl}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Projects;
