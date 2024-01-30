import { Separator } from "./ui/separator";
import { useInView } from 'react-intersection-observer';


export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });


  return (
    <div 
    ref={ref}
    className={`transition-transform transform ${
      inView ? 'translate-x-0 opacity-100' : 'translate-x-52 opacity-0'
    } duration-500 ease-in-out flex items-center flex-col mt-12 gap-5`}>
    <Separator />
    <p className="text-secondary-foreground leading-relaxed text-sm">Made with 💜 by Pedro Henrique Klein</p>
    </div>
  )
}