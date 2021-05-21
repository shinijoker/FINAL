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

// Linha teste para push

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
	


	

//////////////////////////////////////////////////////////


	

	//grama 1 direita//
	loader.load(
		'assets/chao/retangularGrass/retangularGrass.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['grama1d'] = obj;

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/chao/retangularGrass/retangularGrass.jpg")}
						);
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});

			obj.scale.y = .2;
			obj.scale.z = .2;
			obj.scale.x = .2;

			obj.position.y = -8.3;
			obj.position.z = -50;
			obj.position.x = 50;

			obj.rotation.x-=7.85;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	//grama 2 direita//
	loader.load(
		'assets/chao/retangularGrass/retangularGrass.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['grama2d'] = obj;

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/chao/retangularGrass/retangularGrass.jpg")}
					);
					child.castShadow = true;
					child.receiveShadow = true;
				}
			}
			);

			obj.scale.y = .2;
			obj.scale.z = .2;
			obj.scale.x = .2;

			obj.position.y = -8.3;
			obj.position.z = -150;
			obj.position.x = 50;

			obj.rotation.x-=7.85;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	//grama 1 esquerda//
	loader.load(
		'assets/chao/retangularGrass/retangularGrass.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['grama1e'] = obj;

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/chao/retangularGrass/retangularGrass.jpg")}
					);
					child.castShadow = true;
					child.receiveShadow = true;
				}

			}
			);

			obj.scale.y = .2;
			obj.scale.z = .2;
			obj.scale.x = .2;

			obj.position.y = -8.3;
			obj.position.z = -50;
			obj.position.x = -50;

			obj.rotation.x-=7.85;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	//grama 2 esquerda//
	loader.load(
		'assets/chao/retangularGrass/retangularGrass.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['grama2e'] = obj;

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/chao/retangularGrass/retangularGrass.jpg")}
					);
					child.castShadow = true;
					child.receiveShadow = true;
					
				}
			}
			);

			obj.scale.y = .2;
			obj.scale.z = .2;
			obj.scale.x = .2;

			obj.position.y = -8.3;
			obj.position.z = -150;
			obj.position.x = -50;

			obj.rotation.x-=7.85;

			scene.add(obj);
			console.log("Carregou!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	//============ CERCA 1D ============//


	//cerca1dsul
	loader.load(
	'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['ovelha'] = obj;
			
			
			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshLambertMaterial({
							map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
							//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							
							
						}
							
						);
						//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			 obj.scale.y = 2;
			 obj.scale.z = 2;
			 obj.scale.x = 4;

			obj.position.y = -8;
			obj.position.x = 51;
			obj.position.z = -20;

			//obj.rotation.x-=1.35;
			scene.add(new THREE.BoxHelper(obj, 0xffff00));

			scene.add(obj);

			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj.children[0]);
			staticBounding.push(objBox);
			console.log("Carregou Ovelha");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
	
	//cerca1dnorte
	loader.load(
		'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['ovelha'] = obj;
				
				
				obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
								//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
	
				 obj.scale.y = 2;
				 obj.scale.z = 2;
				 obj.scale.x = 4;
	
				obj.position.y = -8;
				obj.position.x = 51;
				obj.position.z = -80.5;
	
				//obj.rotation.x-=1.35;
				scene.add(new THREE.BoxHelper(obj, 0xffff00));
	
				scene.add(obj);
	
				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj.children[0]);
				staticBounding.push(objBox);
				console.log("Carregou Ovelha");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);

		//cerca1doeste
	loader.load(
		'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['ovelha'] = obj;
				
				
				obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
								//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
	
				 obj.scale.y = 2;
				 obj.scale.z = 2;
				 obj.scale.x = 4;
	
				obj.position.y = -8;
				obj.position.x = 19.9;
				obj.position.z = -50;
	
				obj.rotation.y-=4.7125;
				scene.add(new THREE.BoxHelper(obj, 0xffff00));
	
				scene.add(obj);
	
				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj.children[0]);
				staticBounding.push(objBox);
				console.log("Carregou Ovelha");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);
		
		//cerca1dleste
	loader.load(
		'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['ovelha'] = obj;
				
				
				obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
								//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
	
				 obj.scale.y = 2;
				 obj.scale.z = 2;
				 obj.scale.x = 4;
	
				obj.position.y = -8;
				obj.position.x = 79.9;
				obj.position.z = -50;
	
				obj.rotation.y-=4.7125;
				scene.add(new THREE.BoxHelper(obj, 0xffff00));
	
				scene.add(obj);
	
				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj.children[0]);
				staticBounding.push(objBox);
				console.log("Carregou Ovelha");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
	);
	//===============================//


	//============ CERCA 2D ============//


	//cerca2dsul
	loader.load(
		'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['ovelha'] = obj;
				
				
				obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
								//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
	
				 obj.scale.y = 2;
				 obj.scale.z = 2;
				 obj.scale.x = 4;
	
				obj.position.y = -8;
				obj.position.x = 51;
				obj.position.z = -120;
	
				//obj.rotation.x-=1.35;
				scene.add(new THREE.BoxHelper(obj, 0xffff00));
	
				scene.add(obj);
	
				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj.children[0]);
				staticBounding.push(objBox);
				console.log("Carregou Ovelha");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);
		
		//cerca2dnorte
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = 51;
					obj.position.z = -180.5;
		
					//obj.rotation.x-=1.35;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
	
			//cerca2doeste
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = 19.9;
					obj.position.z = -150;
		
					obj.rotation.y-=4.7125;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
			
			//cerca2dleste
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = 79.9;
					obj.position.z = -150;
		
					obj.rotation.y-=4.7125;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
		);
		//===============================//			


	//============ CERCA 1E ============//


	//cerca1esul
	loader.load(
		'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['ovelha'] = obj;
				
				
				obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
								//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
	
				 obj.scale.y = 2;
				 obj.scale.z = 2;
				 obj.scale.x = 4;
	
				obj.position.y = -8;
				obj.position.x = -51;
				obj.position.z = -20;
	
				//obj.rotation.x-=1.35;
				scene.add(new THREE.BoxHelper(obj, 0xffff00));
	
				scene.add(obj);
	
				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj.children[0]);
				staticBounding.push(objBox);
				console.log("Carregou Ovelha");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);
		
		//cerca1enorte
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = -51;
					obj.position.z = -80.5;
		
					//obj.rotation.x-=1.35;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
	
			//cerca1eoeste
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = -19.9;
					obj.position.z = -50;
		
					obj.rotation.y-=4.7125;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
			
			//cerca1eleste
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = -79.9;
					obj.position.z = -50;
		
					obj.rotation.y-=4.7125;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
		);
		//===============================//
	
	
		//============ CERCA 2E ============//
	
	
		//cerca2esul
		loader.load(
			'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
				function(obj){
					//atribui a cena, colore, reposiciona, rotaciona
					elementos['ovelha'] = obj;
					
					
					obj.traverse( function (child){
							if (child instanceof THREE.Mesh){
								child.material = new THREE.MeshLambertMaterial({
									map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
									//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									
									
								}
									
								);
								//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
								child.castShadow = true;
								child.receiveShadow = true;
							}
						}
					);
		
					 obj.scale.y = 2;
					 obj.scale.z = 2;
					 obj.scale.x = 4;
		
					obj.position.y = -8;
					obj.position.x = -51;
					obj.position.z = -120;
		
					//obj.rotation.x-=1.35;
					scene.add(new THREE.BoxHelper(obj, 0xffff00));
		
					scene.add(obj);
		
					obj.children[0].geometry.computeBoundingBox();
					let objBox = new THREE.Box3().setFromObject(obj.children[0]);
					staticBounding.push(objBox);
					console.log("Carregou Ovelha");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
			
			//cerca2enorte
			loader.load(
				'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
					function(obj){
						//atribui a cena, colore, reposiciona, rotaciona
						elementos['ovelha'] = obj;
						
						
						obj.traverse( function (child){
								if (child instanceof THREE.Mesh){
									child.material = new THREE.MeshLambertMaterial({
										map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
										//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
										
										
									}
										
									);
									child.castShadow = true;
									child.receiveShadow = true;
									//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									//child.castShadow = true;
									//child.receiveShadow = true;
								}
							}
						);
			
						 obj.scale.y = 2;
						 obj.scale.z = 2;
						 obj.scale.x = 4;
			
						obj.position.y = -8;
						obj.position.x = -51;
						obj.position.z = -180.5;
			
						//obj.rotation.x-=1.35;
						scene.add(new THREE.BoxHelper(obj, 0xffff00));
			
						scene.add(obj);
			
						obj.children[0].geometry.computeBoundingBox();
						let objBox = new THREE.Box3().setFromObject(obj.children[0]);
						staticBounding.push(objBox);
						console.log("Carregou Ovelha");
			
					},//Oque acontece quando terminar!
					function(andamento){
						console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
					},//O que acontece enquanto esta carregando
					function(error){
						console.log(" Deu merda!: "+ error);
					}//o que acontece se der merda.
				);
		
				//cerca2eoeste
			loader.load(
				'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
					function(obj){
						//atribui a cena, colore, reposiciona, rotaciona
						elementos['ovelha'] = obj;
						
						
						obj.traverse( function (child){
								if (child instanceof THREE.Mesh){
									child.material = new THREE.MeshLambertMaterial({
										map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
										//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
										
										
									}
										
									);
									child.castShadow = true;
									child.receiveShadow = true;
									//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									//child.castShadow = true;
									//child.receiveShadow = true;
								}
							}
						);
			
						 obj.scale.y = 2;
						 obj.scale.z = 2;
						 obj.scale.x = 4;
			
						obj.position.y = -8;
						obj.position.x = -19.9;
						obj.position.z = -150;
			
						obj.rotation.y-=4.7125;
						scene.add(new THREE.BoxHelper(obj, 0xffff00));
			
						scene.add(obj);
			
						obj.children[0].geometry.computeBoundingBox();
						let objBox = new THREE.Box3().setFromObject(obj.children[0]);
						staticBounding.push(objBox);
						console.log("Carregou Ovelha");
			
					},//Oque acontece quando terminar!
					function(andamento){
						console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
					},//O que acontece enquanto esta carregando
					function(error){
						console.log(" Deu merda!: "+ error);
					}//o que acontece se der merda.
				);
				
				//cerca2eleste
			loader.load(
				'assets/cerca/steelFence/fance.obj',//arquivo que vamos buscar
					function(obj){
						//atribui a cena, colore, reposiciona, rotaciona
						elementos['ovelha'] = obj;
						
						
						obj.traverse( function (child){
								if (child instanceof THREE.Mesh){
									child.material = new THREE.MeshLambertMaterial({
										map: new THREE.TextureLoader().load("assets/cerca/steelFence/fance.png"),
										//alphaMap: new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
										
										
									}
										
									);
									child.castShadow = true;
									child.receiveShadow = true;
									//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
									//child.castShadow = true;
									//child.receiveShadow = true;
								}
							}
						);
			
						 obj.scale.y = 2;
						 obj.scale.z = 2;
						 obj.scale.x = 4;
			
						obj.position.y = -8;
						obj.position.x = -79.9;
						obj.position.z = -150;
			
						obj.rotation.y-=4.7125;
						scene.add(new THREE.BoxHelper(obj, 0xffff00));
			
						scene.add(obj);
			
						obj.children[0].geometry.computeBoundingBox();
						let objBox = new THREE.Box3().setFromObject(obj.children[0]);
						staticBounding.push(objBox);
						console.log("Carregou Ovelha");
			
					},//Oque acontece quando terminar!
					function(andamento){
						console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
					},//O que acontece enquanto esta carregando
					function(error){
						console.log(" Deu merda!: "+ error);
					}//o que acontece se der merda.
			);
	//===============================//		
	
	// mico //	

			loader.load(
				'assets/staticAnimals/GoldenLion/GoldenLion2.obj',
				function(obj){
					elementos['mico'] = obj;

					obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							child.material = new THREE.MeshLambertMaterial({
								map: new THREE.TextureLoader().load("assets/staticAnimals/GoldenLion/GoldenLion.jpg"),
								
								
								
							}
								
							);
							//material.alphaMap = new THREE.TextureLoader().load("assets/cerca/wire fence/tex/fence_alpha.png")
							//child.castShadow = true;
							//child.receiveShadow = true;
						}
					}
				);
							obj.scale.y = .2;
							obj.scale.z = .2;
							obj.scale.x = .2;
			
							obj.position.y = 7.85;
							obj.position.x = 45;
							obj.position.z = -49.4;
				
							obj.rotation.x=-1.2;
							obj.rotation.y=0.5;
							scene.add(new THREE.BoxHelper(obj, 0xffff00));
				
							scene.add(obj);
				
							obj.children[0].geometry.computeBoundingBox();
							let objBox = new THREE.Box3().setFromObject(obj.children[0]);
							staticBounding.push(objBox);
							console.log("Carregou Ovelha");
				
						},//Oque acontece quando terminar!
						function(andamento){
							console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
						},//O que acontece enquanto esta carregando
						function(error){
							console.log(" Deu merda!: "+ error);
						}//o que acontece se der merda.
											
			);
			
	//tree do mico//
			loader.load(
				'assets/tree.obj', //arquivo que vamos carregar
				function(object){
					
					object.traverse( function ( child ) {
								if ( child instanceof THREE.Mesh ) {
									child.material = new THREE.MeshLambertMaterial();
									child.material.map = new THREE.TextureLoader().load("assets/texturas/Wood.jpg");
									child.material.shininess = 0;
									child.castShadow = true;
									child.receiveShadow = true;
								}
							});
		
					object.scale.x =50;
					object.scale.y = 50;
					object.scale.z = 50;
		
					object.position.z = -50;
					object.position.x = 50;
					
					object.position.y = -7;
				
				//object.rotation.y += 1;

			object.castShadow = true;
			scene.add(new THREE.BoxHelper(object, 0xffff00));
			//AS 3 LINHAS ABAIXO N ERAM COMENTADAS
			//object.children[0].geometry.computeBoundingBox();
			//let objBox = new THREE.Box3().setFromObject(object.children[0]);
			//staticBounding.push(objBox);

		// camera.lookAt(objCarregado.position)

			scene.add(object);    
		},//metodo, tudo deu certo
		function( andamento) {
			console.log((andamento.loaded / andamento.total *100) + "% pronto!");
		},//metodo executa enquanto carrega
		function (error){
			console.log("Deu caca: " + error);
		} //metodo deu merda
		);




		//////////////////Postes////////////////////////////////	


		///////////////////////Poste 1/////////////////////////

	let loaderFBX = new THREE.FBXLoader();

	loaderFBX.load(
		'assets/Poste/Poste.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poste1'] = obj;	
			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/Poste/poste.png")}
					);
					child.receiveShadow = true;
					child.castShadow = true;
				}
			}
		);
		
		 obj.scale.y = 0.02;
		 obj.scale.z = 0.02;
		 obj.scale.x = 0.02;
		
		obj.position.y = 4;
		obj.position.x = -10;
		obj.position.z = -85;
			
		scene.add(obj);
		console.log("Carregou Poste1");
		
		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


	//////////////////Poste 2////////////////////
		
	loaderFBX.load(
		'assets/Poste/Poste.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poste2'] = obj;	
			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/Poste/poste.png")}
					);
					child.receiveShadow = true;
					child.castShadow = true;
				}
			}
		);
		
		 obj.scale.y = 0.02;
		 obj.scale.z = 0.02;
		 obj.scale.x = 0.02;
		
		obj.position.y = 4;
		obj.position.x = 20;
		obj.position.z = -85;
			
		scene.add(obj);
		console.log("Carregou Poste2");
		
		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);
		//////////////////Poste 3////////////////////
		
	loaderFBX.load(
		'assets/Poste/Poste.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poste3'] = obj;	
			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/Poste/poste.png")}
					);
					child.receiveShadow = true;
					child.castShadow = true;
				}
			}
		);
		
		 obj.scale.y = 0.02;
		 obj.scale.z = 0.02;
		 obj.scale.x = 0.02;
		
		obj.position.y = 4;
		obj.position.x = -10;
		obj.position.z = -110;
			
		scene.add(obj);
		console.log("Carregou Poste3");
		
		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

