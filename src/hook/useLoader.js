import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const manager = new THREE.LoadingManager();
const objLoader = new OBJLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);

manager.onProgress = function (item, loaded, total) {
	// console.log(item, loaded, total);
};
export const loadRGBE = (path, fileName) =>
	new Promise((resolve, reject) => {
		try {
			const hdrEquirect = new RGBELoader()
				.setPath(path)
				.load(fileName, function () {
					hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
					resolve(hdrEquirect);
				});
		} catch (error) {
			reject(error);
		}
	});

export const loadObj = (path, fileName) =>
	new Promise((resolve, reject) => {
		objLoader.load(
			`${path}${fileName}`,
			function (obj) {
				resolve(obj);
			},
			(xhr) => {
				if (xhr.lengthComputable) {
					const percentComplete = (xhr.loaded / xhr.total) * 100;
					// console.log(Math.round(percentComplete) + "% downloaded");
				}
			},
			(err) => {
				reject(err);
			}
		);
	});

export const loadTexture = (path, fileName) =>
	new Promise((resolve, reject) => {
		textureLoader.load(
			`${path}${fileName}`,
			(texture) => {
				resolve(texture);
			},
			(xhr) => {
				if (xhr.lengthComputable) {
					const percentComplete = (xhr.loaded / xhr.total) * 100;
					// console.log(Math.round(percentComplete) + "% downloaded");
				}
			},
			(err) => {
				reject(err);
			}
		);
	});

const _generateTexture = () => {
	const canvas = document.createElement("canvas");
	canvas.width = 2;
	canvas.height = 2;

	const context = canvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0, 1, 2, 1);

	return canvas;
};

export const generateTexture = () => {
	const texture = new THREE.CanvasTexture(_generateTexture());
	texture.magFilter = THREE.NearestFilter;
	texture.wrapT = THREE.RepeatWrapping;
	texture.wrapS = THREE.RepeatWrapping;
	texture.repeat.set(1, 0);
	return texture;
};
