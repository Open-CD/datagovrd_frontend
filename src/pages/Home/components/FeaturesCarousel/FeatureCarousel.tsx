import { icons } from "../../../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Arrow {
  className: string;
  onClick: () => void;
}

const SampleNextArrow = (props: Arrow) => {
  const { className, onClick } = props;
  return (
    <img
      src={icons.LeftCircularArrow}
      alt=""
      className={
        className +
        " w-[25px] h-[40px] opacity-90 hover:opacity-100 scale-x-[-1] top-[40%] md:right-[-40px]"
      }
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: Arrow) => {
  const { className, onClick } = props;
  return (
    <img
      src={icons.LeftCircularArrow}
      alt=""
      className={
        className +
        " w-[25px] h-[40px] opacity-90 hover:opacity-100 top-[50%] md:left-[-40px]"
      }
      onClick={onClick}
    />
  );
};

const FeatureCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    nextArrow: <SampleNextArrow className={""} onClick={() => { }} />,
    prevArrow: <SamplePrevArrow className={""} onClick={() => { }} />,
  };

  const features = [
    {
      name: "Descubrimiento de Datos Simplificado",
      text: "Selecciona fácilmente instituciones y categorías de datos a través de una interfaz intuitiva, diseñada para facilitar el acceso a la información que necesitas sin complicaciones.",
      img: icons.SimplifiedData,
    },
    {
      name: "Visualización de Datos en Tiempo Real",
      text: "Explora datos a través de gráficos dinámicos y tablas interactivas que se actualizan en tiempo real, ofreciendo una comprensión instantánea de las tendencias y estadísticas clave.",
      img: icons.RealTimeData,
    },
    {
      name: "Descargas Flexibles",
      text: "Accede y descarga datos crudos en formatos populares como CSV y JSON, permitiendo un análisis detallado y personalizado en tus propias herramientas.",
      img: icons.FlexibleDownloads,
    },

    {
      name: "Reportes Automatizados",
      text: "Obtén insights valiosos sin esfuerzo con reportes generados automáticamente, destacando hallazgos y tendencias importantes basados en el análisis de datos continuo.",
      img: icons.ReportsAutomated,
    },
    {
      name: "Mapas Interactivos",
      text: "Visualiza la distribución geográfica de datos con mapas interactivos, facilitando la comprensión de patrones y recursos a nivel nacional o local.",
      img: icons.InteractiveMaps,
    },
    {
      name: "Personalización de Datos",
      text: "Ajusta la presentación y el análisis de datos con herramientas de transformación que permiten modificar la granularidad y perspectiva de la información mostrada.",
      img: icons.PersonalizationOfData,
    },
    {
      name: "Filtrado Avanzado",
      text: "Utiliza filtros avanzados para refinar los resultados y visualizar solo la información que te interesa, optimizando tu experiencia de búsqueda de datos.",
      img: icons.AdvancedFiltering,
    },
    {
      name: "Actualizaciones Continuas",
      text: "Mantente informado con indicadores de frecuencia de actualización, asegurando que siempre accedes a la información más reciente y relevante.",
      img: icons.UpdatesContinuous,
    },
  ];

  return (
    <Slider {...settings}>
      {features.map(({ name, text, img }, index) => (
        <div
          key={index}
          className="bg-c-blue-black-800 text-white p-5 md:p-8 flex flex-col justify-between items-start rounded-xl min-h-[19rem] md:min-h-[19rem] xl:min-h-[17rem]"
        >
          <div className="flex items-center md:gap-2">
            <img src={img} alt={name} width={100} />
            <p className="text-lg font-bold">{name}</p>
          </div>
          <p className="mt-2">{text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default FeatureCarousel;
