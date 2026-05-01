import { IconFileCv, IconDownload, IconBriefcase, IconSchool } from "@tabler/icons-react";

function Resume() {
    return (
        <section className="bg-white rounded-xl p-5 md:p-8 border border-slate-100 shadow-sm mb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                        <IconFileCv className="text-blue-600" size={32} /> Currículo
                    </h2>
                    <p className="text-slate-600 mt-1">Conheça minha trajetória profissional e acadêmica.</p>
                </div>
                <a
                    href="https://docs.google.com/document/d/1WEU98cjHOVYvAqbBb4LgGPbS4OenVm392gtyQQdcFHs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    <IconDownload size={20} />
                    Baixar PDF
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Experiência */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-5">
                        <IconBriefcase className="text-blue-600" size={24} /> Experiência
                    </h3>
                    <div className="relative border-l-2 border-slate-200 ml-3 pl-6 flex flex-col gap-6">
                        {/* Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-blue-600 border-2 border-white shadow-sm hover:scale-125 transition-transform"></span>
                            <h4 className="font-bold text-slate-800 text-lg">Desenvolvedor Frontend</h4>
                            <p className="text-sm font-semibold text-blue-600 mb-2">
                                Instituto Themis Furigo • São Paulo, SP (Remoto) • Mar 2025 – Atual
                            </p>
                            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
                                <li>Desenvolvimento e manutenção de páginas web com PHP, JavaScript, HTML e CSS.</li>
                                <li>Criação de páginas institucionais na plataforma Locaweb.</li>
                                <li>Participação na reestruturação do site, melhorando organização e usabilidade.</li>
                                <li>Implementação de melhorias na interface e experiência do usuário.</li>
                                <li>Correção de bugs e manutenção de funcionalidades.</li>
                                <li>Integração com APIs para consumo de dados no frontend.</li>
                            </ul>
                        </div>
                        {/* Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-slate-300 border-2 border-white shadow-sm hover:scale-125 transition-transform"></span>
                            <h4 className="font-bold text-slate-800 text-lg">
                                Automação de Extração de Dados de PDFs (Python)
                            </h4>
                            <p className="text-sm font-medium text-slate-500 mb-2">
                                Freelance (Profissionais da área da saúde) • Salvador, BA • 2023 – 2025
                            </p>
                            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
                                <li>
                                    Desenvolvimento de aplicação para extração de dados estruturados a partir de PDFs.
                                </li>
                                <li>Automação da geração de planilhas Excel a partir dos dados extraídos.</li>
                                <li>Manipulação e tratamento de dados utilizando Python.</li>
                                <li>Redução de esforço manual e aumento da precisão dos dados.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Educação */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-5">
                        <IconSchool className="text-blue-600" size={24} /> Educação
                    </h3>
                    <div className="relative border-l-2 border-slate-200 ml-3 pl-6 flex flex-col gap-6">
                        {/* Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-blue-600 border-2 border-white shadow-sm hover:scale-125 transition-transform"></span>
                            <h4 className="font-bold text-slate-800 text-lg">
                                Tecnólogo em Análise e Desenvolvimento de Sistemas
                            </h4>
                            <p className="text-sm font-semibold text-blue-600 mb-2">
                                FIB Estácio • Salvador, BA • Concluído em 2018
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="font-medium text-slate-700">Disciplinas relevantes:</span> Banco de
                                Dados, Estrutura de Dados, Engenharia de Software, Sistemas Operacionais e Algoritmos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
