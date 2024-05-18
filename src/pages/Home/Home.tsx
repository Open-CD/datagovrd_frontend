import { Button } from "@nextui-org/button";
import { icons, images } from "../../assets";
import { SectorsCard } from "./components";

function Home() {
  return (
    <div className="flex flex-col gap-x-4">
      <div className="flex justify-between px-10 w-full items-center mt-5 min-h-[80vh]">
        <div className="flex flex-col items-center">
          <p className="text-c-blue-black-800 text-3xl font-bold">
            Acceso Transparente a
          </p>
          <p className="text-c-blue-black-800 text-3xl font-bold">
            Datos Públicos de la
          </p>
          <p className="text-c-red-dark-800 text-3xl font-bold">
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
    </div>
  );
}

export default Home;
