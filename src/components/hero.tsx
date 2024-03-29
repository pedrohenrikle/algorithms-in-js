import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex items-center flex-col h-screen justify-between pb-36 pt-16 animate-out">
      <div className="flex w-full justify-center">
        <div
          ref={ref}
          className={`transition-transform transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          } duration-1000 ease-in-out`}
        >
          <section className="flex flex-col items-center gap-2 px-2">
            <h1 className="text-2xl md:text-6xl text-nowrap font-semibold">Algorítimos em JavaScript</h1>
            <p className="opacity-75 text-sm md:text-base text-center">Aqui estão alguns dos meus estudos sobre algorítimos de busca e ordenação</p>
          </section>
        </div>
      </div>
      <div className='flex flex-col-reverse xl:flex-row mt-16 xl:mt-5 gap-32'>
        <article
          className={`flex flex-col items-center gap-3 transition-transform transform px-5
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out`}
        >
          <img
            src="/bigO.png"
            alt="Gráfico de complexidade do BigO notation"
            className='max-w-[40rem] rounded-lg w-full md:w-screen -mt-10 md:mt-0'
          />
          <h3 className='text-secondary-foreground text-sm md:text-base'>
            Fonte: <a href="http://bigocheatsheet.com" target='_blank'>http://bigocheatsheet.com</a>
          </h3>
        </article>

        <div className={`text-justify flex flex-col gap-2 transition-transform transform px-5 md:px-28 xl:px-0 
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out `}
        >
          <h1 className='text-xl font-semibold'>O início de tudo</h1>
          <p className='leading-relaxed text-sm'>Nesse artigo, vou explicar algorítimos de busca e ordenação em JavaScript. A motivação por trás da criação do site surgiu da vontade de auxiliar a comunidade dev, motivada pela carência de conteúdo disponível na linguagem. A maioria dos conteúdos eram voltados pra soluções em Python, Java, C, C++, entre outros.</p>
          <br />
          <h1 className='text-xl font-semibold'><i>Big-O Notation</i></h1>
          <p className='leading-relaxed text-sm'>
            Em resumo, o Big-O mede a eficiência de um algoritmo com base nas diferentes quantidades de dados de entrada.

            Ele ajuda a prever o tempo que o algoritmo levará no <b>PIOR</b> cenário, com base nos dados recebidos.

            Queremos entender como o código se comporta com mais dados. Ficará rápido, lento ou significativamente mais demorado? Vamos explorar isso abaixo.
            <span className='opacity-60 m-2'>(Veja o gráfico para representação visual)</span>
          </p>
        </div>
      </div>

      <div className="animate-bounce mt-32 xl:mt-0 ">
        <div className="border-primary w-7 h-7 border border-r-2 border-l-0 border-b-2 border-t-0 rotate-45 " />
      </div>
    </div>
  )
}