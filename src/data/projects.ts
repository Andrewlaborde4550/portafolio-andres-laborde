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
    title: "ForoHub API",
    description: "REST API robusta para un foro de discusión educativo. Implementé una arquitectura sólida con gestión de estados para tópicos, relaciones complejas entre usuarios y cursos, y un sistema global de tratamiento de errores para garantizar respuestas consistentes.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Lombok"],
    link: "#", 
    github: "https://github.com/Andrewlaborde4550/forohub.git", 
    type: "Backend",
  },
  {
    title: "Sistema de Control Electoral",
    description: "Plataforma de gestión de datos en tiempo real para campañas electorales. Permite el seguimiento de líderes y votantes, con persistencia en la nube y analíticas de captación por zonas.",
    tech: ["Node.js", "Express", "Supabase", "Railway", "HTML", "css"],
    link: "https://sistema-registro-electoral-production.up.railway.app/", 
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