//////////////////Poste 4////////////////////
		
	loaderFBX.load(
		'assets/Poste/Poste.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['poste4'] = obj;	
			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						child.material = new THREE.MeshLambertMaterial({
						map: new THREE.TextureLoader().load("assets/Poste/poste.png")}
					);
					child.receiveShadow = true;
					child.castShadow = true;
				}
			}
		);
		
		obj.scale.y = 0.02;
		obj.scale.z = 0.02;
		obj.scale.x = 0.02;
		
		obj.position.y = 4;
		obj.position.x = 20;
		obj.position.z = -110;
			
		scene.add(obj);
		console.log("Carregou Poste4");
		
		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);


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

	lights['sol'] = light;
}

var pointLightOn1 = function (){
	let point1 = new THREE.PointLight(0xffffff, 1, 10);

	lights['point1'] = point1;
	point1.castShadow = true;
	point1.position.x = -15;
	point1.position.y = 35;
	point1.position.z = -85;
	scene.add(lights['point1']);
}

var pointLightOn2 = function (){
	let point1 = new THREE.PointLight(0xffffff, 1, 10);

	lights['point2'] = point1;
	point1.castShadow = true;
	point1.position.x = -15;
	point1.position.y = 35;
	point1.position.z = -110;
	scene.add(lights['point2']);
}

