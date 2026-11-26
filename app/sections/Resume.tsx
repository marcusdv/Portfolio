import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import Section from "../components/Section";

const RESUME_PDF = "/pdfs/Marcus_costa.pdf";

const experience = [
    {
        role: "Desenvolvedor Frontend",
        org: "Instituto Themis Furigo",
        meta: "São Paulo, SP (Remoto)",
        period: "2024 até hoje",
        bullets: [
            "Desenvolvimento de páginas institucionais com TypeScript, JavaScript, HTML e CSS.",
            "Desenvolvimento acelerado com IA generativa (Claude) na escrita, revisão e documentação do código.",
            "Integração de APIs REST para exibição dinâmica de informações.",
            "Correção de bugs, melhorias de usabilidade e implantação do controle de versão com Git/GitHub.",
        ],
    },
    {
        role: "Desenvolvedor Python",
        org: "Autônomo · Profissionais de Saúde",
        meta: "Salvador, BA",
        period: "2020 a 2024",
        bullets: [
            "Aplicação para extração de dados estruturados de PDFs com Pypdf, gerando planilhas Excel automaticamente com Openpyxl.",
            "Redução do tempo diário de extração manual, ampliando o tempo de análise dos profissionais.",
            "Suporte contínuo a múltiplos profissionais de saúde.",
        ],
    },
];

const education = [
    {
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        org: "FIB Estácio",
        meta: "Salvador, BA",
        period: "Concluído",
        bullets: [],
    },
];

const courses = [
    "Algorithms and Data Structures Masterclass | Udemy",
    "The Web Developer Bootcamp | Udemy",
    "The Modern JavaScript / Node Bootcamp | Udemy",
    "SQL and PostgreSQL: The Complete Developer's Guide | Udemy",
    "The Ultimate MySQL Bootcamp | Udemy",
    "Quality Assurance: plano de testes e gestão de bugs",
    "Learn HTTP Clients in TypeScript | Boot.dev",
    "Learn Git | Boot.dev",
    "Teste e QA | Iterasys",
];

type Entry = { role: string; org: string; meta: string; period: string; bullets: string[] };

function Timeline({ entries }: { entries: Entry[] }) {
    return (
        <ol className="flex flex-col gap-10">
            {entries.map((entry) => (
                <li key={entry.role} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-muted">{entry.period}</span>
                        <h4 className="text-base font-medium">{entry.role}</h4>
                        <p className="text-sm text-muted">
                            {entry.org} · {entry.meta}
                        </p>
                    </div>
                    {entry.bullets.length > 0 && (
                        <ul className="flex flex-col gap-1.5 border-l border-border pl-4">
                            {entry.bullets.map((bullet) => (
                                <li key={bullet} className="text-sm leading-relaxed text-muted">
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ol>
    );
}

function Resume() {
    return (
        <Section id="curriculo" index="03 / Trajetória" title="Currículo">
            <div className="flex flex-col gap-14">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[8rem_1fr] md:gap-8">
                    <h3 className="label md:pt-1">Experiência</h3>
                    <Timeline entries={experience} />
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-[8rem_1fr] md:gap-8">
                    <h3 className="label md:pt-1">Educação</h3>
                    <Timeline entries={education} />
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-[8rem_1fr] md:gap-8">
                    <h3 className="label md:pt-1">Cursos</h3>
                    <ul className="flex flex-col gap-1.5 border-l border-border pl-4">
                        {courses.map((course) => (
                            <li key={course} className="text-sm leading-relaxed text-muted">
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-[8rem_1fr] md:gap-8">
                    <h3 className="label md:pt-1">Idiomas</h3>
                    <p className="text-sm text-muted">Inglês fluente · Português nativo</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href={RESUME_PDF}
                        download
                        className="flex w-fit items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                    >
                        <IconDownload size={16} stroke={1.5} />
                        Baixar currículo (PDF)
                    </a>
                    <a
                        href={RESUME_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
                    >
                        Ver no navegador
                        <IconArrowUpRight
                            size={16}
                            stroke={1.5}
                            className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default Resume;
