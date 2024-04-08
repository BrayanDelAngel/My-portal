import { FormContact, Navbar, Perfil, Proyects } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="m-16">
        <hr className=" border-blue-700 mt-5 " />
        <div id="quienes">
          {/* <ImageCarousel /> */}
          <Perfil />
        </div>
        <hr className="border-blue-700 mt-5" />
        <div id="experiencia">
          <Proyects />
        </div>
        <hr className="border-blue-700 mt-5" />
        <div id="contacto">
          <FormContact />
        </div>
      </main>
    </>
  );
}
