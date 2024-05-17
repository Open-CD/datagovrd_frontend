import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
	return (
		<footer className="bg-blue-900 text-white p-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-6 md:mb-0">
					<h2 className="text-lg mb-4">Redes sociales</h2>
					<div className="flex space-x-1">
						<a
							href="https://twitter.com"
							aria-label="Twitter"
							className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
						>
							<svg
								className="h-11 w-11"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								{/* Icono de Facebook */}
								<IoLogoTwitter size={10} className="text-white-500" />
							</svg>
						</a>
						<a
							href="https://facebook.com"
							aria-label="Facebook"
							className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
						>
							<svg
								className="h-11 w-11"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								{/* Icono de Facebook */}
								<IoLogoFacebook size={10} className="text-white-500" />
							</svg>
						</a>
						<a
							href="https://youtube.com"
							aria-label="YouTube"
							className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
						>
							<svg
								className="h-11 w-11"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								{/* Icono de Facebook */}
								<IoLogoYoutube size={10} className="text-white-500" />
							</svg>
						</a>
					</div>
				</div>
				<div className="bg-white p-4 rounded-md shadow-lg text-blue-900 w-full md:w-auto">
					<h2 className="text-lg mb-4">Envíanos un correo</h2>
					<form>
						<div className="flex">
							<input
								type="email"
								className="p-2 rounded-l-full text-black  border border-gray-300 focus:outline-none"
								placeholder="Email address"
							/>
							<button
								type="submit"
								className="bg-red-600  text-white p-2 rounded-r-full hover:bg-red-700"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="text-center text-gray-400 text-sm mt-8">
				<p>
					Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
					registered in the U.S. and other countries. App Store is a service
					mark of Apple Inc. Android, Google Play and the Google Play logo are
					trademarks of Google LLC.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
