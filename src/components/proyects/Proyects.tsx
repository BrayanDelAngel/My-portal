import React from "react";
import { ItemsCards } from "./ItemsCards";
import {
  FaBootstrap,
  FaCentos,
  FaLaravel,
  FaReact,
  FaSquareFacebook,
} from "react-icons/fa6";
import {
  SiGooglecalendar,
  SiLivewire,
  SiMysql,
  SiTailwindcss,
  SiZoom,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { v4 as uuidv4 } from 'uuid';

const ItemProyects = [
  {
    path: "/images/Gainback.png",
    name: "Gainback",
    description:
      "Desarrollo de un sistema web para la gestión y seguimiento de prospectos a través de campañas de Facebook en Gainback.",
    listTecnology: [
      "Integración de AWS S3 con Laravel 8 para una gestión segura y eficiente de archivos/multimedia en la nube.",
      "Integración de la API de Facebook Business para la captación de leads.",
      "Integración de Google Calendar.",
      "Integración de Zoom para tener reuniones periódicas o dinámicas en base al cliente.",
      "Laravel 8 y el ORM Eloquent.",
      "Configuración de estilos con Bootstrap 5 CSS.",
    ],
    listIconTecnology: [
      <FaLaravel key="laravel" size={25} className="text-red-500" />,
      <FaSquareFacebook key="facebook" size={25} className="text-blue-700" />,
      <SiGooglecalendar key="google-calendar" size={25} className="text-blue-500" />,
      <SiZoom key="zoom" size={25} className="text-blue-400" />,
      <FaBootstrap key="bootstrap" size={25} className="text-purple-700" />,
    ],
  },
  {
    path: "/images/liconsa.jpg",
    name: "Liconsa",
    description:
      "Desarrollo e implementación de un sistema web para el control de inventarios.",
    listTecnology: [
      "Desarrollo del proyecto utilizando metodología ágil XP.",
      "Configuración de servidor Apache con CentOS 7.",
      "Se utilizó SQL Server como gestor de la base de datos.",
      "Utilización de ORM de Laravel para solicitudes a la BD.",
      "Configuración de estilos con Tailwind CSS.",
      "Peticiones en tiempo real con Laravel Livewire.",
    ],
    listIconTecnology: [
      <FaLaravel key="laravel-liconsa" size={25} className="text-red-500" />,
      <FaCentos key="centos-liconsa" size={25} className="text-green-500" />,
      <DiMsqlServer key="mysql-liconsa" size={25} className="text-red-400" />,
      <SiTailwindcss key="tailwind-liconsa" size={25} className="text-blue-400" />,
      <SiLivewire key="livewire-liconsa" size={25} className="text-rose-300" />,
    ],
  },
  {
    path: "/images/sce.jpg",
    name: "Hospital General de Chimalhuacán",
    description:
      "Desarrollo e implementación de un sistema web para el control de expedientes y estímulos de los empleados.",
    listTecnology: [
      "Desarrollo del proyecto utilizando Laravel 8 y su ORM Eloquent, basado en el patrón de diseño MVC.",
      "Configuración y desarrollo de un servidor web local utilizando Apache en CentOS 7.",
      "Diseño y modelado de datos en MySQL.",
      "Configuración de estilos con Tailwind CSS.",
      "Peticiones en tiempo real con Laravel Livewire.",
      "Diseño y levantamiento de una red interna.",
      "Desarrollo del proyecto mediante la metodología SCRUM.",
    ],
    listIconTecnology: [
      <FaLaravel key="laravel-se" size={25} className="text-red-500" />,
      <FaCentos  key="centos-se" size={25} className="text-green-500" />,
      <SiMysql key="mysql-se" size={25} className="text-red-400" />,
      <SiTailwindcss key="tailwind-se" size={25} className="text-blue-400" />,
      <SiLivewire key="talwind-se" size={25} className="text-rose-300" />,
    ],
  },
  {
    path: "/images/freshCoffe.jpg",
    name: "FreshCoffe",
    description:
      "Desarrollo de un sistema web para la petición de pedidos en tiempo real.",
    listTecnology: [
      "Desarrollo del proyecto mediante la metodología ágil de desarrollo de software XP.",
      "Creación de API con Laravel 10 mediante la autenticación de credenciales.",
      "Consumo de APIs con React.js para procesar los datos de pedidos.",
      "Uso de webhook para las peticiones en tiempo real.",
      "Configuración de estilos con Tailwind CSS.",
      "Diseño y modelado de datos en MySQL.",
      "Desarrollo de la vista para el usuario final con React.js.",
    ],
    listIconTecnology: [
      <FaLaravel key="laravel-p" size={25} className="text-red-500" />,
      <SiMysql key="mysql-p" size={25} className="text-blue-400" />,
      <SiTailwindcss key="tailwind-p" size={25} className="text-blue-400" />,
      <FaReact key="react-p" size={25} className="text-blue-600" />,
    ],
  },
];

export const Proyects = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl text-blue-500 text-center font-bold">
        Proyectos
      </h1>
      {ItemProyects.map((ItemProyect, index) => (
        <ItemsCards key={index} {...ItemProyect} reverse={index % 2 === 0 ? false : true} />
        // <ItemsCards key={uuidv4()} {...ItemProyect} reverse={index % 2 === 0 ? false : true}/>
      ))}
    </>
  );
};
