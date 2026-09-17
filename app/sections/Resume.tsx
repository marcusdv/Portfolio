import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import Section from "../components/Section";

const RESUME_PDF = "/pdfs/Marcus_Costa_Desenvolvedor_Fullstack.pdf";

const experience = [
    {
        role: "Desenvolvedor Frontend",
        org: "Instituto Themis Furigo",
        meta: "São Paulo, SP (Remoto)",
        period: "Mar 2025 até hoje",
        bullets: [
            "Desenvolvimento e manutenção de páginas web com PHP, JavaScript, HTML e CSS.",
            "Criação de páginas institucionais na plataforma Locaweb.",
            "Participação na reestruturação do site, melhorando organização e usabilidade.",
            "Correção de bugs e integração com APIs para consumo de dados no frontend.",
        ],
    },
    {
        role: "Automação de extração de dados de PDFs",
        org: "Freelance para profissionais da área da saúde",
        meta: "Salvador, BA",
        period: "2020 a 2025",
        bullets: [
            "Aplicação em Python para extração de dados estruturados a partir de PDFs.",
            "Automação da geração de planilhas Excel a partir dos dados extraídos.",
            "Redução de esforço manual e aumento da precisão dos dados.",
        ],
    },
];

const education = [
    {
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        org: "FIB Estácio",
        meta: "Salvador, BA",
        period: "Concluído em 2018",
        bullets: [
            "Disciplinas relevantes: Banco de Dados, Estrutura de Dados, Engenharia de Software, Sistemas Operacionais e Algoritmos.",
        ],
    },
];

type Entry = (typeof experience)[number];

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
                    <ul className="flex flex-col gap-1.5 border-l border-border pl-4">
                        {entry.bullets.map((bullet) => (
                            <li key={bullet} className="text-sm leading-relaxed text-muted">
                                {bullet}
                            </li>
                        ))}
                    </ul>
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
