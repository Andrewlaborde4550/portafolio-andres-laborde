"use client" // Obligatorio para animaciones
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden">
      
      {/* Animamos todo el contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter ...">
            Hola, soy <span className="text-blue-500">Andrés Laborde</span>
        </h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            // Añadimos mt-8 para separarlo del título
            className="mx-auto max-w-150 text-center text-zinc-400 md:text-xl mt-8 mb-10 leading-relaxed"
            >
            Ingeniero de Sistemas en formación. Especializado en construir 
            <span className="text-zinc-200"> soluciones escalables</span> y código limpio.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="#proyectos">
              Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="default" size="lg" className="border-zinc-100" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>    
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}