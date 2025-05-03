const skills = [
    'Javascript',
    'Typescript',
    'Next.js',
    'React',
    'Tailwind',
    'SQL',
    'HTML & CSS',
    'Git & GitHub',
    'Vercel',
    'Figma',
    'Prisma',
];

function Skills() {
    return (
        <section className="bg-white shadow-md p-2 md:p-5 mt-5 rounded-xl">
            <h2 className=" text-lg md:text-2xl font-bold mb-3 text-secondary-foreground text-center md:text-left">Skills</h2>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => {
                    return <li key={index} className="text-secondary-foreground bg-primary-foreground rounded-full px-2 py-1 text-sm">{skill}</li>;
                })}
            </ul>
        </section>
    );
}

export default Skills;
