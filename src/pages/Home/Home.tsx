import { Button } from "@nextui-org/button";
import { icons, images } from "../../assets";
import { SectorsCard } from "./components";
import FeatureCarousel from "./components/FeaturesCarousel/FeatureCarousel";

function Home() {
  return (
    <div className="flex flex-col gap-x-4">
      <div className="flex justify-between pl-20 w-full items-center py-20 mt-5 ">
        <div className="flex flex-col items-center">
          <p className="text-c-blue-black-800 text-4xl font-bold">
            Acceso Transparente a
          </p>
          <p className="text-c-blue-black-800 text-4xl font-bold">
            Datos Públicos de la
          </p>
          <p className="text-c-red-dark-800 text-4xl font-bold">
            República Dominicana
          </p>
          <Button
            radius="full"
            className="bg-c-blue-black-800 font-semibold text-white mt-3"
            endContent={
              <img src={icons.ArrowRight} alt="arrow down" width={15} />
            }
          >
            Explorar vizualizaciones
          </Button>
        </div>
        <div>
          <img
            src={images.HomeStatistics}
            alt="Home Statistics"
            className="max-w-md w-10/12"
          />
        </div>
      </div>
      <div>
        <SectorsCard />
      </div>
      <div className=" px-10 w-full items-center mt-5 py-44">
        <div className="pb-10 flex justify-center">
          <p className="uppercase text-c-blue-black-900 font-bold text-4xl">
            Caracteristicas{" "}
            <span className="uppercase text-c-red-600">Funcionales</span>
          </p>
        </div>
        <FeatureCarousel />
      </div>
    </div>
  );
}

export default Home;
