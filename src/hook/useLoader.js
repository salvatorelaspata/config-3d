import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const manager = new THREE.LoadingManager();
const objLoader = new OBJLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);

manager.onProgress = function (item, loaded, total) {
	console.log(item, loaded, total);
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

export const loadObj = (path, fileName, texture = null, hdrEquirect) =>
	new Promise((resolve, reject) => {
		objLoader.load(
			`${path}${fileName}`,
			function (obj) {
				texture &&
					obj.traverse(function (child) {
						if (child instanceof THREE.Mesh) {
							// child.material.map = texture;
							// child.material.needsUpdate = true;
							var r = Math.round(255 * Math.random());
							var g = Math.round(255 * Math.random());
							var b = Math.round(255 * Math.random());
							var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
							child.material = new THREE.MeshPhysicalMaterial({
								color: randomColor,
								metalness: meshParams.metalness,
								roughness: meshParams.roughness,
								ior: meshParams.ior,
								alphaMap: texture,
								envMap: hdrEquirect,
								envMapIntensity: meshParams.envMapIntensity,
								transmission: meshParams.transmission, // use material.transmission for glass materials
								specularIntensity: meshParams.specularIntensity,
								specularColor: meshParams.specularColor,
								opacity: meshParams.opacity,
								side: THREE.DoubleSide,
								transparent: true,
							});
							// actions.addComponent(child);
						} else {
							console.log("Not managed", child);
						}
					});

				resolve(obj);
			},
			(xhr) => {
				if (xhr.lengthComputable) {
					const percentComplete = (xhr.loaded / xhr.total) * 100;
					console.log(Math.round(percentComplete) + "% downloaded");
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
					console.log(Math.round(percentComplete) + "% downloaded");
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

const meshParams = {
	color: 0xffffff,
	transmission: 0,
	opacity: 1,
	metalness: 0.2,
	roughness: 0,
	ior: 1.5,
	thickness: 0.01,
	specularIntensity: 1,
	specularColor: 0xffffff,
	envMapIntensity: 1,
	lightIntensity: 1,
	exposure: 1,
};
