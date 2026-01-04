"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Andrés_Laborde.dev
        </span>
        
        
        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
        {/* El 'hidden' los oculta en móvil, el 'md:flex' los muestra en escritorio */}
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#habilidades" className="hover:text-white transition-colors">Habilidades</Link>
            <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
        </div>

        <Button variant="default" size="sm" className="border-zinc-50">
          <a href="/Andres_Laborde_CV.pdf" download="Andres_Laborde_CV.pdf">
            CV
          </a>
        </Button>
      </div>
    </nav>
  )
}