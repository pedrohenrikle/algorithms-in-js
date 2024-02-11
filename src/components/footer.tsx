import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <div 
    className={`flex items-center flex-col mt-12 gap-5`}>
      <Separator />
      <div className="flex gap-4 items-center text-secondary-foreground leading-relaxed text-sm">
        <p className="opacity-70">Made with 💜 by Pedro Henrique Klein</p>
      </div>
    </div>
  )
}