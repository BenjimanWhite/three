var scene, camera, renderer;
var geometry, material, line;

var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;


renderer = new THREE.WebGLRenderer();
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
renderer.setClearColor( 0xffffff, 1);
document.body.appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

scene = new THREE.Scene();

material = new THREE.LineDashedMaterial({
  color: 0x000000
});

for(var i = 0; i < 61; i += 2) {
  horizontal_geometry = new THREE.Geometry();
  vertical_geometry = new THREE.Geometry();
  horizontal_geometry.vertices.push(
    new THREE.Vector3( -30, 30 - i, 0 ),
    new THREE.Vector3( 30, 30 - i, 0 )
);
  vertical_geometry.vertices.push(
    new THREE.Vector3( -30 + i, 30, 0 ),
    new THREE.Vector3( -30 + i, -30, 0 )
);

  horizontal_line = new THREE.Line(horizontal_geometry, material);
  vertical_line = new THREE.Line(vertical_geometry, material);
  scene.add(horizontal_line);
  scene.add(vertical_line);
}
  renderer.render(scene, camera);
















