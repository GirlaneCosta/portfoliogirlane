import ProjectCard from "../components/ProjectCard";
import "../styles/components/projectspage.sass";
import { FaHome } from "react-icons/fa";

const projects = [
  {
    title: "Smart CFTV",
    description:
      "O site oferece uma interface intuitiva para contato, apresenta uma galeria completa com os serviços já realizados pela empresa e conta com uma seção dedicada à exibição de todos os serviços fornecidos, incluindo câmeras e equipamentos para segurança residencial. O design se adapta bem a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops. 🔧 Tecnologias Utilizadas: HTML5, CSS3, JavaScript, React, Vite, Git & GitHub.",
    image: "smartimage.png",
    link: "https://smartsystemsbrasil.online/",
    linkgit: "https://github.com/GirlaneCosta/SmartSystems-Brasil",
  },
  {
    title: "Agropet Shop Machado",
    description:
      "O site oferece produtos e serviços para pets. Ele apresenta um layout moderno e responsivo com um header com logomarca, navegação intuitiva que permite filtrar por categorias (como Banhos, Tosa e Produtos). O design se adapta bem a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops. 🔧 Tecnologias Utilizadas: HTML5, CSS3, JavaScript, React, Vite, Git & GitHub. ",
    image: "agroimage.png",
    link: "https://www.agropetshopmachado.online/",
    linkgit: "https://github.com/GirlaneCosta/AgropetShop-machado",
  },
  {
    title: "Conversor de Texto para Fala",
    description:
      "Este projeto é uma aplicação web simples e interativa que transforma texto escrito em fala utilizando a API Web Speech do navegador. O usuário pode digitar manualmente ou carregar um arquivo .txt, escolher entre diferentes vozes disponíveis e escutar o conteúdo em tempo real. 🔧 Tecnologias Utilizadas: HTML5, CSS3, JavaScript, React, Vite, Git & GitHub.",
    image: "conversorimage.png",
    link: "https://conversor-de-texto-para-fala.netlify.app/",
    linkgit: "https://github.com/GirlaneCosta/Conversor-de-Texto-para-Fala",
  },
  {
    title: "Gerador de QR Codes Personalizados",
    description:
      "Este projeto é um gerador de QR Codes com personalização, criado com React, TypeScript e Next.js. Ele permite gerar QR Codes com diferentes cores, tamanhos e estilos, ideal para projetos, eventos ou qualquer uso criativo. 🔧 Tecnologias Utilizadas: TypeScript, React, Next.js, CSS3, Git & GitHub.",
    image: "qrcodeimage.png",
    link: "https://gerador-de-qr-code-brasil.netlify.app/",
    linkgit: "https://github.com/GirlaneCosta/Gerador-de-QR-Codes-personalizados",
  },
  {
    title: "Lojão Torra Torra",
    description:
      "O site oferece uma ampla variedade de roupas, calçados e acessórios para o público feminino, masculino e infantil. Com um design moderno e responsivo. O destaque é dado a um banner impactante que promove super liquidações, acompanhado de seções que evidenciam as principais categorias e produtos. Apresenta visual moderno e barra de buscas.",
    image: "lojaoimage.png",
    link: "https://www.lojaotorratorra.online/",
    linkgit: "",
  },
];

function ProjectsPage() {
  return (
    <div className="projects-container">
      <div>
        <a className="home" href="/">
          <FaHome />
        </a>
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
