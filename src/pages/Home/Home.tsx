import { Button } from "@nextui-org/button";
import { icons, images } from "../../assets";
import { SectorsCard } from "./components";
import FeatureCarousel from "./components/FeaturesCarousel/FeatureCarousel";

function Home() {
  return (
    <div className="flex flex-col gap-x-4 z-0">
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:pl-20 w-full items-center py-20 mt-5  ">
        <div className="flex flex-col items-center gap-3 md:min-w-[20rem] lg:min-w-[32rem]">
          <p className="text-c-blue-black-800 text-3xl md:text-3xl lg:text-5xl font-bold">
            Acceso Transparente a
          </p>
          <p className="text-c-blue-black-800 text-3xl  md:text-3xl lg:text-5xl font-bold">
            Datos Públicos de la
          </p>
          <p className="text-c-red-dark-800 text-3xl  md:text-3xl lg:text-5xl font-bold">
            República Dominicana
          </p>
          <Button
            radius="full"
            className="bg-c-blue-black-800 font-semibold text-white mt-3 ld:text-lg lg:p-7"
            endContent={
              <img src={icons.ArrowRight} alt="arrow down" width={15} />
            }
          >
            Explorar vizualizaciones
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src={images.HomeStatistics}
            alt="Home Statistics"
            className="max-w-lg md:w-8/12 lg:w-10/12 hidden md:block"
          />
        </div>
      </div>
      <div className="">
        <SectorsCard />
      </div>

      <div className="px-5 md:px-10  w-full items-center mt-5 py-20 md:py-44">
        <div className="pb-10 flex justify-center">
          <p className="uppercase text-c-blue-black-900 font-bold text-3xl md:text-3xl lg:text-5xl text-center">
            Caracteristicas{" "}
            <span className="uppercase text-c-red-600">Funcionales</span>
          </p>
        </div>
        <FeatureCarousel />
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly items-center" >
        <div className="flex w-10/12 md:w-auto md:pl-10">
          <img src={images.HomeCollaborative} alt="" width={500} />
        </div>
        <div className="flex flex-col items-center md:w-10/12 lg:w-7/12 mt-10">
          <p className=" text-c-blue-black-900 font-bold  text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-center">
            Colabora en
            <span className="text-c-red-600"> DataGovRD</span>
          </p>
          <p className="text-c-brown-600  w-full md:w-11/12 lg:w-9/12 py-5 text-center md:text-xl font-semibold ">
            Únete a DataGovRD y empodera a los ciudadanos dominicanos con acceso a datos transparentes y visualizaciones claras de las entidades gubernamentales del país. ¡Colabora con nosotros para construir una sociedad más informada y participativa!
          </p>
          <Button className="bg-c-blue-black-800 rounded-3xl text-white  md:text-2xl px-20 font-bold">Participar</Button>
        </div>
      </div>

      <div className="flex justify-end relative top-6 md:top-14">
        <img src={images.FooterTopDesign} alt="" width={800} />
      </div>
    </div>
  );
}

export default Home;
