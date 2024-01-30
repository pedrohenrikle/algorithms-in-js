import { Card } from "./components/card";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Separator } from "./components/ui/separator";

import {algorithmData} from '@/itens'

export function Home() {
  const { algorithms } = algorithmData

  return (
    <div className="py-8 max-w-7xl mx-auto flex flex-col">
      <Header />

      <Separator className="mt-4"/>

      <Hero />

      <div className="flex flex-col gap-12">
        {algorithms.map(item => {
          return <Card key={item.codeUrl} {...item} />
        })}
      </div>
      

      <div className="flex items-center flex-col mt-12 gap-5">
        <Separator />
        <p className="text-secondary-foreground leading-relaxed text-sm">Made with 💜 by Pedro Henrique Klein</p>
      </div>
    </div>
  )
}
