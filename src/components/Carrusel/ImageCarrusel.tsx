import { Carrusel } from "./Carrusel";

export const ImageCarousel = () => {
  const slides = [
    {
      src: "/images/photo.png",
      title: "Ing. Estyf Wilibaldo Trejo",
      subtitle: "Desarrollador de software",
      text: "15 años de experiencia,en mi trayectoria profesional, he tenido la oportunidad de trabajar en distintas empresas tanto como gubernamentales y del sector privado en el area de TI,actualmente sigo inovando las necesidades del cliente en el desarrollo de paginas web mediante el framework de laravel con conexion a bases de datos relacionales y no relacionales.",
     
    },
    {
      src: "/images/photo_2.png",
      title: "Ing. Bayan Efrain del Angel Martinez",
      subtitle: "Desarrollador de software",
      text: 'Ingeniero en sistemas computacionales con 2 años de experiencia en desarrollo de software, en mi trayectoria profesional he tenido la oportunidad de estar en diferentes proyectos como desarrollador freelancer y en el sector privado como desarrollador, actualmente sigo aprendiendo e innovando en base a las necesidades del cliente en el desarrollo web.',
   
    }
  ];

  return (
        <Carrusel slides={slides} />
  );
};
