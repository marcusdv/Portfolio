"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Estado inicial dos campos do formulário
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  
  // Estado para armazenar os dados do formulário
  const [formDetails, setFormDetails] = useState(initialState);

  // Estado inicial das mensagens de status
  const statusInitialState = {
    success: false,
    message: "",
  };
  
  // Estado para controlar o status do envio (sucesso/erro/loading)
  const [status, setStatus] = useState(statusInitialState);
  
  // Estado para controlar se está enviando o formulário
  const [isLoading, setIsLoading] = useState(false);

  // Função para atualizar o estado do formulário conforme o usuário digita
  const onValueChange = (fieldName: string, value: string) => {
    const updatedFormDetails = { ...formDetails, [fieldName]: value };
    setFormDetails(updatedFormDetails);
  };

  // Função principal para enviar a mensagem via EmailJS
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    
    // Validação básica: verifica se todos os campos estão preenchidos
    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "Por favor, preencha todos os campos." });
      return;
    }
    
    // Ativa o estado de loading (botão desabilitado)
    setIsLoading(true);
    // Mostra mensagem de "Enviando..." para o usuário
    setStatus({ ...statusInitialState, message: "Enviando..." });

    // Busca as variáveis de ambiente do EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Verifica se todas as variáveis de ambiente estão configuradas
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ success: false, message: "Erro de configuração. Tente novamente mais tarde." });
      setIsLoading(false);
      return;
    }

    try {
      // Envia o email usando o EmailJS
      await emailjs.send(serviceId, templateId, formDetails, publicKey);

      // Limpa o formulário após envio bem-sucedido
      setFormDetails(initialState);
      // Mostra mensagem de sucesso
      setStatus({ success: true, message: "Mensagem enviada com sucesso!" });
    } catch (error: unknown) {
      // Trata erros durante o envio
      let errorMessage = "Houve um erro ao enviar a mensagem.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      // Sempre remove o estado de loading, independente do resultado
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h1 className="text-4xl text-left font-bold my-6 text-slate-800">Entre em contato</h1>
      <div className="bg-white text-left rounded-xl p-8 border border-slate-100 shadow-sm">
        <p className="text-slate-600 mb-4 leading-relaxed">
          Interessado? Entre em contato pelo{" "}
          <a
            href="mailto:marcus.vinicius.bittencourt.c@gmail.com"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            marcus.vinicius.bittencourt.c@gmail.com
          </a>
          {" "}ou utilize o formulário abaixo.
        </p>
        <form className="mt-6 flex flex-col gap-6" onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="seu nome"
            className="text-md bg-slate-50 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 w-full transition-all duration-200"
            value={formDetails.name}
            onChange={(e) => onValueChange("name", e.target.value)}
          />
          <input
            type="email"
            placeholder="seu email"
            className="text-md bg-slate-50 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 w-full transition-all duration-200"
            value={formDetails.email}
            onChange={(e) => onValueChange("email", e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="sua mensagem"
            rows={4}
            className="text-md bg-slate-50 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 w-full transition-all duration-200"
            value={formDetails.message}
            onChange={(e) => onValueChange("message", e.target.value)}
          ></textarea>
          <p className={`${status.success ? "text-green-500" : "text-red-500"} text-sm`}>
            {status.message}
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            {isLoading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default Contact;
