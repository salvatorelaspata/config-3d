import { proxy, useSnapshot } from "valtio";

export const store = proxy({ components: [] });

export const actions = {
	addComponent: (color) => {
		store.components.push(color);
	},
};

export function useComponent() {
	const snapShot = useSnapshot(store);
	return snapShot.components;
}
