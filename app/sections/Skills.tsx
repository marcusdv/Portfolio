import Section from "../components/Section";

const skillGroups = [
    {
        title: "Frontend",
        skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS", "Shadcn/UI"],
    },
    {
        title: "Backend & Dados",
        skills: ["Python", "PHP", "PostgreSQL", "Supabase", "REST API"],
    },
    {
        title: "Ferramentas",
        skills: ["Git & GitHub", "Vercel"],
    },
];

function Skills() {
    return (
        <Section id="skills" index="02 / Stack" title="Tecnologias">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                {skillGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-4">
                        <h3 className="label">{group.title}</h3>
                        <ul className="flex flex-col gap-2.5">
                            {group.skills.map((skill) => (
                                <li key={skill} className="text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
