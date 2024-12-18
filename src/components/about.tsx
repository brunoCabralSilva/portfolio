import { useState } from "react";

export default function About() {
  const [showMoreData, setShowMoreData] = useState(false);
  return(
    <div className="mb-3 bg-white rounded-xl p-8">
      <p className="font-bold text-xl mb-5">Sobre</p>
      <p className="mb-2">
        Bruno é um Desenvolvedor Full Stack, com foco principalmente em React.js, Angular.js, Typescript, Node.js, Mysql e MongoDB. É uma pessoa completamente apaixonada por RPG, O Senhor dos Anéis e filmes da Marvel. Atualmente vive em João Pessoa, Paraíba, Brasil.
      </p>
      {
        showMoreData &&
        <p>
          Recentemente, concluí uma especialização em Desenvolvimento de Software na Trybe, uma escola que em sua metodologia de ensino provoca em seus alunos uma experiência real do dia a dia de trabalho de um desenvolvedor de software, com muito trabalho em equipe e mão na massa. Trabalho e acredito em ações que possam gerar um impacto positivo na vida das pessoas.
        </p>
      }
      <div className="w-full flex items-center justify-end">
        <button
          type="button"
          className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400"
          onClick={ () => { setShowMoreData(!showMoreData) } }
        >
          { !showMoreData ? '...ver mais': '...ver menos' }
        </button>

      </div>
    </div>
  );
}