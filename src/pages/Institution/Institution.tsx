import { Button } from "@nextui-org/react"
import { icons, images } from "../../assets"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

function Institution() {

    const institutions = [
        { title: "Presupuesto", text: "Información detallada sobre la asignación y ejecución del presupuesto público.", img: icons.RealTimeData },
        { title: "Presupuesto", text: "Información detallada sobre la asignación y ejecución del presupuesto público.", img: icons.RealTimeData },
        { title: "Presupuesto", text: "Información detallada sobre la asignación y ejecución del presupuesto público.", img: icons.RealTimeData }]

    const downloadOptions = [
        { title: "Datos crudos", img: icons.RawData },
        { title: "Estadistica descriptiva", img: icons.DescriptiveStatistics },
        { title: "Datos pre-procesados", img: icons.PreProcessedData },
        { title: "Mapa de calor", img: icons.HeatMap }
    ];

    return (
        <div className="flex flex-col items-center gap-x-4">
            <div className="flex flex-col items-center mt-5 sm:p-10">
                <p className="text-c-blue-black-800 text-3xl md:text-5xl font-bold text-center">
                    Servicio Nacional de Salud
                </p>
                <p className="text-c-blue-black-800 md:text-xl font-bold mt-5 text-center w-full md:w-11/12 lg:w-8/12">
                    El Servicio Nacional de Salud, creada en fecha 16 de julio  del año 2015, mediante  la Ley 123-15 es una entidad pública, provista de personalidad jurídica, con autonomía administrativa, financiera y técnica y patrimonio propio, adscrita al Ministerio de Salud Pública y Asistencia Social.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-20 p-10 sm:w-8/12 md:w-full lg:w-10/12">
                {
                    institutions.map(({ title, text, img }, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-7 border-3 rounded-xl border-c-rose-200 aspect-squareh shadow-md">
                            <img src={img} alt="" width={50} />
                            <p className="text-c-blue-black-800 text-xl font-bold">
                                {title}
                            </p>
                            <p className="text-c-blue-black-800 font-bold mt-2">
                                {text}
                            </p>
                        </div>

                    ))
                }

            </div>
            <div className="flex justify-center items-center">
                <Button className="uppercase rounded-3xl px-7 bg-white text-c-blue-black-800 font-bold shadow-md ">Ver Mas</Button>
            </div>

            <div className="flex flex-col mt-5 sm:p-10">
                <div className="flex justify-between">
                    <p className="text-c-blue-black-800 text-2xl md:text-3xl font-bold text-center">
                        Visualización Interactiva del Presupuesto SNS
                    </p>
                    <img src={images.DatePicker} alt="" className="cursor-pointer h-9 hidden md:block" />
                </div>
                <p className="text-c-blue-black-800 mt-5 md:text-justify">
                    Explora los datos del presupuesto del Servicio Nacional de Salud de manera interactiva. Esta vista proporciona gráficos dinámicos que permiten un análisis detallado de la asignación y ejecución de los recursos financieros. Ajusta las visualizaciones según tus necesidades para obtener una comprensión clara y actualizada de cómo se gestionan los fondos en esta institución clave para la salud pública.
                </p>

            </div>

            <div className="md:flex mt-7 md:p-10">
                <div className="flex justify-end">
                    <img className="cursor-pointer h-9 mb-4 md:hidden" src={images.DatePicker} alt="" />
                </div>
                <div className="flex w-full md:w-10/12">
                    <img src={images.InstitutionChart1} alt="" />
                </div>
                <div className="flex md:flex-col md:w-3/12">
                    <img className="w-8/12 md:w-full" src={images.InstitutionMapData} alt="" />
                    <img className="w-4/12 md:w-full" src={images.InstitutionHexagonPath} alt="" />
                </div>
            </div>

            <div className="flex flex-col mt-5 sm:p-10  w-full">
                <div className="flex flex-col md:flex-row justify-between">
                    <p className="text-c-blue-black-800 text-2xl font-bold order-2 md:order-1 text-center md:text-left mt-3 md:mt-0">
                        Hallazgos - Analisis automatico
                    </p>
                    <div className="flex justify-center gap-2 sm:gap-5 items-center order-1 md:order-2">
                        <TfiReload className="cursor-pointer" />
                        <Button endContent={<MdOutlineKeyboardArrowDown />} className="bg-c-blue-black-800 text-xs sm:text-sm text-white rounded-2xl">Informe automatico </Button>

                        <Button className="rounded-3xl text-xs sm:text-sm text-c-blue-black-800 font-bold bg-white shadow-sm" startContent={<img src={icons.Download} alt="" width={20} />}>Descargar informe</Button>
                    </div>
                </div>

                <div>
                    <p className="text-c-blue-black-800 mt-5">
                        El análisis del presupuesto del Servicio Nacional de Salud revela una asignación significativa hacia la atención primaria y programas de prevención, con un 45% y un aumento del 20% respectivamente. La ejecución presupuestaria alcanza el 75%, aunque se observan retrasos en proyectos de infraestructura hospitalaria. Los gastos operativos, que comprenden el 35% del presupuesto, reflejan una inversión en la modernización de equipos médicos y un incremento del 10% en los gastos de personal, subrayando el compromiso con la mejora continua de los servicios.
                    </p>
                    <p className="text-c-blue-black-800 mt-5">
                        La gestión financiera se mantiene transparente mediante informes trimestrales, facilitando el monitoreo y la rendición de cuentas. La tendencia hacia la reducción de gastos innecesarios permite una optimización efectiva de los recursos públicos. En resumen, la gestión del presupuesto es eficiente y enfocada en mejorar la calidad del servicio, aunque es necesario acelerar la ejecución de proyectos de infraestructura.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                    <p className="text-c-blue-black-800 text-2xl font-bold py-10 text-center">
                        Opciones de descarga
                    </p>
                    <div className="flex flex-wrap justify-center auto-cols-min gap-5 w-full px-2 sm:w-9/12 lg:px-12 xl:px-0 xl:w-6/12 ">
                        {
                            downloadOptions.map(({ title, img }, index) => (
                                <div key={index} className="flex flex-col items-center rounded-lg shadow-md p-2 py-5 min-w-44 cursor-pointer bg-white" >
                                    <img src={img} alt="" width={40} />
                                    <p className="font-bold  text-c-blue-black-800 text-center">{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institution