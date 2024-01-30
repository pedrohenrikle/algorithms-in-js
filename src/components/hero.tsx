import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
      <div className="flex items-center flex-col h-screen justify-between pb-36 pt-16 animate-out ">
        <div className="flex w-full justify-center ">
          <div
            ref={ref}
            className={`transition-transform transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            } duration-1000 ease-in-out`}
          >
            <section className="flex flex-col items-center gap-2 opacity-100">
              <h1 className="text-6xl font-semibold">Algorítimos em JavaScript</h1>
              <p className="opacity-75">Aqui estão alguns dos meus estudos sobre algorítimos de busca e ordenação</p>
            </section>
          </div>
        </div>
        
      <div/>
        <div className='flex gap-32'>
          <article 
            className={`flex flex-col items-center gap-3 transition-transform transform 
            ${ inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out`}
          >
            <img 
              src="/bigO.png" 
              alt="Gráfico de complexidade do BigO notation"
              className='max-w-[40rem] rounded-lg'
            />
            <h3 className='text-secondary-foreground'>
              Fonte: <a href="http://bigocheatsheet.com" target='_blank'>http://bigocheatsheet.com</a>
            </h3>
          </article>

          <div className={`text-justify flex flex-col gap-2 transition-transform transform 
            ${ inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out`}>
            <h1 className='text-2xl font-semibold'>O início de tudo</h1>
            <p className='leading-relaxed'>Nesse artigo, vou desmistificar os mais famosos algorítimos de busca e ordenação, porém, em JavaScript! A ideia da construção da plataforma foi por uma falta de conteúdo na linguagem. A maioria dos conteúdos eram voltados pra soluções em Python, Java, C, C++, entre outros.</p>
            <br/>
            <h1 className='text-2xl font-semibold'><i>Big-O Notation</i></h1>
            <p className='leading-relaxed'>Dentro dos <i>cards</i> dos algorítmos, existem <i>tags</i>, sendo uma delas no formato semelhante a: <b>O(log n)</b>. Isso é uma expressão matemática usada pra determinar os limites e a complexidade de tempo e espaço do nosso código em função de variáveis. A tabela ao lado mostra as variações das notações de complexidade, desde ineficientes até eficientes.</p>
          </div>
        </div>


        <div className="animate-bounce">
          <div className="border-primary w-7 h-7 border border-r-2 border-l-0 border-b-2 border-t-0 rotate-45"/>
        </div>
      </div>

  )
}