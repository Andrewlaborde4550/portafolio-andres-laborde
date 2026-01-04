"use client"
import { useState } from "react"
import { Github, Linkedin, Mail, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "andresalejandrolaborde@gmail.com" // Sustituye por el tuyo

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contacto" className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">¿Hablamos?</h2>
        <p className="text-zinc-400 text-center max-w-md">
          Estoy buscando mi primera oportunidad profesional. Si buscas a alguien 
          apasionado por el código limpio, contáctame.
        </p>

        <div className="flex gap-4">
          <Button variant="default" size="icon" asChild>
            <a href="https://github.com/tu-usuario" target="_blank"><Github className="h-5 w-5" /></a>
          </Button>
          <Button variant="default" size="icon" asChild>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank"><Linkedin className="h-5 w-5" /></a>
          </Button>
          
          {/* Botón de Copiar Email */}
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1">
            <Mail className="h-4 w-4 text-zinc-400" />
            <span className="text-sm text-zinc-300">{email}</span>
            <button 
              onClick={copyToClipboard}
              className="ml-2 p-1 hover:bg-zinc-800 rounded-md transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-zinc-400" />}
            </button>
          </div>
        </div>

        <p className="text-xs text-zinc-600 mt-8">
          © {new Date().getFullYear()} Andrés Laborde. Construido con Next.js y Shadcn/UI.
        </p>
      </div>
    </footer>
  )
}