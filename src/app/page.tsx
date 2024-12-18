'use client'
import About from "@/components/about";
import Academics from "@/components/academics";
import Articles from "@/components/articles";
import Experience from "@/components/experience";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="">
      <div className="bg-white h-[8vh] hidden sm:flex"></div>
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
      <div className="bg-white h-[8vh]">

      </div>
    </div>
  );
}
