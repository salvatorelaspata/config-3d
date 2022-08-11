import { Tile } from "../components/Tile";

export const Catalog = () => {
	return (
		<div className="p-4 flex flex-wrap justify-around">
			<Tile
				visibleStars={true}
				title="Testa di moro classica. (Femmina)"
				description="Provalo adesso!"
			/>
			<Tile
				title="Testa di moro classica. (Maschio)"
				description="Provalo adesso!"
			/>
		</div>
	);
};
