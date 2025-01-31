import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  // definicion de fecha para footer
  footerDate: number = new Date().getFullYear();

  // definicion de cards

  prof1: any = {
    name: "José Pérez",
    position: "Online Teacher",
    course: "Python",
    image: "/Jose-Perez.jpg",
    descripcion:
      "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.",
    curse_image: "/Python-Symbol_0.png",
  };
  prof2: any = {
    name: "Andrea Rodríguez",
    position: "Fullstack Developer",
    course: "Angular",
    image: "/Andrea-Rodriguez.jpg",
    descripcion:
      "Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.",
    curse_image: "/Angular_gradient.png",
  };
  prof3: any = {
    name: "Pedro Hernández",
    position: "Desarrollador Backend",
    course: "Bases de Datos",
    image: "/Pedro-Hernandez.jpg",
    descripcion:
      "El backend es la parte invisible pero esencial de un sitio, encargada de manejar la lógica y el procesamiento de datos necesarios para que todo funcione de manera correcta y segura.El backend se ocupa de tareas como almacenar y recuperar datos de una base de datos, procesar formularios, autenticar usuarios y gestionar la seguridad del sitio. Es responsable de toda la “magia” que sucede detrás de la interfaz visible.",
    curse_image: "database-icon",
  };
  prof4: any = {
    name: "Nancy Cuellar",
    position: "UX Designer",
    course: "Diseño UX",
    image: "/Nancy-Cuellar.jpg",
    descripcion:
      "El diseño de Experiencia de Usuario (UX) es el proceso de crear productos, sistemas o servicios que proporcionen experiencias significativas y relevantes a los usuarios. Involucra todo el proceso de adquisición e integración del producto, lo que incluye aspectos de marca, diseño, usabilidad y funcionalidad. Una gran parte del diseño UX es hacer que el producto final resulte funcional para proporcionar una experiencia positiva, eficiente y satisfactoria para el usuario.",
    curse_image: "diseno-ux",
  };
prof5: any = {
  name: "Lucas Solis",
  position: "Programador Frontend",
  course: "Administración de Redes y Servidores",
  image: "/Lucas-Solis.jpg",
  descripcion:
  "Aprenderás sobre la configuración, mantenimiento y optimización de redes y servidores, abordando protocolos, seguridad y monitoreo de la infraestructura TI.",
  curse_image: "/redes-servidores",
};
prof6: any = {
  name: "Carlos Gomez",
  position: "QA Tester",
  course: "Ciberseguridad y Protección de Datos",
  image: "/Carlos-Gomez.jpg",
  descripcion:
  "Explorarás estrategias para proteger sistemas y datos, analizando amenazas, vulnerabilidades y técnicas de mitigación para garantizar la seguridad de la información.",
  curse_image: "/ciberseguridad",
};
prof7: any = {
  name: "Cinthia Ortiz",
  position: "Desarrolladora Web",
  course: "Gestión de Proyectos Tecnológicos",
  image: "/Cinthia-Ortiz.jpg",
  descripcion:
  "Desarrollarás habilidades en planificación, ejecución y control de proyectos de TI, utilizando metodologías ágiles como Scrum y Kanban para optimizar el desarrollo tecnológico.",
curse_image: "/gestion-proyectos",

};
prof8: any = {
  name: "Rodrigo Diaz",
  position: "Experto en Big Data",
  course: "Computación en la Nube",
  image: "/Rodrigo-Diaz.jpg",
  descripcion:
  "Conocerás los principales servicios de computación en la nube (AWS, Azure, Google Cloud), aprendiendo sobre despliegue de aplicaciones, almacenamiento y virtualización.",
curse_image: "/computacion-nube",  
};



} // Fin de la clase BindingComponent
