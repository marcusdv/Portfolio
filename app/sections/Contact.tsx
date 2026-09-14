"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../components/Section";

const EMAIL = "marcus.vinicius.bittencourt.c@gmail.com";

const inputStyles =
    "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm placeholder-muted transition-colors focus:border-foreground focus:outline-none";

const Contact = () => {
    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(initialState);

    const statusInitialState = {
        success: false,
        message: "",
    };

    const [status, setStatus] = useState(statusInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const onValueChange = (fieldName: string, value: string) => {
        const updatedFormDetails = { ...formDetails, [fieldName]: value };
        setFormDetails(updatedFormDetails);
    };

    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formDetails.name || !formDetails.email || !formDetails.message) {
            setStatus({ success: false, message: "Por favor, preencha todos os campos." });
            return;
        }

        setIsLoading(true);
        setStatus({ ...statusInitialState, message: "Enviando..." });

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({ success: false, message: "Erro de configuração. Tente novamente mais tarde." });
            setIsLoading(false);
            return;
        }

        try {
            await emailjs.send(serviceId, templateId, formDetails, publicKey);

            setFormDetails(initialState);
            setStatus({ success: true, message: "Mensagem enviada com sucesso!" });
        } catch (error: unknown) {
            let errorMessage = "Houve um erro ao enviar a mensagem.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setStatus({
                success: false,
                message: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Section
            id="contato"
            index="04 / Contato"
            title="Vamos conversar"
            description="Interessado em trabalhar junto ou tem alguma pergunta? Me mande uma mensagem."
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[8rem_1fr] md:gap-8">
                <span className="label md:pt-3">Email</span>
                <a
                    href={`mailto:${EMAIL}`}
                    className="w-fit break-all text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                    {EMAIL}
                </a>

                <span className="label mt-6 md:mt-4 md:pt-3">Mensagem</span>
                <form className="flex max-w-xl flex-col gap-4 md:mt-4" onSubmit={onHandleSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Seu nome"
                            aria-label="Seu nome"
                            className={inputStyles}
                            value={formDetails.name}
                            onChange={(e) => onValueChange("name", e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Seu email"
                            aria-label="Seu email"
                            className={inputStyles}
                            value={formDetails.email}
                            onChange={(e) => onValueChange("email", e.target.value)}
                        />
                    </div>
                    <textarea
                        placeholder="Sua mensagem"
                        aria-label="Sua mensagem"
                        rows={5}
                        className={`${inputStyles} resize-none`}
                        value={formDetails.message}
                        onChange={(e) => onValueChange("message", e.target.value)}
                    ></textarea>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-fit rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? "Enviando..." : "Enviar mensagem"}
                        </button>
                        {status.message && (
                            <p
                                role="status"
                                className={`text-sm ${status.success ? "text-emerald-600" : "text-muted"}`}
                            >
                                {status.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
