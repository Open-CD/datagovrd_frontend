import { Button } from "@nextui-org/button";
import { icons } from "../../../../assets";
import { useState } from "react";

const SectorsCard = () => {
  const [showAll, setShowAll] = useState(false);
  const sectors = [
    {
      name: "Educación",
      text: "Explore la asignación y uso de recursos educativos, incluyendo nóminas y presupuestos, para fundamentar decisiones que potencien la enseñanza.",
      img: icons.Education,
    },
    {
      name: "Salud",
      text: "Vea cómo la administración de personal y fondos afecta la calidad y cobertura de los servicios de salud.",
      img: icons.Health,
    },
    {
      name: "Transporte",
      text: "Conozca el manejo de recursos económicos y humanos en transporte para potenciar mejoras en infraestructura y eficiencia del tráfico.",
      img: icons.Transport,
    },
    {
      name: "Infraestructura",
      text: "Observe la coordinación de esfuerzos humanos y financieros en proyectos de infraestructura para optimizar la transparencia y efectividad.",
      img: icons.Infrastructure,
    },
    {
      name: "Agricultura",
      text: "Analice cómo interactúan producción agrícola y gestión de inventarios y fondos para impulsar la sostenibilidad y eficiencia del sector.",
      img: icons.Agriculture,
    },
    {
      name: "Economía",
      text: "Evalúe la influencia de la gestión financiera y de nóminas en la fortaleza y transparencia económica.",
      img: icons.Economy,
    },
    {
      name: "Turismo",
      text: "Examine la asignación de recursos en turismo para optimizar la atracción de visitantes y su impacto económico.",
      img: icons.Tourism,
    },

    // {
    //   name: "Energía",
    //   text: "Revise la distribución de recursos financieros y humanos en energía, destacando su rol en la viabilidad de proyectos renovables.",
    //   img: icons.Energy,
    // },
    {
      name: "Medio Ambiente",
      text: "Descubra cómo se emplean fondos y personal en proyectos medioambientales para fortalecer la gestión de recursos y conservación.",
      img: icons.Enviroment,
    },
  ];

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // const getSectors = () => {
  //   if (showAll) {
  //     return sectors;
  //   } else {
  //     return sectors.slice(0, 3);
  //   }
  // };


  return (
    <div className="centros-container  flex flex-col items-center bg-c-blue-black-800 rounded-[2em] md:rounded-[5em] text-white md:m-5 mt-10 md:mx-10">
      <p className="uppercase text-center font-bold text-2xl md:text-3xl pt-14">Sectores</p>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-min p-7 md:p-14 gap-10 transition-height duration-300 ease-in-out ${showAll ? "h-[124rem] sm:h-[59rem] md:h-[57rem] lg:h-[34rem]" : "h-[22rem]"} overflow-hidden`} >
        {sectors.map(({ name, text, img }, index) => (
          <div key={index} className="text-center" >
            <img src={img} alt="" className={`mx-auto mb-2  ${!showAll && index >= 3 ? "opacity-35" : ""}`} />
            <p className="font-bold">{name}</p>
            <p className="text-sm max-w-80">{text}</p>
          </div>
        ))}
      </div>
      <Button
        radius="full"
        className="bg-white font-semibold text-c-blue-black-800 py-2 px-10 mb-10  uppercase relative bottom-"
        onClick={handleShowAll}
      >
        {showAll ? "Ver Menos" : "Ver Más"}
      </Button>
    </div>
  );
};

export default SectorsCard;
