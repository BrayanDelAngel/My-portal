"use client";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { FaFileCode, FaPersonBreastfeeding } from "react-icons/fa6";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useRef } from "react";

const menuItems = [
  {
    section: "quienes",
    icono: <FaPersonBreastfeeding size={25} />,
    titulo: "Sobre mí",
  },
  {
    section: "experiencia",
    icono: <FaFileCode size={25} />,
    titulo: "Proyectos",
  },
  {
    section: "contacto",
    icono: <HiChatBubbleOvalLeftEllipsis size={25} />,
    titulo: "Contacto",
  },
];

export const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState("");
  // Función para manejar el clic en un elemento del menú
  const handleMenuClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking on a menu item
  };

  // Efecto para actualizar la selección del menú cuando la sección actual cambia
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["quienes", "experiencia", "contacto"]; // IDs de las secciones
      const scrollPosition = window.scrollY;

      // Determina qué sección está visible en la ventana
      const visibleSection = sections.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });

      // Actualiza la selección del menú según la sección visible
      if (visibleSection) {
        setSelectedSection(visibleSection);
      }
    };

    // Agrega el evento de scroll para actualizar la selección del menú
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Elimina el evento de scroll al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      typeof menuRef.current !== "undefined" && // Verifica que menuRef.current no sea undefined
      menuRef.current !== null // Verifica que menuRef.current no sea null
    ) {
      // Asegúrate de que menuRef.current sea de tipo HTMLElement
      const menuElement = menuRef.current as HTMLElement;

      // Verifica si el evento target está contenido dentro del menú
      if (menuElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="">
      <nav className="fixed top-0 inset-x-0 bg-transparent backdrop-blur-lg bg-white z-50 shadow-md">
        <div className="px-10 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16 mt-2">
            <div className="flex items-center md:m-auto space-x-10">
              {/* <Link href="/" className="flex space-x-2 items-center ">
                <LiaLaptopCodeSolid className="text-blue-500" size={50} />
                <p className="text-lg font-bold w-36">B & E develop</p>
              </Link> */}
              <Link href="/" className="flex space-x-2 items-center ">
                <LiaLaptopCodeSolid className="text-blue-500" size={60} />
                <p className="text-2xl font-bold w-72 hidden md:block">
                  Brayan Del Angel
                </p>
              </Link>
              <div className="hidden md:block w-full">
                <div className="flex ml-10 space-x-4">
                  {menuItems.map((item) => (
                    <NavbarItem
                      key={uuidv4()}
                      {...item}
                      titulo={item.titulo}
                      icono={item.icono}
                      onClick={() => handleMenuClick(item.section)}
                      selected={selectedSection === item.section}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                className="text-gray-600 hover:text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div ref={menuRef} className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <NavbarItem
                    key={uuidv4()}
                    {...item}
                    titulo={item.titulo}
                    icono={item.icono}
                    onClick={() => handleMenuClick(item.section)}
                    selected={selectedSection === item.section}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
