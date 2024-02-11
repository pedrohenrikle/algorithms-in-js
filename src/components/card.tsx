import { useState } from "react";
import { AlgorithmDataProps } from "@/itens";
import { Badge } from "./ui/badge";

import { useInView } from 'react-intersection-observer';
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


export function Card(algorithm: AlgorithmDataProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggleExpanded() {
    setIsExpanded(!isExpanded);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
        <div
          key={algorithm.title}
          ref={ref}
          className={`transition-transform transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'
          } duration-700 ease-in-out`}
        >
          <article className="bg-secondary p-4 lg:mx-0 mx-2 rounded-lg flex flex-col lg:flex-row gap-8 opacity-95 overflow-x-hidden">
            <a 
              href={algorithm.codeUrl} 
              target="_blank" 
              className="xl:max-w-96 aspect-square hidden lg:flex "
            >
              <img 
                src={algorithm.urlImage} 
                alt={algorithm.title}
                className="rounded-sm cursor-pointer min-w-min aspect-square object-cover object-top hover:scale-105 transition-all duration-300"
              />
            </a>
    
            <div className="flex flex-col gap-6 flex-grow max-h-full">
              <div className="flex flex-col gap-2">
                <a href={algorithm.codeUrl}>
                  <h1 className="xl:text-4xl text-2xl font-bold leading-relaxed">{algorithm.title}</h1>
                </a>
                <span className="gap-4 flex flex-wrap">
                  {algorithm.badges.map((item) => {
                    return <Badge key={item} className="text-xs whitespace-nowrap">{item}</Badge>;
                  })}
                </span>
              </div>

              <Separator orientation="horizontal" className="bg-secondary-foreground opacity-20"/>

              <div className={`${isExpanded ? '' : 'line-clamp-6'} lg:line-clamp-none transition-all duration-500 `}>
                {algorithm.description.split('\n').map((paragraph, index) => (
                  <p className="leading-relaxed text-justify font-sans text-sm lg:text-base" style={{ textIndent: index === 0 ? '3rem' : '0' }} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {!isExpanded ? (
                <Button
                  onClick={handleToggleExpanded}
                  className="flex md:hidden"
                >
                  Leia Mais
                </Button>
              ) : (
                <Button
                onClick={handleToggleExpanded}
                className=""
                >
                  Leia Menos
                </Button>
              )}

            </div>
          </article>
        </div>
      )
    }
