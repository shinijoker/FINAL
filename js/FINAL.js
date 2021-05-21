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
							//child.castShadow = true;
							//child.receiveShadow = true;
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
							//child.castShadow = true;
							//child.receiveShadow = true;
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
							//child.castShadow = true;
							//child.receiveShadow = true;
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
								//child.castShadow = true;
								//child.receiveShadow = true;
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
								//child.castShadow = true;
								//child.receiveShadow = true;
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
								//child.castShadow = true;
								//child.receiveShadow = true;
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
					child.castShadow = true;
					child.receiveShadow = true;
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
					child.castShadow = true;
					child.receiveShadow = true;
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
					child.castShadow = true;
					child.receiveShadow = true;
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
					child.castShadow = true;
					child.receiveShadow = true;
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

var pointLightOn = function (){
	let point = new THREE.PointLight(0xfffab8, 50, 20);
	lights['point'] = point;
	point.castShadow = true;
	point.position.x = 5;
	point.position.y = 10.5;
	point.position.z = 0;
	scene.add(lights['point']);

}

var godSaysLightsOn = function (){
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
			scalarPuppet: 1,
			positionX: 0,
			positionY: -6,
			positionZ: 0,
			ambientLight: 0.1,
			sunLight: 1,

			skyColor : "#000000",
			groundColor: "#006400",
		};

		let intensidadeLuz = gui.add(parametrosGUI, 'ambientLight').min(0).max(2).step(0.1).name("Fases do dia");
		intensidadeLuz.onChange(function (parametro){
				lights['ambient'].intensity = parametro;
				if(parametro<= 0.3){
					scene.background= new THREE.Color("#000000");
				}else if(parametro>0.3 && parametro<= 0.4){
					scene.background= new THREE.Color("#2f2538");
				}else if(parametro>0.4 && parametro<= 0.5){
					scene.background= new THREE.Color("#382537");
				}else if(parametro>0.5 && parametro<= 0.6){
					scene.background= new THREE.Color("#382526");
				}else if(parametro>0.6 && parametro<= 0.7){
					scene.background= new THREE.Color("#7d5146");
				}else if(parametro>0.7 && parametro<= 0.8){
					scene.background= new THREE.Color("#7d5b46");
				}else if(parametro>0.8 && parametro<= 0.9){
					scene.background= new THREE.Color("#7775eb");
				}else if(parametro>0.9 && parametro<= 1){
					scene.background= new THREE.Color("#93b0e6");
				}else if(parametro>1 && parametro<= 1.1){
					scene.background= new THREE.Color("#93c5e6");
				}else if(parametro>1.1 && parametro<= 1.2){
					scene.background= new THREE.Color("#93d4e6");
				}else if(parametro> 1.2){
					scene.background= new THREE.Color("#93d4e6");
				}
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