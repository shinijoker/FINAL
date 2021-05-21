var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo
var controls; //controle do mouser

var char=[];

var parametrosGUI = {};
var animationFolder;

var elementos = [];

var velocidade = 0.07;

var ground;
var geometriaA;

var lights =[];



//variaveis para animação
var mixer;
var modelReady = false;
var animationActions = Array();
var activeAction;
var lastAction;
var loadFinished;

//bounding box
var staticElements = [];
var charBox = [];
var helperChar;

var clock = new THREE.Clock();

var objLoading = function(){
	loader = new THREE.OBJLoader();
};
//troca a ação do nosso modelo
const setAction = function(toAction) {
    if (toAction != activeAction) {
        lastAction = activeAction;
        activeAction = toAction;
        lastAction.stop();
        activeAction.reset();
        activeAction.play();
    }
}

var ambientLightOn = function (){
	lights['ambient'] = new THREE.AmbientLight(0xffffff,0.5);
	scene.add(lights['ambient']);
}

var hemisphereLightOn = function(){
	lights['hemisphere'] = new THREE.HemisphereLight(0xcce0ff, 0xffffff, 1);
	scene.add(lights['hemisphere']);
}

var directionalLightOn = function () {
	let light = new THREE.DirectionalLight(0xffffff,1);
	light.castShadow = true;
	light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.camera.left = 1000;
    light.shadow.camera.bottom = 1000;
    light.shadow.camera.right = -1000
    light.shadow.camera.top = -1000;

	light.position.y = 200;
	light.position.x = 100;
	light.target = ground;


	scene.add(light);
	scene.add(light.target)

	lights['directional'] = light;
}

var spotLightOn = function(){
	let spot = new THREE.SpotLight(0xffffff, 0);
	spot.angle = 0.3;
	spot.castShadow = true;

	spot.position.z = 40;
	spot.position.y = 15;

	spot.shadow.distance = 20;
	spot.shadow.penumbra = 30;
	spot.shadow.angle = 25;
	
	spot.target.position.set(0,5,0);

	lights['spot'] = spot;
	scene.add(spot);
}

var pointLightOn = function (){
	let point = new THREE.PointLight(0xffffff, 3, 200);
	lights['point'] = point;
	point.castShadow = true;
	point.position.y=10;
	point.position.z = 10;

	scene.add(point);
}

var godSaysLightsOn = function (){
	//hemisphereLightOn();
	directionalLightOn();
	//spotLightOn();
	//pointLightOn();
	ambientLightOn();
}



var init = function (){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcce0ff);
	
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						500 //far
					);

	

	// geometriaA = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000}));
	// geometriaA.position.x = -8;
	// scene.add(geometriaA);
	
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMap.enabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;
	
	createGui();

	//criaMonstro();	

	objLoading();

	animation();

	
	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("assets/texturas/terrain/grasslight-big.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshLambertMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("assets/texturas/terrain/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade
	
	
	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(1000,1000),
		materialGround
	);
	ground.receiveShadow = true;//chao recebe as sombras.
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);
	godSaysLightsOn();

	//camera.add(lights["spot"]);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	scene.fog = new THREE.Fog(0xcce0ff, 100, 500);


	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

};



var key_r = false;
var key_space = false;
var key_q = false;

var soltouBotao = function(e){

	if (e.keyCode == 82){ //r
		key_r = false;
	}
	if (e.keyCode == 32){ //espaço
		key_space = false;
	}
	if (e.keyCode == 81){ //espaço
		key_q = false;
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 81){ // q
		key_q = true;		
	}

	if (e.keyCode == 38){ //douwn
		console.log(char[1].children[0]);
		char.forEach(function (item){
			item.position.z-=0.05;
		});
	}
	if (e.keyCode == 40){ // UP
		console.log(char[1].children[1]);
		char.forEach(function (item){
			item.position.z+=0.05;
		});
	}
	if (e.keyCode == 37){ //left
		console.log(char[1]);
		char.forEach(function (item){
			item.position.x-=0.1;
		});
	}
	if (e.keyCode == 39){ //right
		char.forEach(function (item){
			item.position.x+=0.1;
		});
	}
}

var count =0; 
var velocidadeOmbroDireitoC = -0.01;
var velocidadeOmbroDireitoL = -0.01;
var pulando = false;
var velocidadePulo = 0.5;
var altura = -1;
var bateu = false;

var animation = function (){
	requestAnimationFrame(animation); 

	let delta = clock.getDelta();

	if (loadFinished){
		mixer.update(delta);

		

		

		charBox[0].setFromObject(char[1].children[0]);
		helperChar.update();
		
	}
	


	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init