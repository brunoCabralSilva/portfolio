'use client'
import About from "@/components/about";
import Academics from "@/components/academics";
import Articles from "@/components/articles";
import Experience from "@/components/experience";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-white sm:h-[8vh] flex justify-center items-center">
        <div className="w-full px-4 py-2 sm:py-0">
          <Image
            src="/logo/logo-bc.png"
            className="border-1 border-transparent bg-white p-1 w-10 object-contain"
            alt="Logo de Perfil de Bruno Cabral"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F4F2EE]">
        <div className="w-full px-2 sm:px-0 sm:w-2/3">
          <Presentation />
          <About />
          <Experience />
          <Academics />
          <Articles />
          <Projects />
        </div>
      </div>
      <footer className="bg-white sm:h-[8vh] flex justify-center items-center py-3 sm:py-0">
        <div className="w-full px-4 flex flex-col sm:flex-row items-center sm:justify-between justify-center">
          <Image
            src="/logo/logo-bc.png"
            className="border-1 border-transparent bg-white p-1 w-10 object-contain"
            alt="Logo de Perfil de Bruno Cabral"
            width={1000}
            height={1000}
          />
          <span className="text-sm">© 2024 Copyright Bruno Cabral</span>
        </div>
      </footer>
    </div>
  );
}
