import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconAt,
  IconBrandVercel,
} from "@tabler/icons-react";
import Image from "next/image";

function Bio() {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      {/* Nome e Título */}
      <Image
        className="h-auto rounded-full md:mx-0 mx-auto border-2 border-gray-500 shadow-md"
        src="/marcus2.jpg"
        alt="Foto de perfil"
        width={200}
        height={100}
      />
      <h1 className=" text-lg md:text-2xl font-bold mt-3 ">Marcus Costa</h1>
      <p className="text-secondary-foreground py-2">Desenvolvedor Front-end.</p>

      {/* Meus Links */}
      <div className="flex flex-row gap-2 mt-2 justify-center md:justify-start">
        <a
          href="mailto:marcus.vinicius.bittencourt.c@gmail.com"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAt className="text-blue-400 hover:text-blue-700 cursor-pointer hover:scale-105" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-bittencourt/"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="text-pink-400 hover:text-pink-700 cursor-pointer hover:scale-105" />
        </a>
        <a
          href="https://github.com/marcusdv"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub className="text-red-400 hover:text-red-700 cursor-pointer hover:scale-105" />
        </a>
        <a
          href="https://vercel.com/marcusdvs-projects"
          className="text-secondary-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandVercel className="text-yellow-400 hover:text-yellow-700 cursor-pointer hover:scale-105" />
        </a>
      </div>
    </section>
  );
}

export default Bio;
