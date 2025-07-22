import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconAt,
  IconBrandVercel,
} from "@tabler/icons-react";
import Image from "next/image";

function Bio() {
  return (
    <section className="bg-white text-center flex flex-col items-center md:text-left rounded-xl p-2 md:p-5 shadow-md border border-slate-100">
      {/* Nome e Título */}
      <Image
        className="h-auto rounded-full md:mx-0 mx-auto border-2 border-slate-300 shadow-md"
        src="/marcus2.jpg"
        alt="Foto de perfil"
        width={200}
        height={100}
      />
      <h1 className=" text-lg md:text-2xl font-bold mt-3 text-slate-800">Marcus Costa</h1>
      <p className="text-slate-600 py-2">Desenvolvedor Front-end.</p>

      {/* Meus Links */}
      <div className="flex flex-row gap-2 mt-2 justify-center md:justify-start">
        <a
          href="mailto:marcus.vinicius.bittencourt.c@gmail.com"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAt className="text-blue-500 hover:text-blue-700 cursor-pointer hover:scale-105 transition-all duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-bittencourt/"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="text-indigo-500 hover:text-indigo-700 cursor-pointer hover:scale-105 transition-all duration-200" />
        </a>
        <a
          href="https://github.com/marcusdv"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub className="text-slate-600 hover:text-slate-800 cursor-pointer hover:scale-105 transition-all duration-200" />
        </a>
        <a
          href="https://vercel.com/marcusdvs-projects"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandVercel className="text-emerald-500 hover:text-emerald-700 cursor-pointer hover:scale-105 transition-all duration-200" />
        </a>
      </div>
    </section>
  );
}

export default Bio;
