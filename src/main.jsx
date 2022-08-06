import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Catalog } from "./routes/Catalog";
import { Configurator } from "./routes/Configurator";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="configurator" element={<Configurator />} />
			<Route path="catalog" element={<Catalog />} />
		</Routes>
		{/* <Footer /> */}
	</BrowserRouter>
);
