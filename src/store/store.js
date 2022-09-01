import { proxy, useSnapshot } from "valtio";

export const store = proxy({ components: [], selectedObject: null });

export const actions = {
	addComponent: (color) => {
		// console.log(store.components);
		store.components.push(color);
	},
	selectedObject: (tileObj) => {
		store.selectedObject = tileObj;
	},
};

export function useComponent() {
	const { components } = useSnapshot(store);
	return components;
}

export function useObject() {
	const { selectedObject } = useSnapshot(store);
	return selectedObject;
}
