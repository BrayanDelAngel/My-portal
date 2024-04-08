import Image from "next/image";
import {IconsPerfil} from "./IconsPerfil"

export const Perfil = () => {
  return (
    <div
      className="max-w-lg md:max-w-6xl h-auto w-full m-auto rounded-xl shadow-xl"
      style={{
        backgroundImage: "url('/images/fondo.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 ">
          <Image
            src={"/images/photo_2 (2).png"}
            width={500}
            height={300}
            alt="Brayan Efrain Del Angel Martinez"
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 relative ">
          <div className="flex flex-col justify-center h-full mx-10">
            <h1 className="text-2xl mt-4 md:text-4xl text-gray-500 md:m-2 md:p-0">
                Hola soy,
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-500 md:m-2 md:p-0">
              Brayan Del Angel
            </h1>
            <h2 className="text-xl mt-2 md:text-3xl font-semibold md:m-2 md:block">
              Desarrollador de Software
            </h2>
            <p className="hidden text-xl text-justify md:block text-black">
              Ingeniero en sistemas computacionales con dos años de experiencia en
              desarrollo de software. En mi trayectoria profesional, he tenido
              la oportunidad de participar en diferentes proyectos como
              desarrollador freelancer y en el sector privado.
            </p>
           <IconsPerfil />
          </div>
        </div>
      </div>
    </div>
  );
};
