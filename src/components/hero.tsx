import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (

      <div className="flex items-center flex-col h-screen justify-between py-40 animate-out ">
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

        <div className="animate-bounce">
          <div className="border-primary w-7 h-7 border border-r-2 border-l-0 border-b-2 border-t-0 rotate-45"/>
        </div>
      </div>

  )
}