export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  type: "Backend" | "Frontend" | "Fullstack";
}

export const projects: Project[] = [
  {
    title: "API de Gestión Académica",
    description: "Desarrollo de una REST API para el control de notas y asistencias. Implementé autenticación JWT y arquitectura de capas para asegurar la escalabilidad.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "TypeScript"],
    link: "#", // Si tienes despliegue
    github: "https://github.com/tu-usuario/nombre-repo",
    type: "Backend",
  },
  {
    title: "Sistema de Control Electoral",
    description: "Plataforma de gestión de datos en tiempo real para campañas electorales. Permite el seguimiento de líderes y votantes, con persistencia en la nube y analíticas de captación por zonas.",
    tech: ["Node.js", "Express", "PostgreSQL (Supabase)", "Railway", "HTML", "css"],
    link: "https://sistema-registro-electoral-production.up.railway.app/", //link real de despliegue
    github: "https://github.com/Andrewlaborde4550/sistema-registro-electoral.git",
    type: "Fullstack",
  },
  {
    title: "Financial Dashboard Pro",
    description: "Gestor de finanzas con análisis gráfico, metas de ahorro y exportación a PDF.",
    tech: ["Next.js 15", "Supabase", "Tailwind CSS", "Recharts", "TypeScript","Dizzel"],
    link: "https://gestor-gastos.vercel.app",
    github: "https://github.com/Andrewlaborde4550/sistema-gestor-de-gastos.git",
    type: "Frontend",
  }
];