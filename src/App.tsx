import { ThemeProvider } from "@/components/theme-provider"
import { Home } from "./home"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}
