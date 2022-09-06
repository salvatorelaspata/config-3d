import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { catalog } from "../config/catalog";
import { actions } from "../store/store";
import { generateTexture, loadFBX, loadObj, loadRGBE } from "./useLoader";

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

const _WIDTH = window.innerWidth * 0.9;
const _HEIGHT = window.innerHeight * 0.9;
const _ASPECT_RATIO = _WIDTH / _HEIGHT;

let camera,
	renderer,
	scene,
	controls,
	sceneMeshes = [];

const _onWindowResize = () => {
	// console.log("_onWindowResize", _WIDTH, _HEIGHT);
	const width = window.innerWidth * 0.9;
	const height = window.innerHeight * 0.9;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
};

// const raycaster = new THREE.Raycaster();
// const _onClick = (event) => {
// 	const mouse = {
// 		x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
// 		y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
// 	};
// 	raycaster.setFromCamera(mouse, camera);
// 	const intersects = raycaster.intersectObjects(sceneMeshes, false);
// 	if (intersects.length > 0) {
// 		console.log(sceneMeshes.length + " " + intersects.length);
// 		console.log(intersects[0], intersects);
// 	}
// };
// const _onMouseMove = (event) => {
// 	const mouse = {
// 		x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
// 		y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
// 	};
// 	console.log(mouse);
// 	raycaster.setFromCamera(mouse, camera);
// 	const intersects = raycaster.intersectObjects(sceneMeshes, false);
// 	if (intersects.length > 0) {
// 		console.log(sceneMeshes.length + " " + intersects.length);
// 		console.log(intersects[0], intersects);
// 	}
// };

export const applyRandomMesh = (obj, texture, hdrEquirect) => {
	texture &&
		obj.traverse(function (child) {
			child.addEventListener("click", (a) => {
				console.log("click");
			});
			if (child instanceof THREE.Mesh) {
				// child.material.map = texture;
				// child.material.needsUpdate = true;
				const r = Math.round(255 * Math.random());
				const g = Math.round(255 * Math.random());
				const b = Math.round(255 * Math.random());
				const randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
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
				actions.addComponent(child);
				sceneMeshes.push(child);
			} else {
				// console.log("Not managed", child);
			}
		});
};

export const use3DViewer = (mount, objId = "") => {
	const [texture, setTexture] = useState(generateTexture());
	const [hdrEquirect, setHdrEquirect] = useState(generateTexture());
	const [objs, setObjs] = useState([]);
	const c = catalog.find((c) => c.objId === objId) || {};
	const { object, background } = c;
	useEffect(() => {
		// load hdr equirectangular texture for environment mapping
		loadRGBE(
			background?.path || "/models/textures/",
			background?.fileName || "pedestrian_overpass_1k.hdr"
		).then((hdrEquirect) => {
			setHdrEquirect(hdrEquirect);
			// load object model .obj
			Promise.all([
				// loadObj("/models/obj/", "lego.obj"),
				// loadFBX("/models/fbx/", "Fruttiera2.fbx"),
				// loadFBX("/models/fbx/", "Fruttiera.fbx"),
				object?.type === "obj" || !object?.type
					? loadObj(
							object?.path || "/models/obj/",
							object?.fileName || "lego.obj"
					  )
					: loadFBX(
							object?.path || "/models/fbx/",
							object?.fileName || "Fruttiera.fbx"
					  ),
			]).then(([obj /*, fbx, fbx2*/]) => {
				// loadObj("./models/obj/", "lego.obj").then((obj) => {
				// loadFBX("./models/fbx/", "Fruttiera2.fbx").then((obj) => {

				obj.position.set(0, 0, 0);
				// fbx.position.set(50, 0, 0);
				// fbx2.position.set(100, 0, 0);
				obj.rotation.set(0, 90, 0);
				setObjs([obj /*, fbx, fbx2*/]);
				// apply random mesh color to object model
				applyRandomMesh(obj, texture, hdrEquirect);
				// applyRandomMesh(fbx, texture, hdrEquirect);
				// applyRandomMesh(fbx2, texture, hdrEquirect);
				// applyDefaultMesh(obj);
				// create and configure renderer
				renderer = new THREE.WebGLRenderer({ antialias: true });
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(_WIDTH, _HEIGHT);
				renderer.shadowMap.enabled = true;
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = meshParams.exposure;
				renderer.outputEncoding = THREE.sRGBEncoding;
				// mount renderer to dom
				mount &&
					mount.current &&
					mount.current.appendChild(renderer.domElement);

				// create scene
				scene = new THREE.Scene();
				// create camera
				camera = new THREE.PerspectiveCamera(75, _ASPECT_RATIO, 0.1, 1000);
				camera.position.set(140, 30, 0); // x, y, z
				// set texture environment mapping
				scene.background = hdrEquirect;
				// add obj to scene
				const boundingBox = new THREE.Box3().setFromObject(obj);
				const minY = boundingBox.min.y;
				const maxY = boundingBox.max.y;
				const delta = (maxY - minY) / 2;
				obj.position.y = -delta;
				scene.add(obj);
				// scene.add(fbx);
				// scene.add(fbx2);

				// orbit controls
				controls = new OrbitControls(camera, renderer.domElement);

				// ANIMATE
				const animate = () => {
					requestAnimationFrame(animate);
					if (obj) obj.rotation.y -= 0.006;
					// required if controls.enableDamping or controls.autoRotate are set to true
					controls.update();
					renderer.render(scene, camera);
				};

				animate();

				window.addEventListener("resize", _onWindowResize);
				// renderer.domElement.addEventListener("click", _onClick, false);
				// renderer.domElement.addEventListener(
				// 	"mousemove",
				// 	_onMouseMove,
				// 	false
				// );
			});
		});

		// console.log("hdrEquirect", hdrEquirect);
	}, []);

	return {
		objs,
		texture,
		hdrEquirect,
	};
};
