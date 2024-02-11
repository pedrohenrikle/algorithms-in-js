import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Separator } from "./components/ui/separator";

import {algorithmData} from '@/itens'

export function Home() {
  const { algorithms } = algorithmData

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col">
      <Header />

      <Separator className="mt-4"/>

      <Hero />

      <div className="flex flex-col gap-12 mt-[38rem] xl:mt-0"> 
        {algorithms.map(item => {
          return <Card key={item.codeUrl} {...item} />
        })}
      </div>
      

      <Footer />
    </div>
  )
}
