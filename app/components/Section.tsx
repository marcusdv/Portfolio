import { ReactNode } from "react";

type SectionProps = {
    id: string;
    index: string;
    title: string;
    description?: string;
    children: ReactNode;
};

function Section({ id, index, title, description, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-24 border-t border-border py-16 md:py-24">
            <div className="mb-10 flex flex-col gap-3 md:mb-14">
                <span className="label">{index}</span>
                <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
                {description && <p className="max-w-xl leading-relaxed text-muted">{description}</p>}
            </div>
            {children}
        </section>
    );
}

export default Section;
