import ProjectsCards from '../components/ProjectsCards';

const projects = [
    {
        name: 'Organo Adventure Time',
        description:
            'Organo é uma aplicação web simples e intuitiva para organizar pessoas em diferentes times, ideal para quem precisa gerenciar equipes e visualizar sua composição em tempo real.',
        url: 'https://organo-adventure-time.vercel.app/',
        imgUrl: '/images/projects/organo.png',
    },
    {
        name: 'Testemunhos da Palestra Científica de Hora de Aventura',
        description:
            'Um projeto que reúne depoimentos fictícios de personagens sobre uma palestra científica apresentada pela Princesa Jujuba, com cada personagem trazendo sua perspectiva.',
        url: 'https://palestra-de-ciencias-grid-4hkgft02g-marcusdvs-projects.vercel.app/',
        imgUrl: '/images/projects/testemunhos.png',
    },
    {
        name: 'Newsletter Mergulhador',
        description:
            'Interface de um Newsletter para testar animações e manipulação de elementos em diferentes tamanhos de tela.',
        url: 'https://newsletter-virid-three.vercel.app/',
        imgUrl: '/images/projects/mergulhador.png',
    },
    {
        name: 'Animateless',
        description: 'Diferentes animações de uma biblioteca botões interativos.',
        url: 'https://animated-things.vercel.app/animateless',
        imgUrl: '/images/projects/animateless.png',
    },
];

function Projects() {
    return (
        <>
            <h1 className="text-3xl text-left font-bold mb-2">Projetos</h1>
            <ul className="flex flex-col gap-4 items-start bg-white text-center md:text-left overflow-hidden rounded-xl p-2 md:p-5 shadow-md ">
                {projects.map((obj, i) => {
                    return (
                        <li key={i} className="mb-2">
                            <ProjectsCards project={obj} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Projects;
