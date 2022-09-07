import { t } from "i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigureButton } from "../components/ConfigureButton";

export const LandingPage = () => {
	const [randomBgColorGradient, setRandomBgColorGradient] = useState([
		"667eea",
		"764ba2",
	]);
	const navigate = useNavigate();
	useEffect(() => {
		// setInterval(() => {
		setRandomBgColorGradient([
			Math.floor(Math.random() * 16777215).toString(16),
			Math.floor(Math.random() * 16777215).toString(16),
		]);
		// }, 1000);
	}, []);

	return (
		<>
			{/* <!--Hero--> */}
			<div
				className="py-20"
				style={{
					background: `linear-gradient(90deg, #${randomBgColorGradient[0]} 0%, #${randomBgColorGradient[1]} 100%)`,
				}}
			>
				<div className="container mx-auto px-6">
					<h2 className="font-mono text-4xl font-bold mb-2 text-white">
						{t("title")} ti permette di customizzare i tuoi modelli 3D!
					</h2>
					<h3 className="font-mono text-2xl mb-8 text-gray-200">
						Proprio come tu la desideri!
					</h3>
					<ConfigureButton size="xl" />
				</div>
			</div>
			{/* <!-- Features --> */}
			<section className="mx-auto px-6 p-10 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="font-mono text-4xl font-bold text-center text-gray-800 mb-8">
						Funzionalità
					</h2>
					<div className="flex items-center flex-wrap mb-20">
						<div className="w-full md:w-1/2">
							<h4 className="font-mono text-3xl text-gray-800 font-bold mb-3">
								CATALOGO 3D
							</h4>
							<p className="text-gray-600 mb-8 font-mono text-lg">
								<span className="text-xl font-bold">{t("title")}</span> ti
								permette di visualizzare il catalogo di tutti i prodotti
								disponibili per la configurazione tramite una
								visualizzatore/configuratore{" "}
								<span className="text-xl font-bold">3D</span>.
							</p>
						</div>
						<div className="w-full md:w-1/2">
							<img src="hero.png" alt="CATALOGO 3D" />
						</div>
					</div>
					<div className="flex items-center flex-wrap mb-20 flex-row-reverse">
						<div className="w-full md:w-1/2">
							<h4 className="font-mono text-3xl text-gray-800 font-bold mb-3">
								CONFIGURATORE
							</h4>
							<p className="font-mono text-gray-600 mb-8">
								Grazie alle tecnologie 3D applicabili nel web{" "}
								<span className="font-mono text-xl font-bold">
									{t("title")}
								</span>{" "}
								ti mette a disposizione un configuratore così da poter
								configurare la il tuo modello 3D in modo semplice e veloce.
							</p>
						</div>
						<div className="w-full md:w-1/2">
							<img src="hero.png" alt="CONFIGURATORE" />
						</div>
					</div>
					<div className="flex items-center flex-wrap mb-20">
						<div className="w-full md:w-1/2">
							<h4 className="font-mono text-3xl text-gray-800 font-bold mb-3">
								INTEGRAZIONE
							</h4>
							<p className="font-mono text-gray-600 mb-8">
								<span className="text-xl font-bold">{t("title")}</span> ti
								permette di ottenere una configurazione di modelli 3D completa e
								personalizzata così da poterla ricevere a casa tua con qualche
								semplice click in base alle tue necessità.
							</p>
						</div>
						<div className="w-full md:w-1/2">
							<img src="hero.png" alt="INTEGRAZIONE" />
						</div>
					</div>
				</div>
			</section>

			{/* <!--Call to Action--> */}
			<section
				style={{
					background: `linear-gradient(90deg, #${randomBgColorGradient[1]} 0%, #${randomBgColorGradient[0]} 100%)`,
				}}
			>
				<div className="container mx-auto px-6 text-center py-20">
					<h2 className="font-mono mb-6 text-4xl font-bold text-center text-white">
						Che stai aspettando?
					</h2>
					<h3 className="font-mono my-4 text-2xl text-white">
						Configura subito la il tuo modello 3D!
					</h3>
					<div className="flex justify-center">
						<ConfigureButton size="xl" />
					</div>
				</div>
			</section>
			{/* <!--Footer--> */}
			<footer className="bg-gray-100">
				<div className="container mx-auto px-6 pt-10 pb-6">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/4 text-center md:text-left ">
							<h5 className="uppercase mb-6 font-bold">Links</h5>
							<ul className="mb-4">
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										FAQ
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Help
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className="w-full md:w-1/4 text-center md:text-left ">
							<h5 className="uppercase mb-6 font-bold">Legal</h5>
							<ul className="mb-4">
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Terms
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Privacy
									</a>
								</li>
							</ul>
						</div>
						<div className="w-full md:w-1/4 text-center md:text-left ">
							<h5 className="uppercase mb-6 font-bold">Social</h5>
							<ul className="mb-4">
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Facebook
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Linkedin
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Twitter
									</a>
								</li>
							</ul>
						</div>
						<div className="w-full md:w-1/4 text-center md:text-left ">
							<h5 className="uppercase mb-6 font-bold">Company</h5>
							<ul className="mb-4">
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Official Blog
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										About Us
									</a>
								</li>
								<li className="mt-2">
									<a
										href="#"
										className="hover:underline text-gray-600 hover:text-orange-500"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
