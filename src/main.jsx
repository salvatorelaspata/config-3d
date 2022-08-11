import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { routing } from "./config/routing";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			{routing.map(({ id, path, page }) => (
				<Route key={id} path={path} element={page} />
			))}
		</Routes>
	</BrowserRouter>
);
