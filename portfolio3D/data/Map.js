/// The Map class
/**
 * @author Carlos Garcia
 * 
 */

class Map {

  constructor () {

    this.map_size = 0;
    this.map = [];

    var loader = new THREE.TextureLoader();
    var texturaMetal = loader.load ("imgs/metal.jpg");
    var texturaMetal2 = loader.load ("imgs/metal2.jpg");
    var texturaBase = loader.load("imgs/piedras.jpg");
    var texturaWood = loader.load("imgs/wood.jpg");
    var foto1 = loader.load("imgs/foto1.jpg");
    var intro1 = loader.load("imgs/intro1.fw.png");
    var intro2 = loader.load("imgs/pic1.gif");

    var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaMetal}),0,0);
    var mat2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaMetal2}),0,0);
    var matBase = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaBase}),0,0);
    var matBase2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaWood}),0,0);
    var matFoto1 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: foto1}),0,0);
    var matIntro1 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro1}),0,0);
    var matIntro2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro2}),0,0);
    
    var start1 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 2, 500, 1, 1, 1), matBase2, 0);
    start1.applyMatrix (new THREE.Matrix4().makeTranslation (0, -2, 90));
    start1.receiveShadow = true;
    start1.autoUpdateMatrix = false;
    this.map.push(start1);
    ++this.map_size;

    var floor1 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 0, 500, 1, 1, 1), matBase2, 0);
    floor1.applyMatrix (new THREE.Matrix4().makeTranslation (0, 150, 95));
    floor1.receiveShadow = true;
    floor1.autoUpdateMatrix = false;
    this.map.push(floor1);
    ++this.map_size;

    var garden1 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 2, 350, 1, 1, 1), matBase, 0);
    garden1.applyMatrix (new THREE.Matrix4().makeTranslation (0, -4, -300));
    garden1.receiveShadow = true;
    garden1.autoUpdateMatrix = false;
    this.map.push(garden1);
    ++this.map_size;

    var enemies3 = new Physijs.BoxMesh (new THREE.BoxGeometry (210, 2, 200, 1, 1, 1), mat, 0);
    enemies3.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, 220));
    enemies3.receiveShadow = true;
    enemies3.autoUpdateMatrix = false;
    this.map.push(enemies3);
    ++this.map_size;

    var bullets3 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 0.0, 50, 1, 1, 1), mat, 0);
    bullets3.applyMatrix (new THREE.Matrix4().makeTranslation (0, -10, 0));
    bullets3.receiveShadow = false;
    bullets3.autoUpdateMatrix = false;
    this.map.push(bullets3);
    ++this.map_size;

    var fenceS4 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 300, 20, 1, 1, 1), mat, 0);
    fenceS4.applyMatrix (new THREE.Matrix4().makeTranslation (0, 2.5, 320));
    fenceS4.receiveShadow = true;
    fenceS4.autoUpdateMatrix = false;
    this.map.push(fenceS4);
    ++this.map_size;

    var fotoPerfil = new Physijs.BoxMesh (new THREE.BoxGeometry (80, 100, 1, 1, 1, 1), matFoto1, 0);
    fotoPerfil.applyMatrix (new THREE.Matrix4().makeTranslation (0, 50, 310.2));
    fotoPerfil.receiveShadow = true;
    fotoPerfil.autoUpdateMatrix = false;
    this.map.push(fotoPerfil);
    ++this.map_size;

    var WallIntro1 = new Physijs.BoxMesh (new THREE.BoxGeometry (180, 80, 1, 1, 1, 1), matIntro1, 0);
    WallIntro1.applyMatrix (new THREE.Matrix4().makeTranslation (140, 50, 310.2));
    WallIntro1.receiveShadow = true;
    WallIntro1.autoUpdateMatrix = false;
    this.map.push(WallIntro1);
    ++this.map_size;

    var fenceE5 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 300, 250, 1, 1, 1), mat, 0);
    fenceE5.applyMatrix (new THREE.Matrix4().makeTranslation (320, 2.5, -250));
    fenceE5.receiveShadow = true;
    fenceE5.autoUpdateMatrix = false;
    this.map.push(fenceE5);
    ++this.map_size;

    var fenceE52 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 300, 50, 1, 1, 1), mat, 0);
    fenceE52.applyMatrix (new THREE.Matrix4().makeTranslation (320, 2.5, 300));
    fenceE52.receiveShadow = true;
    fenceE52.autoUpdateMatrix = false;
    this.map.push(fenceE52);
    ++this.map_size;

    var fenceE53 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 10, 450, 1, 1, 1), mat, 0);
    fenceE53.applyMatrix (new THREE.Matrix4().makeTranslation (320, 2.5, 100));
    fenceE53.receiveShadow = true;
    fenceE53.autoUpdateMatrix = false;
    this.map.push(fenceE53);
    ++this.map_size;

    var fenceE54 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 50, 450, 1, 1, 1), mat, 0);
    fenceE54.applyMatrix (new THREE.Matrix4().makeTranslation (320, 150, 100));
    fenceE54.receiveShadow = true;
    fenceE54.autoUpdateMatrix = false;
    this.map.push(fenceE54);
    ++this.map_size;

    var fenceW6 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 300, 650, 1, 1, 1), mat, 0);
    fenceW6.applyMatrix (new THREE.Matrix4().makeTranslation (-320, 2.5, 0));
    fenceW6.receiveShadow = true;
    fenceW6.autoUpdateMatrix = false;
    this.map.push(fenceW6);
    ++this.map_size;

    var fenceN7 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 300, 8, 1, 1, 1), mat, 0);
    fenceN7.applyMatrix (new THREE.Matrix4().makeTranslation (0, 2.5, -320));
    fenceN7.receiveShadow = true;
    fenceN7.autoUpdateMatrix = false;
    this.map.push(fenceN7);
    ++this.map_size;

    var support1 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 4, 8, 1, 1, 1), mat2, 0);
    support1.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, -155));
    support1.receiveShadow = true;
    support1.autoUpdateMatrix = false;
    this.map.push(support1);
    ++this.map_size;

    var support2 = new Physijs.BoxMesh (new THREE.BoxGeometry (620, 4, 8, 1, 1, 1), mat2, 0);
    support2.applyMatrix (new THREE.Matrix4().makeTranslation (0, 150, -155));
    support2.receiveShadow = true;
    support2.autoUpdateMatrix = false;
    this.map.push(support2);
    ++this.map_size;

    var support3 = new Physijs.BoxMesh (new THREE.BoxGeometry (4, 300, 8, 1, 1, 1), mat2, 0);
    support3.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, -155));
    support3.receiveShadow = true;
    support3.autoUpdateMatrix = false;
    this.map.push(support3);
    ++this.map_size;

    var support4 = new Physijs.BoxMesh (new THREE.BoxGeometry (4, 300, 8, 1, 1, 1), mat2, 0);
    support4.applyMatrix (new THREE.Matrix4().makeTranslation (-310, 0, -155));
    support4.receiveShadow = true;
    support4.autoUpdateMatrix = false;
    this.map.push(support4);
    ++this.map_size;

    var support5 = new Physijs.BoxMesh (new THREE.BoxGeometry (4, 300, 8, 1, 1, 1), mat2, 0);
    support5.applyMatrix (new THREE.Matrix4().makeTranslation (310, 0, -155));
    support5.receiveShadow = true;
    support5.autoUpdateMatrix = false;
    this.map.push(support5);
    ++this.map_size;

    var support6 = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 300, 4, 1, 1, 1), mat2, 0);
    support6.applyMatrix (new THREE.Matrix4().makeTranslation (320, 150, 274));
    support6.receiveShadow = true;
    support6.autoUpdateMatrix = false;
    this.map.push(support6);
    ++this.map_size;

    var support7 = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 300, 4, 1, 1, 1), mat2, 0);
    support7.applyMatrix (new THREE.Matrix4().makeTranslation (320, 150, -124));
    support7.receiveShadow = true;
    support7.autoUpdateMatrix = false;
    this.map.push(support7);
    ++this.map_size;

    var support8 = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 300, 4, 1, 1, 1), mat2, 0);
    support8.applyMatrix (new THREE.Matrix4().makeTranslation (320, 150, 80));
    support8.receiveShadow = true;
    support8.autoUpdateMatrix = false;
    this.map.push(support8);
    ++this.map_size;

    var support9 = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 4, 410, 1, 1, 1), mat2, 0);
    support9.applyMatrix (new THREE.Matrix4().makeTranslation (320, 124, 70));
    support9.receiveShadow = true;
    support9.autoUpdateMatrix = false;
    this.map.push(support9);
    ++this.map_size;

    var support10 = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 4, 410, 1, 1, 1), mat2, 0);
    support10.applyMatrix (new THREE.Matrix4().makeTranslation (320, 8, 70));
    support10.receiveShadow = true;
    support10.autoUpdateMatrix = false;
    this.map.push(support10);
    ++this.map_size;

    var mountain = new Physijs.CylinderMesh (new THREE.CylinderGeometry (50, 700, 50, 10, 10), matBase, 0);
    mountain.applyMatrix (new THREE.Matrix4().makeTranslation (0, -40, -50));
    mountain.receiveShadow = true;
    mountain.autoUpdateMatrix = false;
    this.map.push(mountain);
    ++this.map_size;

    return this;
  }

  getMap(i) {
    return this.map[i];
  }

  getMapSize() {
    return this.map_size;
  }
}
