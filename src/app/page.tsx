import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Footer from "@/components/Footer";     

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/*Agregamos el Navbar aquí arriba */}
      <Navbar /> 
      
      {/* El Hero y el resto de secciones */}
      <Hero />
      <Projects />
      <Skills />
      <Footer/>
    </main>
  );
}