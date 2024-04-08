import Link from "next/link";
import { MouseEvent } from "react";

interface NavbarItemProps {
  titulo: string;
  icono: JSX.Element;
  section: string;
  onClick: () => void; // Agregamos onClick a las props
  selected: boolean;
}

export const NavbarItem = ({
  titulo,
  icono,
  section,
  onClick,
  selected,
}: NavbarItemProps) => {

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evitar la redirección predeterminada
    onClick(); // Llamar a la función onClick proporcionada
  };

  return (
    <Link
      className={`text-gray-500 rounded-md text-lg md:text-2xl flex gap-2 font-semibold hover:text-blue-500 hover:-translate-y-2 hover:after:bg-blue-500 hover:after:h-0.5 hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:bottom-0 ${
        selected ? "text-white bg-blue-600 p-2 hover:text-white" : ""
      }`}
      href={section}
      onClick={handleClick} // Usar handleClick como manejador de eventos
    >
      {icono}
      {titulo}
    </Link>
  );
};
