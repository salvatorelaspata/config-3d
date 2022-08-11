import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { Color } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { actions } from "../store/store";

const WIDTH = window.innerWidth * 0.7;
const HEIGHT = window.innerHeight * 0.7;
const ASPECT_RATIO = WIDTH / HEIGHT;

let renderer = new THREE.WebGLRenderer();

const _updateSize = () => {
	renderer && renderer.setSize(WIDTH, HEIGHT);
	renderer && renderer.setPixelRatio(ASPECT_RATIO);
};

const _initialization = (onFinishedLoading) => {
	const manager = new THREE.LoadingManager();

	manager.onProgress = function (item, loaded, total) {
		console.log(item, loaded, total);
	};

	const loader = new OBJLoader(manager);
	loader.load(
		"./models/obj/lego.obj",
		function (obj) {
			// object = obj;
			onFinishedLoading(obj);
			// console.log("object", obj);
		},
		(xhr) => {
			if (xhr.lengthComputable) {
				const percentComplete = (xhr.loaded / xhr.total) * 100;
				// console.log(Math.round(percentComplete) + "% downloaded");
			}
		},
		(err) => {
			console.log("ERROR", err);
		}
	);

	// LUCE
	const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
	const light2 = new THREE.AmbientLight(0x404040);

	// texture
	const textureLoader = new THREE.TextureLoader(manager);
	const texture = textureLoader.load("./models/textures/uv_grid_opengl.jpg");

	return [light, light2, texture];
};

const useViewer = (mount) => {
	var texture = useRef();
	var object = useRef();
	const scene = useRef(new THREE.Scene());
	const camera = useRef(
		new THREE.PerspectiveCamera(75, ASPECT_RATIO, 0.1, 1000)
	);

	useLayoutEffect(() => {
		window.addEventListener("resize", _updateSize);
		_updateSize();
		return () => window.removeEventListener("resize", _updateSize);
	}, []);

	useEffect(() => {
		// renderer
		renderer.domElement.setAttribute(
			"style",
			`margin:auto; display:block;width:${WIDTH}px;height:${HEIGHT}px;`
		);
		mount && mount.current && mount.current.appendChild(renderer.domElement);

		const [light, light2, texture] = _initialization(function (obj) {
			obj.traverse((object) => {
				// console.log(object);
				if (object instanceof THREE.Mesh) {
					object.material.map = texture;
					object.material.needsUpdate = true;
					actions.addComponent(object);
				} else {
					console.log("Not managed", object);
				}
			});
			obj.position.set(0, -95, 0);
			obj.rotation.set(0, 90, 0);
			scene.current.add(obj);
			object.current = obj;
		});

		scene.current.add(light);
		scene.current.add(light2);

		//CONTROLLI
		const controls = new OrbitControls(camera.current, renderer.domElement);

		// camera.current.position.z = 2;
		camera.current.position.set(140, 30, 0);

		//ANIMATE
		const animate = function () {
			requestAnimationFrame(animate);
			if (object.current) object.current.rotation.y -= 0.006;
			// required if controls.enableDamping or controls.autoRotate are set to true
			controls.update();
			renderer.render(scene.current, camera.current);
		};
		animate();
	}, [mount]);

	const changeRandomColor = (child) => {
		console.log("changeRandomColor", child);
		if (object.current) {
			object.current.traverse(function (c) {
				var r = Math.round(255 * Math.random());
				var g = Math.round(255 * Math.random());
				var b = Math.round(255 * Math.random());
				var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
				// if (c.isMesh) c.material.map = texture;
				if (!child && c.isMesh) {
					c.material = new THREE.MeshLambertMaterial({
						color: new THREE.Color(randomColor),
						// wireframe: true,
						// alphaMap: texture.current,
						// envMap: texture,
					});
				} else if (c.isMesh && c.uuid === child.uuid) {
					c.material = new THREE.MeshLambertMaterial({
						color: new THREE.Color(randomColor),
					});
					// raffinare
					const { x, y, z } = c.geometry.boundingSphere.center;
					// camera.current.position.set(x - 140, y - 30, z);
				}
			});
		}
	};

	return [changeRandomColor];
};

export default useViewer;
