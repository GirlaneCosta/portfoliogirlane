import ProjectCard from "../components/ProjectCard";
import '../styles/components/projectspage.sass'
import { FaHome } from "react-icons/fa";

const projects = [
  {
    title: "Smart Systems",
    description: "O site oferece uma interface intuitiva para contato, apresenta uma galeria completa com os serviços já realizados pela empresa e conta com uma seção dedicada à exibição de todos os serviços fornecidos, incluindo câmeras e equipamentos para segurança residencial. O design se adapta bem a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.",
    image: "smartimage.png",
    link: "https://smartsystemsbrasil.online/"                                                          
  },
  {
    title: "Agropet Shop Machado",
    description: "O site oferece produtos e serviços para pets. Ele apresenta um layout moderno e responsivo com um header com logomarca, barra de pesquisa e navegação intuitiva que permite filtrar por categorias (como Banhos & Tosa, Produtos e Promoções). O design se adapta bem a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.",
    image: "agroimage.png",
    link: "https://www.agropetshopmachado.online/"                                                          
  },
  {
    title: "Lojão Torra Torra",
    description: "O site oferece uma ampla variedade de roupas, calçados e acessórios para o público feminino, masculino e infantil. Com um design moderno e responsivo. O destaque é dado a um banner impactante que promove super liquidações, acompanhado de seções que evidenciam as principais categorias e produtos. Apresenta visual moderno e barra de buscas.",
    image: "lojaoimage.png",
    link: "https://www.lojaotorratorra.online/"                                                          
  },
  {
    title: "Conversor de Texto para Fala",
    description: "Este projeto é uma aplicação web simples e interativa que transforma texto escrito em fala utilizando a API Web Speech do navegador. O usuário pode digitar manualmente ou carregar um arquivo .txt, escolher entre diferentes vozes disponíveis e escutar o conteúdo em tempo real.",
    image: "conversorimage.png",
    link: "https://github.com/GirlaneCosta/Conversor-de-Texto-para-Fala"                                                          
  },
];

function ProjectsPage() {
  return (
    <div className="projects-container">
      <div>
      
      <a className="home" href="/"><FaHome /></a>
      </div>
      <h2>Meus projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
