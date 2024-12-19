import { IArticle } from '@/interfaces';
import articlesList from '../data/articles.json';
import Image from 'next/image';
export default function Articles() {
  return(
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Artigos</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {
          articlesList.map((article: IArticle, index: number) => (
            <a
              href={article.link}
              target="_blank"
              className="border border-transparent hover:border-[#004182]"
              key={index}
            >
              <Image
                className="border-1 border-transparent bg-white w-full"
                src={'/articles/' + article.name + '.png'}
                alt={article.name + ''}
                width={1000}
                height={1000}
              />
            </a>
          ))
        }
      </div>
      <div className="w-full flex items-center justify-start mt-5">
        <a
          type="button"
          className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400 text-sm"
          href="https://community.revelo.com.br/author/bruno/"
          target="_blank"
        >
          Clique aqui para ver mais Artigos
        </a>
      </div>
    </div>
  );
}