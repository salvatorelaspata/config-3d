import { Tile } from "../components/Tile";

export const Catalog = () => {
	return (
		<div className="p-4 flex justify-around">
			<Tile
				title="Testa di moro classica. (Femmina)"
				description="Configurabile! Provalo adesso!"
			/>
			<Tile
				title="Testa di moro classica. (Maschio)"
				description="Configurabile! Provalo adesso!"
			/>
		</div>
	);
};
