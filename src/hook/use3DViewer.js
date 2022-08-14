import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { generateTexture, loadObj, loadRGBE } from "./useLoader";

const meshParams = {
	exposure: 1,
};
const _WIDTH = window.innerWidth * 0.9;
const _HEIGHT = window.innerHeight * 0.9;
const _ASPECT_RATIO = _WIDTH / _HEIGHT;

let camera, renderer, scene, mesh;

const render = () => {
	renderer.render(scene, camera);
};

const _onWindowResize = () => {
	const width = _WIDTH;
	const height = _HEIGHT;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
};
// possibile parallelizzare 1 e 3
// - promise.all prima però generare la texture (dipendenza di obj)
export const use3DViewer = (mount) => {
	(async () => {
		console.log("1. load hdr");
		const hdrEquirect = await loadRGBE(
			"./models/textures/",
			"pedestrian_overpass_1k.hdr"
		);
		console.log("hdrEquirect", hdrEquirect);

		// console.log("2. load texture");
		// const texture = await loadTexture("./models/textures/", "uv_grid_opengl.jpg");
		// console.log("texture", texture);

		console.log("2. generate texture");
		const texture = generateTexture();
		console.log("texture", texture);

		console.log("3. load obj");
		const obj = await loadObj(
			"./models/obj/",
			"lego.obj",
			texture,
			hdrEquirect
		);
		console.log("obj", obj);

		// console.log("4. load mesh");
		// const mesh = createMesh(texture, hdrEquirect, obj);
		// console.log("mesh", mesh);

		console.log("5. create scene, camera, renderer");

		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(_WIDTH, _HEIGHT);
		renderer.shadowMap.enabled = true;

		mount && mount.current && mount.current.appendChild(renderer.domElement);

		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = meshParams.exposure;

		renderer.outputEncoding = THREE.sRGBEncoding;

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, _ASPECT_RATIO, 0.1, 1000);
		// x, y, z
		camera.position.set(140, 30, 0);

		scene.background = hdrEquirect;

		obj.position.set(0, -95, 0);
		obj.rotation.set(0, 90, 0);

		scene.add(obj);
		renderer.render(scene, camera);

		// orbit controls
		const controls = new OrbitControls(camera, renderer.domElement);

		//ANIMATE
		const animate = () => {
			requestAnimationFrame(animate);
			if (obj) obj.rotation.y -= 0.006;
			// required if controls.enableDamping or controls.autoRotate are set to true
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		// const controls = new OrbitControls(camera, renderer.domElement);
		// controls.addEventListener("change", render); // use if there is no animation loop
		// controls.minDistance = 10;
		// controls.maxDistance = 150;

		// window.addEventListener("resize", _onWindowResize);
		//
	})();
};
