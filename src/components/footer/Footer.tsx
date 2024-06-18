import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
	return (
		<footer className="bg-c-blue-black-800 text-white p-8">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

				<div className="flex flex-col items-center md:items-start">
					{/*  <img src="ruta-del-logo" alt="Logo" className="h-16 mb-4" />*/}
				</div>

				<div className="flex justify-around">
					<div className="text-center md:text-left">
						<h2 className="text-lg mb-4">Empresa</h2>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
							<li><a href="#" className="hover:underline">Otros proyectos</a></li>
							<li><a href="#" className="hover:underline">Eventos</a></li>
						</ul>
					</div>
					<div className="text-center md:text-left">
						<h2 className="text-lg mb-4">Servicios</h2>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">Banco de talentos</a></li>
							<li><a href="#" className="hover:underline">Soporte</a></li>
							<li><a href="#" className="hover:underline">APIs</a></li>
						</ul>
					</div>
				</div>

				<div className="bg-c-blue-black-700 p-6 rounded-md  text-white w-full">
					<h2 className="text-lg mb-4">¿Tienes sugerencias para nosotros?</h2>
					<form>
						<div className="flex flex-col">
							<textarea
								className="p-2 mb-4 rounded-md text-black border border-gray-300 focus:outline-none"
								placeholder="Sugerencia"
								rows={5} 
								cols={5} 
							></textarea>

							<button
								type="submit"
								className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div >

			<div className="my-8 border-t border-white-300"></div>

			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
				<div className="flex space-x-4 mb-4 md:mb-0">
					<a
						href="https://instagram.com"
						aria-label="Instagram"
						className="hover:text-gray-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoInstagram size={24} className="text-gray-300" />
					</a>
					<a
						href="https://linkedin.com"
						aria-label="LinkedIn"
						className="hover:text-gray-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoLinkedin size={24} className="text-gray-300" />
					</a>
					<a
						href="https://facebook.com"
						aria-label="Facebook"
						className="hover:text-gray-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoFacebook size={24} className="text-gray-300" />
					</a>
				</div>
				<div className="text-center md:text-left">
					<p>
						<a href="#" className="hover:underline">Política de Privacidad</a> | <a href="#" className="hover:underline">Términos y Condiciones</a>
					</p>
				</div>
			</div>
		</footer >
	);
};

export default Footer;
