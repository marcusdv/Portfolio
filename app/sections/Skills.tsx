const skills = [
    'Next.js',
    'React',
    'Typescript',
    'Javascript',
    'GitHub Copilot',
    'Git & GitHub',
    'HTML & CSS',
    'Tailwind',
    'SQL',
    'Vercel',
    'Supabase',
];

function Skills() {
    return (
        <section className="bg-white shadow-md p-2 md:p-5 mt-5 rounded-xl border border-slate-100">
            <h2 className=" text-lg md:text-2xl font-bold mb-3 text-slate-700 text-center md:text-left">Skills</h2>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => {
                    return <li key={index} className="text-slate-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full px-3 py-1 text-sm transition-colors duration-200">{skill}</li>;
                })}
            </ul>
        </section>
    );
}

export default Skills;
