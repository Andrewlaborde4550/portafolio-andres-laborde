import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">Proyectos Destacados</h2>
        <p className="text-zinc-400 text-center max-w-175 mx-auto">
          Una selección de mis trabajos más recientes, enfocados en arquitectura limpia y soluciones eficientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-blue-400 border-blue-400/30">
                  {project.type}
                </Badge>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-zinc-400 line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="grow">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4 border-t border-zinc-800/50 pt-4">
              <a href={project.github} className="text-zinc-400 hover:text-white transition-colors" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.link} className="text-zinc-400 hover:text-white transition-colors" target="_blank">
                <ExternalLink className="w-5 h-5" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}