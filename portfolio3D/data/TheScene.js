/// The Model Facade class. The root node of the graph.
/**
 * @author Carlos Garcia
 */
class TheScene extends Physijs.Scene {
  
  constructor (renderer, aCamera) {

    super();
    this.setGravity(new THREE.Vector3 (0, -50, 0));
    this.camera = aCamera;
    this.createCrosshair(renderer);
    this.avatar = null;
    this.map = null;
    this.skybox = null;
    this.index = 0;
    this.createAvatar();
    this.place = this.createPlace();
    this.ambientLight = null;
    this.spotLight = null;
    this.createLights();
    this.add(this.place);
    this.createText();
  }
  
  /// It creates the camera and adds it to the graph
  /**
   * @param renderer - The renderer associated with the camera
   */
  createCrosshair(renderer) {
    // Create the Crosshair
    var crosshair = new Crosshair();
    this.camera.add( crosshair );

    // Place it in the center
    var crosshairPercentX = 50;
    var crosshairPercentY = 50;
    var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
    var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;
    crosshair.position.set((crosshairPercentX / 100) * 2 - 1, (crosshairPercentY / 100) * 2 - 1, -0.3);
  }
  
  /// It creates lights and adds them to the graph
  createLights() {
    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    this.add (this.ambientLight);
    
    // add spotlight for the shadows
    this.spotLight = new THREE.SpotLight( 0xffffff );
    this.spotLight.position.set( 0, 500, 1000 );
    this.spotLight.intensity = 1;
    this.spotLight.castShadow = true;
    // the shadow resolution
    this.spotLight.shadow.mapSize.width=2048;
    this.spotLight.shadow.mapSize.height=2048;
    this.add (this.spotLight);

    this.spotLight2 = new THREE.PointLight( 0xffffff, 1, 30);
    this.spotLight2.position.set(220, 75, 290);
    // the shadow resolution
    this.add (this.spotLight2);

    this.spotLight3 = new THREE.PointLight( 0xffffff, 1, 30);
    this.spotLight3.position.set(-110, 110, 290);
    // the shadow resolution
    this.add (this.spotLight3);

    this.spotLight4 = new THREE.PointLight( 0xffffff, 1, 30);
    this.spotLight4.position.set(-230, 40, 290);
    // the shadow resolution
    this.add (this.spotLight4);

    this.spotLight5 = new THREE.PointLight( 0xffffff, 1, 30);
    this.spotLight5.position.set(-295, 72, 200);
    // the shadow resolution
    this.add (this.spotLight5);


   this.spotLight6 = new THREE.PointLight( 0xffffff, 1, 50);
    this.spotLight6.position.set(0, 70, 300);
    // the shadow resolution
    this.add (this.spotLight6);
 /*
    this.rectLight1 = new THREE.SpotLight( 0x00ff00, 1.0, 100, (Math.PI / 4), 0, 0);
    this.rectLight1.position.set(0, 0, 0);
    this.rectLight1.target.position.set( 0, 50, 30 );
    // the shadow resolution
    this.add (this.rectLight1);
    this.add (this.rectLight1.target);*/
    
  }
  
  /// It creates the place
  /**
   * @return place
   */
  createPlace() {
    var place = new THREE.Object3D();    

    this.skybox = new Skybox();
    place.add(this.skybox);

    //Creates the map
    this.map = new Map();
    for (var i = 0; i < this.map.getMapSize(); ++i) {
      this.add(this.map.getMap(i));
    }

    return place;
  }

  /// It creates the avatar
  /**
   *
   */
  createAvatar() {
    this.avatar = new Avatar(this.camera, this);
  }

  /**
   * @controls - The GUI information
   */
  animate () {
    this.simulate();

    if (moveForward) this.avatar.moveForward();
    if (moveBackward) this.avatar.moveBackward();
    if (moveLeft) this.avatar.moveLeft();
    if (moveRight) this.avatar.moveRight();

    if (jumping) {
      this.avatar.jump();
    }

    this.avatar.updateControls();
  }

  /// It returns the camera
  /**
   * @return The camera
   */
  getCamera () {
    return this.camera;
  }
  
  /// It returns the camera controls
  /**
   * @return The camera controls
   */
  getCameraControls () {
    return this.controls;
  }
  
  /// It updates the aspect ratio of the camera
  /**
   * @param anAspectRatio - The new aspect ratio for the camera
   */
  setCameraAspect (anAspectRatio) {
    this.camera.aspect = anAspectRatio;
    this.camera.updateProjectionMatrix();
  }

  createText() {
   /* var loader = new THREE.FontLoader();
    var geometry;
    var geometry2;
    loader.load( './fonts/Josefin Sans_Bold.json', 
        // Crea texto en 3D después de cargar la fuente
        function ( font ) {

            geometry = new THREE.TextGeometry( '<Hello World/>', {
                font: font,
                size: 15,
                height: 5,
                curveSegments: 1,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 1
            } );

            geometry2 = new THREE.TextGeometry( 'I\'m Carlos Garcia', {
              font: font,
              size: 10,
              height: 5,
              curveSegments: 1,
              bevelEnabled: false,
              bevelThickness: 1,
              bevelSize: 1,
              bevelSegments: 1
          } );
            // Crear material vectorial normal
            var meshMaterial = new THREE.MeshBasicMaterial({
                flatShading: THREE.FlatShading,
                transparent: true,
                opacity: 0.7,
                color: 0x00A514,
        });

        var meshMaterial2 = new THREE.MeshBasicMaterial({
          flatShading: THREE.FlatShading,
          transparent: true,
          opacity: 0.9,
          color: 0xffffff,
          wireframe: true
         });
            var mesh = new THREE.Mesh(geometry, meshMaterial);
            mesh.position.set(280, 100, 312);
            mesh.rotation.y = 3.145;
            scene.add(mesh);

            var mesh2 = new THREE.Mesh(geometry2, meshMaterial2);
            mesh2.position.set(267, 85, 313);
            mesh2.rotation.y = 3.145;
            scene.add(mesh2);
        },
        // Progreso de carga
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // se produjo un error
        function (err) {
            console.log(err);
        }
     );*/

      /*const geometry = new THREE.BoxGeometry( 10, 10, 10 );
      const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      const cube = new THREE.Mesh( geometry, material );
      cube.position.set(0, 0, 0);
      this.add( cube );*/
  }
}


var acc = {
  data: "hola",
  systema: ["casa", 1],
}

