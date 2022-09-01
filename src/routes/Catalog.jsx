import { useNavigate } from "react-router-dom";
import { Tile } from "../components/Tile";
import { catalog } from "../config/catalog";
import { actions } from "../store/store";

export const Catalog = () => {
	let navigate = useNavigate();

	const _onClickConfiguration = (tile) => {
		actions.selectedObject(tile);
		navigate(`${tile.link}/${tile.objId}`);
	};

	return (
		<div className="p-4 flex flex-wrap justify-around">
			{catalog.map((tile) => (
				<Tile
					key={tile.objId}
					title={tile.title}
					showStars={tile.showStars}
					price={tile.price}
					description={tile.description}
					image={tile.image}
					onClickConfiguration={() => _onClickConfiguration(tile)}
				/>
			))}
			{/* <Tile
				visibleStars={true}
				title="Testa di moro classica. (Femmina)"
				description="Provalo adesso!"
			/>
			<Tile
				title="Testa di moro classica. (Maschio)"
				description="Provalo adesso!"
			/> */}
			{/* <div>
				<a rel="ar" href="/models/Angioletto.usdz">
					<img src="/hero.png" />
				</a>
			</div> */}
		</div>
	);
};
