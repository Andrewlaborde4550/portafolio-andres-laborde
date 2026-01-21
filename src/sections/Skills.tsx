"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Habilidades Técnicas
        </h2>
        <p className="text-zinc-400 max-w-150 mx-auto">
          Mi stack se enfoca en el desarrollo de aplicaciones robustas, escalables y con una gran experiencia de usuario.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all group"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-zinc-800/80 text-zinc-300 hover:bg-blue-500 hover:text-white transition-all cursor-default py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}