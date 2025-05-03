"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const statusInitialState = {
    success: false,
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialState);
  const [status, setStatus] = useState(statusInitialState); // Para controlar o status do envio

  // Atualiza o estado do formulário
  const onValueChange = (fieldName: string, value: string) => {
    const updatedFormDetails = { ...formDetails, [fieldName]: value };
    setFormDetails(updatedFormDetails);
  };

  // Envia a mensagem para o serviço de email
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormDetails(initialState);
    setStatus(statusInitialState); // Limpa o status anterior
    setStatus({ ...statusInitialState, message: "Enviando..." }); // Define a mensagem de "Enviando..."

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Erro: As variáveis de ambiente do EmailJS não estão configuradas."
      );
      // Você pode optar por não enviar o formulário ou exibir uma mensagem de erro ao usuário
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formDetails,
        publicKey
      );

      setFormDetails(initialState);

      setStatus({ success: true, message: "Mensagem enviada com sucesso!" });
    } catch (error: any) {
      console.error("FAILED...", error);

      setStatus({
        success: false,
        message: "Houve um erro ao enviar a mensagem.",
      });
    }
  };

  return (
    <section>
      <h1 className="text-4xl text-left font-bold my-6">Contact me</h1>
      <div className="bg-white text-left rounded-xl p-8 ">
        <p>
          Interested in working together? Contact me at{" "}
          <a
            href="mailto:marcus.vinicius.bittencourt.c@gmail.com"
            className="text-primary"
          >
            {" "}
            marcus.vinicius.bittencourt.c@gmail.com
          </a>
          .
        </p>
        <form className="mt-3 flex flex-col gap-6" onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="seu nome"
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
            value={formDetails.name}
            onChange={(e) => onValueChange("name", e.target.value)}
          />
          <input
            type="email"
            placeholder="seu email"
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
            value={formDetails.email}
            onChange={(e) => onValueChange("email", e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="sua mensagem"
            rows={4}
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
            value={formDetails.message}
            onChange={(e) => onValueChange("message", e.target.value)}
          ></textarea>
          <p className={`${status.success ? "text-green-500" : ""} text-sm`}>
            {status.message}
          </p>
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
