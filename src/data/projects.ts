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
    title: "E-commerce Tech-Store",
    description: "Plataforma de compras con carrito en tiempo real, filtros avanzados y diseño responsivo. Enfocado en la optimización de carga y experiencia de usuario.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Zustand"],
    link: "#",
    github: "https://github.com/tu-usuario/nombre-repo",
    type: "Fullstack",
  },
  {
    title: "Monitor de Criptomonedas",
    description: "Dashboard que consume APIs externas para mostrar precios en tiempo real. Incluye gráficos interactivos y un sistema de alertas de precios.",
    tech: ["React", "Chart.js", "Axios", "Context API"],
    link: "#",
    github: "https://github.com/tu-usuario/nombre-repo",
    type: "Frontend",
  },
];