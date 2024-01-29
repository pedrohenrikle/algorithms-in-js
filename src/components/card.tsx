import { AlgorithmDataProps } from "@/itens";
import { Badge } from "./ui/badge";

import { useInView } from 'react-intersection-observer';


export function Card(algorithm: AlgorithmDataProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      key={algorithm.title}
      ref={ref}
      className={`transition-transform transform ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-72 opacity-0'
      } duration-1000 ease-in-out`}
    >
      <article className="bg-secondary p-6 rounded-lg flex gap-8 opacity-95">
        <a href={algorithm.codeUrl} target="_blank" className="max-w-96 aspect-square flex">
          <img 
            src={algorithm.urlImage} 
            alt={algorithm.title}
            className="rounded-sm cursor-pointer w-full object-cover object-top hover:scale-105 transition-all duration-300"
          />
        </a>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{algorithm.title}</h1>
            <span className="gap-4 flex">
              {algorithm.badges.map((item) => {
                return <Badge key={item}>{item}</Badge>
              })}
            </span>
          </div>
          {algorithm.description.split('\n').map((paragraph, index) => (
            <p className="leading-7 text-justify font-sans" style={{textIndent: index == 0 ? '3rem' : '0' }} key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}