var pointLightOn3 = function (){
	let point1 = new THREE.PointLight(0xffffff, 1, 10);

	lights['point3'] = point1;
	point1.castShadow = true;
	point1.position.x = 15;
	point1.position.y = 35;
	point1.position.z = -110;
	scene.add(lights['point3']);
}

var pointLightOn4 = function (){
	let point1 = new THREE.PointLight(0xffffff, 1, 10);

	lights['point4'] = point1;
	point1.castShadow = true;
	point1.position.x = 15;
	point1.position.y = 35;
	point1.position.z = -85;
	scene.add(lights['point4']);
}


var godSaysLightsOn = function (){
	ambientLightOn();
	directionalLightOn();
	pointLightOn1();
	pointLightOn2();
	pointLightOn3();
	pointLightOn4();
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

	
	
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMap.enabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;
	
	var createGui = function (){
		const gui = new dat.GUI();

		parametrosGUI = {
		ambientLight: 0,
		scalarPuppet: 1,
		positionX: 0,
		positionY: -6,
		positionZ: 0,
		sunLight: 1,
		};

		let intensidadeLuz = gui.add(parametrosGUI, 'ambientLight').min(0).max(1.2).step(0.1).name("Fases do dia");
		intensidadeLuz.onChange(function (parametro){
				if(parametro<= 0.3){
					scene.background= new THREE.Color("#000000");
					lights['sol'].intensity = 0.3;
				}else if(parametro>0.3 && parametro<= 0.4){
					scene.background= new THREE.Color("#2f2538");
					lights['sol'].intensity = 0.3;
				}else if(parametro>0.4 && parametro<= 0.5){
					scene.background= new THREE.Color("#382537");
					lights['sol'].intensity = 0.4;
				}else if(parametro>0.5 && parametro<= 0.6){
					scene.background= new THREE.Color("#382526");
					lights['sol'].intensity = 0.5;
					lights['sol'].position.z = 210;
					lights['sol'].position.x = 210;
				}else if(parametro>0.6 && parametro<= 0.7){
					scene.background= new THREE.Color("#b87477");
					lights['sol'].intensity = 0.6;
					lights['sol'].position.z = 130;
					lights['sol'].position.x = 130;
				}else if(parametro>0.7 && parametro<= 0.8){
					scene.background= new THREE.Color("#fad098");
					lights['sol'].intensity = 0.7;
					lights['sol'].position.z = 90;
					lights['sol'].position.x = 90;
				}else if(parametro>0.8 && parametro<= 0.9){
					scene.background= new THREE.Color("#feffd1");
					lights['sol'].position.z = 60;
					lights['sol'].position.x = 60;
				}else if(parametro>0.9 && parametro<= 1){
					scene.background= new THREE.Color("#95b7f5");
					lights['sol'].position.z = 30;
					lights['sol'].position.x = 30;
				}else if(parametro>1 && parametro<= 1.1){
					scene.background= new THREE.Color("#93cde6");
					lights['sol'].position.z = 0;
					lights['sol'].position.x = 0;
				}else if(parametro>1.1 && parametro<= 1.2){
					scene.background= new THREE.Color("#98e0eb");
				}else if(parametro> 1.2){
					scene.background= new THREE.Color("#98e0eb");
				}
				if(parametro <= 0.5){
					lights['point1'].castShadow = true;
					lights['point2'].castShadow = true;
					lights['point3'].castShadow = true;
					lights['point4'].castShadow = true;
					lights['point1'].intensity = 10;
					lights['point2'].intensity = 10;
					lights['point3'].intensity = 10;
					lights['point4'].intensity = 10;
					lights['sol'].castShadow = false;
				}else if(parametro > 0.5){
					lights['point1'].castShadow = false;
					lights['point2'].castShadow = false;
					lights['point3'].castShadow = false;
					lights['point4'].castShadow = false;
					lights['point1'].intensity = 0;
					lights['point2'].intensity = 0;
					lights['point3'].intensity = 0;
					lights['point4'].intensity = 0;
					lights['sol'].castShadow = true;
					
				}
				if(parametro>0.8){
					lights['sol'].intensity = 1;
					
				}
			}
		);
		let folderPosition = gui.addFolder("Position");

		let positionX = folderPosition.add(parametrosGUI, 'positionX').min(0).max(600).step(15).name("Position X");
		positionX.onChange(function (parametro){
			lights['sol'].position.x = parametro;
			}
		);
		let positionY = folderPosition.add(parametrosGUI, 'positionY').min(0).max(600).step(15).name("Position Y");
		positionY.onChange(function (parametro){
			lights['sol'].position.y = parametro;
			}
		);
		let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(0).max(600).step(15).name("Position Z");
		positionZ.onChange(function (parametro){
			lights['sol'].position.z = parametro;
			}
		);
		gui.open();

	}

	createGui();

	objLoading();

	animation();

	
	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("assets/texturas/PavingStones/PavingStonesColor.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshLambertMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("assets/texturas/PavingStones/PavingStonesNormal.jpg"); //busca a normal, que da noção básica de profundidade
	materialGround.displacementMap = textureLoad.load("assets/texturas/PavingStones/PavingStonesDisplacement.jpg")
	
	
	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(1000,1000),
		materialGround
	);
	ground.receiveShadow = true;//chao recebe as sombras.
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);
	godSaysLightsOn();

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	scene.fog = new THREE.Fog(0xcce0ff, 100, 500);

};




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

window.onload = this.init