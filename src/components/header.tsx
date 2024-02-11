import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between px-5">
        <h2 className="text-xl sm:text-2xl font-bold text-primary cursor-default">pedrohfk</h2>
        
        <div className="flex gap-4 items-center">
          <Button className='gap-4' asChild>
            <a href="https://github.com/pedrohenrikle" target="_blank">
              <Github/>
              <p className='font-semibold hidden sm:flex'>pedrohenrikle</p>
            </a>
          </Button>
          
          <Separator orientation="vertical" />
         
          <ModeToggle />
        </div>
      </div>
  )
}