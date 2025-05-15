import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        name: 'Modique',
        description:
            'Loja de roupas e acessórios de moda. EM DESENVOLVIMENTO',
        url: 'https://loja-de-roupa-delta.vercel.app/',
        imgUrl: '/images/projects/defaultimage.jpg',
    },
    {
        name: 'Parti Berat',
        description:
            'Aplicação web feita em uma entrevista.',
        url: 'https://pasti-berat-dpbv.vercel.app/',
        imgUrl: '/images/projects/defaultimage.jpg',
    },
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
        description:
            'Diferentes animações de uma biblioteca botões interativos.',
        url: 'https://animated-things.vercel.app/animateless',
        imgUrl: '/images/projects/animateless.png',
    },
    
];

function Projects() {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2 ">Projetos</h1>
            <ul className="bg-white text-left rounded-xl p-4">
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
