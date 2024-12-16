'use client'
import { useContext } from "react";
import contexto from "@/context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Informations() {
  const { setShowInformations } = useContext(contexto);

  return(
    <div className="w-full h-full fixed top-0 left-0 bg-black/60 flex justify-center z-30 pt-[10vh]">
      <div className="w-full px-2 sm:px-0 sm:w-2/3 h-96 bg-white mt-2 rounded-xl">
        <div className="flex items-center justify-end p-2">
          <button
            type="button"
            className="text-4xl"
            onClick={ () => setShowInformations(false) }
          >
            <IoIosCloseCircleOutline /> 
          </button>
        </div>
        <div className="px-5">
        Mídias Sociais
        <p>Currículo</p>
        <p>bruno-cabral.com/curriculo.pdf</p>
        <p>LinkedIn</p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/brunocabralsilva/"
        >
          linkedin.com/in/mateushoffman
        </a>
        <p>GitHub</p>
        <a
          target="_blank"
          href="https://github.com/brunoCabralSilva"
        >
          github.com/brunoCabralSilva
        </a>
        WhatsApp

        whatsapp.com/send

        Informações
          <p>Email: bruno.cabral.silva2018@gmail.com</p>
          <p>Celular: +55 83 99672-9765</p>
          <p>Endereço: João Pessoa, Paraíba, Brasil</p>
          <p>Idade: 30 anos</p>
        </div>
      </div>
    </div>
  );
}