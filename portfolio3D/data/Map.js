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
    var texturaBase = loader.load("imgs/piedras.jpg");
    var texturaWood = loader.load("imgs/wood.jpg");
    var foto1 = loader.load("imgs/foto1.jpg");
    var intro1 = loader.load("imgs/intro1.fw.png");
    var intro11 = loader.load("imgs/intro11.jpg");
    var intro111 = loader.load("imgs/intro111.png");
    var intro2 = loader.load("imgs/intro2.fw.png");
    var intro22 = loader.load("imgs/intro22.jpg");
    var intro222 = loader.load("imgs/intro222.png");
    var intro3 = loader.load("imgs/intro3.fw.png");
    var intro33 = loader.load("imgs/intro33.jpg");
    var intro333 = loader.load("imgs/intro333.fw.png");
    var intro4 = loader.load("imgs/intro4.png");
    var intro44 = loader.load("imgs/intro44.jpg");
    var intro444 = loader.load("imgs/intro444.fw.png");
    var intro5 = loader.load("imgs/intro5a.fw.png");
    var intro55 = loader.load("imgs/intro55.jpg");
    var intro555 = loader.load("imgs/intro555.fw.png");
    var intro66 = loader.load("imgs/intro66.jpg");
    var intro666 = loader.load("imgs/intro666.fw.png");

    var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0xEEEEEE}),0,0);
    var mat2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0x505050}),0,0);
    var matBase = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaBase}),0,0);
    var matBase2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaWood}),0,0);
    var matFoto1 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: foto1}),0,0);
    var matIntro1 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro1, alphaTest: 0.5}),0,0);
    var matIntro11 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro11}),0,0);
    var matIntro111 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro111, alphaTest: 0.5}),0,0);
    var matIntro2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro2, alphaTest: 0.5}),0,0);
    var matIntro22 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro22}),0,0);
    var matIntro222 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro222, alphaTest: 0.5}),0,0);
    var matIntro3 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro3, alphaTest: 0.5}),0,0);
    var matIntro33 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro33}),0,0);
    var matIntro333 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro333, alphaTest: 0.5}),0,0);
    var matIntro4 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro4, alphaTest: 0.5}),0,0);
    var matIntro44 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro44}),0,0);
    var matIntro444 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro444, alphaTest: 0.5}),0,0);
    var matIntro5 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro5, alphaTest: 0.5}),0,0);
    var matIntro55 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro55}),0,0);
    var matIntro555 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro555, alphaTest: 0.5}),0,0);
    var matIntro66 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro66}),0,0);
    var matIntro666 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: intro666, alphaTest: 0.5}),0,0);


    var matConectorIntro1 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0x016DD9}),0,0);
    var matConectorIntro2 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0x018C49}),0,0);
    var matConectorIntro3 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0xFF7F00}),0,0);
    var matConectorIntro4 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0xFF0000}),0,0);
    var matConectorIntro5 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0x444444}),0,0);
    var matConectorIntro6 = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0x7F00FF}),0,0);
    var sofa = Physijs.createMaterial(new THREE.MeshPhongMaterial ({color: 0xBBBBBB}),0,0);
    
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

    var sofa1 = new Physijs.BoxMesh (new THREE.BoxGeometry (35, 26, 100, 1, 1, 1), sofa, 0);
    sofa1.applyMatrix (new THREE.Matrix4().makeTranslation (190, 0, 0));
    sofa1.receiveShadow = true;
    sofa1.autoUpdateMatrix = false;
    this.map.push(sofa1);
    ++this.map_size;

    var sofa11 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 25, 100, 1, 1, 1), sofa, 0);
    sofa11.applyMatrix (new THREE.Matrix4().makeTranslation (175, 15, 0));
    sofa11.receiveShadow = true;
    sofa11.autoUpdateMatrix = false;
    this.map.push(sofa11);
    ++this.map_size;

    var sofa2 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 26, 35, 1, 1, 1), sofa, 0);
    sofa2.applyMatrix (new THREE.Matrix4().makeTranslation (250, 0, 80));
    sofa2.receiveShadow = true;
    sofa2.autoUpdateMatrix = false;
    this.map.push(sofa2);
    ++this.map_size;

    var sofa22 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 25, 10, 1, 1, 1), sofa, 0);
    sofa22.applyMatrix (new THREE.Matrix4().makeTranslation (250, 15, 95));
    sofa22.receiveShadow = true;
    sofa22.autoUpdateMatrix = false;
    this.map.push(sofa22);
    ++this.map_size;

    // base escritorio
    var desk = new Physijs.BoxMesh (new THREE.BoxGeometry (120, 2, 30, 1, 1, 1), mat, 0);
    desk.applyMatrix (new THREE.Matrix4().makeTranslation (220, 20, 200));
    desk.receiveShadow = true;
    desk.autoUpdateMatrix = false;
    this.map.push(desk);
    ++this.map_size;

    // pata escritorio
    var deskA = new Physijs.BoxMesh (new THREE.BoxGeometry (2, 40, 30, 1, 1, 1), mat, 0);
    deskA.applyMatrix (new THREE.Matrix4().makeTranslation (279, 0, 200));
    deskA.receiveShadow = true;
    deskA.autoUpdateMatrix = false;
    this.map.push(deskA);
    ++this.map_size;

    // pataescritorio
    var deskB = new Physijs.BoxMesh (new THREE.BoxGeometry (2, 40, 30, 1, 1, 1), mat, 0);
    deskB.applyMatrix (new THREE.Matrix4().makeTranslation (161, 0, 200));
    deskB.receiveShadow = true;
    deskB.autoUpdateMatrix = false;
    this.map.push(deskB);
    ++this.map_size;

    // silla
    var deskC = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), mat, 0);
    deskC.applyMatrix (new THREE.Matrix4().makeTranslation (245, 0, 175));
    deskC.receiveShadow = true;
    deskC.autoUpdateMatrix = false;
    this.map.push(deskC);
    ++this.map_size;

    // pantalla 1
    var deskD = new Physijs.BoxMesh (new THREE.BoxGeometry (30, 20, 1, 1, 1, 1), matConectorIntro5, 0);
    deskD.applyMatrix (new THREE.Matrix4().makeTranslation (260, 33, 210));
    deskD.receiveShadow = true;
    deskD.autoUpdateMatrix = false;
    this.map.push(deskD);
    ++this.map_size;

    // pantalla 2
    var deskE = new Physijs.BoxMesh (new THREE.BoxGeometry (30, 20, 1, 1, 1, 1), matConectorIntro5, 0);
    deskE.applyMatrix (new THREE.Matrix4().makeTranslation (229, 33, 210));
    deskE.receiveShadow = true;
    deskE.autoUpdateMatrix = false;
    this.map.push(deskE);
    ++this.map_size;

    // teclado
    var deskF = new Physijs.BoxMesh (new THREE.BoxGeometry (25, 2, 8, 1, 1, 1), matConectorIntro5, 0);
    deskF.applyMatrix (new THREE.Matrix4().makeTranslation (245, 21, 195));
    deskF.receiveShadow = true;
    deskF.autoUpdateMatrix = false;
    this.map.push(deskF);
    ++this.map_size;

    // mouse
    var deskG = new Physijs.BoxMesh (new THREE.BoxGeometry (3, 2, 5, 1, 1, 1), matConectorIntro5, 0);
    deskG.applyMatrix (new THREE.Matrix4().makeTranslation (230, 21, 195));
    deskG.receiveShadow = true;
    deskG.autoUpdateMatrix = false;
    this.map.push(deskG);
    ++this.map_size;
    

    // torre
    var deskH = new Physijs.BoxMesh (new THREE.BoxGeometry (8, 35, 25, 1, 1, 1), matConectorIntro5, 0);
    deskH.applyMatrix (new THREE.Matrix4().makeTranslation (210, 0, 200));
    deskH.receiveShadow = true;
    deskH.autoUpdateMatrix = false;
    this.map.push(deskH);
    ++this.map_size;

    // pantalla laptop
    var deskI = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 12, 1, 1, 1, 1), matConectorIntro5, 0);
    deskI.applyMatrix (new THREE.Matrix4().makeTranslation (200, 28, 205));
    deskI.receiveShadow = true;
    deskI.autoUpdateMatrix = false;
    this.map.push(deskI);
    ++this.map_size;

    // teclado laptop
    var deskJ = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 2, 12, 1, 1, 1), matConectorIntro5, 0);
    deskJ.applyMatrix (new THREE.Matrix4().makeTranslation (200, 21, 199));
    deskJ.receiveShadow = true;
    deskJ.autoUpdateMatrix = false;
    this.map.push(deskJ);
    ++this.map_size;

    // cama base
    var bed = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 60, 1, 1, 1), mat, 0);
    bed.applyMatrix (new THREE.Matrix4().makeTranslation (-240, 0, 200));
    bed.receiveShadow = true;
    bed.autoUpdateMatrix = false;
    this.map.push(bed);
    ++this.map_size;

    // cama almohada A
    var bedA = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 25, 25, 1, 1, 1), sofa, 0);
    bedA.applyMatrix (new THREE.Matrix4().makeTranslation (-275, 0, 215));
    bedA.receiveShadow = true;
    bedA.autoUpdateMatrix = false;
    this.map.push(bedA);
    ++this.map_size;

    // cama almohada B
    var bedB = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 25, 25, 1, 1, 1), sofa, 0);
    bedB.applyMatrix (new THREE.Matrix4().makeTranslation (-275, 0, 185));
    bedB.receiveShadow = true;
    bedB.autoUpdateMatrix = false;
    this.map.push(bedB);
    ++this.map_size;

    // cama mesa noche
    var bedC = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 25, 30, 1, 1, 1), sofa, 0);
    bedC.applyMatrix (new THREE.Matrix4().makeTranslation (-275, 0, 250));
    bedC.receiveShadow = true;
    bedC.autoUpdateMatrix = false;
    this.map.push(bedC);
    ++this.map_size;

    var table1 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 26, 35, 1, 1, 1), mat, 0);
    table1.applyMatrix (new THREE.Matrix4().makeTranslation (250, 0, 0));
    table1.receiveShadow = true;
    table1.autoUpdateMatrix = false;
    this.map.push(table1);
    ++this.map_size;

    var table2 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 3, 100, 1, 1, 1), mat, 0);
    table2.applyMatrix (new THREE.Matrix4().makeTranslation (0, 25, 0));
    table2.receiveShadow = true;
    table2.autoUpdateMatrix = false;
    this.map.push(table2);
    ++this.map_size;

    var table22 = new Physijs.BoxMesh (new THREE.BoxGeometry (25, 50, 50, 1, 1, 1), mat, 0);
    table22.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, 0));
    table22.receiveShadow = true;
    table22.autoUpdateMatrix = false;
    this.map.push(table22);
    ++this.map_size;

    var tablec1 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec1.applyMatrix (new THREE.Matrix4().makeTranslation (33, 0, 33));
    tablec1.receiveShadow = true;
    tablec1.autoUpdateMatrix = false;
    this.map.push(tablec1);
    ++this.map_size;

    var tablec2 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec2.applyMatrix (new THREE.Matrix4().makeTranslation (33, 0, 0));
    tablec2.receiveShadow = true;
    tablec2.autoUpdateMatrix = false;
    this.map.push(tablec2);
    ++this.map_size;

    var tablec3 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec3.applyMatrix (new THREE.Matrix4().makeTranslation (33, 0, -33));
    tablec3.receiveShadow = true;
    tablec3.autoUpdateMatrix = false;
    this.map.push(tablec3);
    ++this.map_size;

    var tablec4 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec4.applyMatrix (new THREE.Matrix4().makeTranslation (-33, 0, 33));
    tablec4.receiveShadow = true;
    tablec4.autoUpdateMatrix = false;
    this.map.push(tablec4);
    ++this.map_size;

    var tablec5 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec5.applyMatrix (new THREE.Matrix4().makeTranslation (-33, 0, 0));
    tablec5.receiveShadow = true;
    tablec5.autoUpdateMatrix = false;
    this.map.push(tablec5);
    ++this.map_size;

    var tablec6 = new Physijs.BoxMesh (new THREE.BoxGeometry (10, 35, 10, 1, 1, 1), sofa, 0);
    tablec6.applyMatrix (new THREE.Matrix4().makeTranslation (-33, 0, -33));
    tablec6.receiveShadow = true;
    tablec6.autoUpdateMatrix = false;
    this.map.push(tablec6);
    ++this.map_size;


    // mesa TV
    var tv1 = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 3, 100, 1, 1, 1), mat, 0);
    tv1.applyMatrix (new THREE.Matrix4().makeTranslation (-100, 10, 0));
    tv1.receiveShadow = true;
    tv1.autoUpdateMatrix = false;
    this.map.push(tv1);
    ++this.map_size;

    // pata TV
    var tvA = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 20, 3, 1, 1, 1), mat, 0);
    tvA.applyMatrix (new THREE.Matrix4().makeTranslation (-100, 0, 48.5));
    tvA.receiveShadow = true;
    tvA.autoUpdateMatrix = false;
    this.map.push(tvA);
    ++this.map_size;

    // pata TV
    var tvB = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 20, 3, 1, 1, 1), mat, 0);
    tvB.applyMatrix (new THREE.Matrix4().makeTranslation (-100, 0, -48.5));
    tvB.receiveShadow = true;
    tvB.autoUpdateMatrix = false;
    this.map.push(tvB);
    ++this.map_size;

    // TV
    var tvC = new Physijs.BoxMesh (new THREE.BoxGeometry (1, 40, 70, 1, 1, 1), mat2, 0);
    tvC.applyMatrix (new THREE.Matrix4().makeTranslation (-100, 28, 0));
    tvC.receiveShadow = true;
    tvC.autoUpdateMatrix = false;
    this.map.push(tvC);
    ++this.map_size;

    // puff TV
    var tvD = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 10, 20, 1, 1, 1), sofa, 0);
    tvD.applyMatrix (new THREE.Matrix4().makeTranslation (-220, 0, 0));
    tvD.receiveShadow = true;
    tvD.autoUpdateMatrix = false;
    this.map.push(tvD);
    ++this.map_size;

    // puff TV
    var tvE = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 10, 20, 1, 1, 1), sofa, 0);
    tvE.applyMatrix (new THREE.Matrix4().makeTranslation (-220, 0, 30));
    tvE.receiveShadow = true;
    tvE.autoUpdateMatrix = false;
    this.map.push(tvE);
    ++this.map_size;

    // puff TV
    var tvE = new Physijs.BoxMesh (new THREE.BoxGeometry (20, 10, 20, 1, 1, 1), sofa, 0);
    tvE.applyMatrix (new THREE.Matrix4().makeTranslation (-220, 0, -30));
    tvE.receiveShadow = true;
    tvE.autoUpdateMatrix = false;
    this.map.push(tvE);
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

    var fotoPerfil = new Physijs.BoxMesh (new THREE.BoxGeometry (57, 80, 1, 1, 1, 1), matFoto1, 0);
    fotoPerfil.applyMatrix (new THREE.Matrix4().makeTranslation (0, 50, 310.2));
    fotoPerfil.receiveShadow = true;
    fotoPerfil.autoUpdateMatrix = false;
    this.map.push(fotoPerfil);
    ++this.map_size;

    // stage1
    var WallIntro1 = new Physijs.BoxMesh (new THREE.BoxGeometry (120, 50, 1, 1, 1, 1), matIntro1, 0);
    WallIntro1.applyMatrix (new THREE.Matrix4().makeTranslation (130, 45, 310.2));
    WallIntro1.receiveShadow = true;
    WallIntro1.autoUpdateMatrix = false;
    this.map.push(WallIntro1);
    ++this.map_size;

    var WallIntro11 = new Physijs.BoxMesh (new THREE.BoxGeometry (50, 130, 80, 1, 1, 1), matIntro11, 0);
    WallIntro11.applyMatrix (new THREE.Matrix4().makeTranslation (220, 70, 337.5));
    WallIntro11.receiveShadow = true;
    WallIntro11.autoUpdateMatrix = false;
    this.map.push(WallIntro11);
    ++this.map_size;

    var WallIntro111 = new Physijs.BoxMesh (new THREE.BoxGeometry (120, 25, 40, 1, 1, 1), matIntro111, 0);
    WallIntro111.applyMatrix (new THREE.Matrix4().makeTranslation (130, 100, 329.2));
    WallIntro111.receiveShadow = true;
    WallIntro111.autoUpdateMatrix = false;
    this.map.push(WallIntro111);
    ++this.map_size;

    // stage 2
    var WallIntro2 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 50, 1, 1, 1, 1), matIntro2, 0);
    WallIntro2.applyMatrix (new THREE.Matrix4().makeTranslation (-110, 40, 310.2));
    WallIntro2.receiveShadow = true;
    WallIntro2.autoUpdateMatrix = false;
    this.map.push(WallIntro2);
    ++this.map_size;

    var WallIntro22 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 40, 80, 1, 1, 1), matIntro22, 0);
    WallIntro22.applyMatrix (new THREE.Matrix4().makeTranslation (-110, 110, 337.5));
    WallIntro22.receiveShadow = true;
    WallIntro22.autoUpdateMatrix = false;
    this.map.push(WallIntro22);
    ++this.map_size;

    var WallIntro222 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 1, 1, 1, 1), matIntro222, 0);
    WallIntro222.applyMatrix (new THREE.Matrix4().makeTranslation (-110, 75, 310.2));
    WallIntro222.receiveShadow = true;
    WallIntro222.autoUpdateMatrix = false;
    this.map.push(WallIntro222);
    ++this.map_size;

    // stage 3

    var WallIntro3 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 50, 1, 1, 1, 1), matIntro3, 0);
    WallIntro3.applyMatrix (new THREE.Matrix4().makeTranslation (-230, 80, 310.2));
    WallIntro3.receiveShadow = true;
    WallIntro3.autoUpdateMatrix = false;
    this.map.push(WallIntro3);
    ++this.map_size;

    var WallIntro33 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 40, 80, 1, 1, 1), matIntro33, 0);
    WallIntro33.applyMatrix (new THREE.Matrix4().makeTranslation (-230, 40, 337.5));
    WallIntro33.receiveShadow = true;
    WallIntro33.autoUpdateMatrix = false;
    this.map.push(WallIntro33);
    ++this.map_size;

    var WallIntro333 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 1, 1, 1, 1), matIntro333, 0);
    WallIntro333.applyMatrix (new THREE.Matrix4().makeTranslation (-230, 110, 310.2));
    WallIntro333.receiveShadow = true;
    WallIntro333.autoUpdateMatrix = false;
    this.map.push(WallIntro333);
    ++this.map_size;

    // stage 4

    var WallIntro4 = new Physijs.BoxMesh (new THREE.BoxGeometry (300, 100, 250, 1, 1, 1), matIntro4, 0);
    WallIntro4.applyMatrix (new THREE.Matrix4().makeTranslation (-455, 60, 10));
    WallIntro4.receiveShadow = true;
    WallIntro4.autoUpdateMatrix = false;
    this.map.push(WallIntro4);
    ++this.map_size;

    var WallIntro44 = new Physijs.BoxMesh (new THREE.BoxGeometry (80, 130, 50, 1, 1, 1), matIntro44, 0);
    WallIntro44.applyMatrix (new THREE.Matrix4().makeTranslation (-340, 70, 200));
    WallIntro44.receiveShadow = true;
    WallIntro44.autoUpdateMatrix = false;
    this.map.push(WallIntro44);
    ++this.map_size;

    var WallIntro444 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 100, 1, 1, 1), matIntro444, 0);
    WallIntro444.applyMatrix (new THREE.Matrix4().makeTranslation (-355, 120, 100));
    WallIntro444.receiveShadow = true;
    WallIntro444.autoUpdateMatrix = false;
    this.map.push(WallIntro444);
    ++this.map_size;

    // stage 5

    var WallIntro5 = new Physijs.BoxMesh (new THREE.BoxGeometry (120, 50, 1, 1, 1, 1), matIntro5, 0);
    WallIntro5.applyMatrix (new THREE.Matrix4().makeTranslation (-208, 80, -316));
    WallIntro5.receiveShadow = true;
    WallIntro5.autoUpdateMatrix = false;
    this.map.push(WallIntro5);
    ++this.map_size;
    
    var WallIntro55 = new Physijs.BoxMesh (new THREE.BoxGeometry (150, 40, 80, 1, 1, 1), matIntro55, 0);
    WallIntro55.applyMatrix (new THREE.Matrix4().makeTranslation (-210, 40, -345));
    WallIntro55.receiveShadow = true;
    WallIntro55.autoUpdateMatrix = false;
    this.map.push(WallIntro55);
    ++this.map_size;
    
    var WallIntro555 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 20, 1, 1, 1), matIntro555, 0);
    WallIntro555.applyMatrix (new THREE.Matrix4().makeTranslation (-230, 110, -325));
    WallIntro555.receiveShadow = true;
    WallIntro555.autoUpdateMatrix = false;
    this.map.push(WallIntro555);
    ++this.map_size;

    // stage 6

    var WallIntro6 = new Physijs.BoxMesh (new THREE.BoxGeometry (200, 80, 1, 1, 1, 1), matIntro4, 0);
    WallIntro6.applyMatrix (new THREE.Matrix4().makeTranslation (80, 50, -316));
    WallIntro6.receiveShadow = true;
    WallIntro6.autoUpdateMatrix = false;
    this.map.push(WallIntro6);
    ++this.map_size;
        
    var WallIntro66 = new Physijs.BoxMesh (new THREE.BoxGeometry (40, 130, 80, 1, 1, 1), matIntro66, 0);
    WallIntro66.applyMatrix (new THREE.Matrix4().makeTranslation (-50, 70, -345));
    WallIntro66.receiveShadow = true;
    WallIntro66.autoUpdateMatrix = false;
    this.map.push(WallIntro66);
    ++this.map_size;
        
    var WallIntro666 = new Physijs.BoxMesh (new THREE.BoxGeometry (100, 20, 20, 1, 1, 1), matIntro666, 0);
    WallIntro666.applyMatrix (new THREE.Matrix4().makeTranslation (30, 110, -325));
    WallIntro666.receiveShadow = true;
    WallIntro666.autoUpdateMatrix = false;
    this.map.push(WallIntro666);
    ++this.map_size;


    // CONNECTORS

    var conectorIntro1 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 65, 70, 1, 1, 1), matConectorIntro1, 0);
    conectorIntro1.applyMatrix (new THREE.Matrix4().makeTranslation (55, 80, 337.5));
    conectorIntro1.receiveShadow = true;
    conectorIntro1.autoUpdateMatrix = false;
    this.map.push(conectorIntro1);
    ++this.map_size;

    var conectorIntro11 = new Physijs.BoxMesh (new THREE.BoxGeometry (15, 5, 70, 1, 1, 1), matConectorIntro1, 0);
    conectorIntro11.applyMatrix (new THREE.Matrix4().makeTranslation (60, 45, 337.5));
    conectorIntro11.receiveShadow = true;
    conectorIntro11.autoUpdateMatrix = false;
    this.map.push(conectorIntro11);
    ++this.map_size;

    var conectorIntro111 = new Physijs.BoxMesh (new THREE.BoxGeometry (55, 5, 70, 1, 1, 1), matConectorIntro1, 0);
    conectorIntro111.applyMatrix (new THREE.Matrix4().makeTranslation (30, 110, 337.5));
    conectorIntro111.receiveShadow = true;
    conectorIntro111.autoUpdateMatrix = false;
    this.map.push(conectorIntro111);
    ++this.map_size;

    var conectorIntro2 = new Physijs.BoxMesh (new THREE.BoxGeometry (60, 5, 70, 1, 1, 1), matConectorIntro2, 0);
    conectorIntro2.applyMatrix (new THREE.Matrix4().makeTranslation (-30, 110, 337.5));
    conectorIntro2.receiveShadow = true;
    conectorIntro2.autoUpdateMatrix = false;
    this.map.push(conectorIntro2);
    ++this.map_size;

    var conectorIntro22 = new Physijs.BoxMesh (new THREE.BoxGeometry (60, 5, 70, 1, 1, 1), matConectorIntro2, 0);
    conectorIntro22.applyMatrix (new THREE.Matrix4().makeTranslation (-142.5, 110, 337.5));
    conectorIntro22.receiveShadow = true;
    conectorIntro22.autoUpdateMatrix = false;
    this.map.push(conectorIntro22);
    ++this.map_size;

    var conectorIntro222 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 30, 70, 1, 1, 1), matConectorIntro2, 0);
    conectorIntro222.applyMatrix (new THREE.Matrix4().makeTranslation (-170, 95, 337.5));
    conectorIntro222.receiveShadow = true;
    conectorIntro222.autoUpdateMatrix = false;
    this.map.push(conectorIntro222);
    ++this.map_size;

    var conectorIntro3 = new Physijs.BoxMesh (new THREE.BoxGeometry (150, 5, 70, 1, 1, 1), matConectorIntro3, 0);
    conectorIntro3.applyMatrix (new THREE.Matrix4().makeTranslation (-245, 40, 337.5));
    conectorIntro3.receiveShadow = true;
    conectorIntro3.autoUpdateMatrix = false;
    this.map.push(conectorIntro3);
    ++this.map_size;

    var conectorIntro33 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 40, 70, 1, 1, 1), matConectorIntro3, 0);
    conectorIntro33.applyMatrix (new THREE.Matrix4().makeTranslation (-170, 57.5, 337.5));
    conectorIntro33.receiveShadow = true;
    conectorIntro33.autoUpdateMatrix = false;
    this.map.push(conectorIntro33);
    ++this.map_size;

    var conectorIntro333 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 5, 70, 1, 1, 1), matConectorIntro3, 0);
    conectorIntro333.applyMatrix (new THREE.Matrix4().makeTranslation (-308, 40, 302.5));
    conectorIntro333.receiveShadow = true;
    conectorIntro333.autoUpdateMatrix = false;
    this.map.push(conectorIntro333);
    ++this.map_size;

    var conectorIntro4 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 5, 70, 1, 1, 1), matConectorIntro4, 0);
    conectorIntro4.applyMatrix (new THREE.Matrix4().makeTranslation (-308, 40, 230));
    conectorIntro4.receiveShadow = true;
    conectorIntro4.autoUpdateMatrix = false;
    this.map.push(conectorIntro4);
    ++this.map_size;

    var conectorIntro5 = new Physijs.BoxMesh (new THREE.BoxGeometry (33, 5, 70, 1, 1, 1), matConectorIntro5, 0);
    conectorIntro5.applyMatrix (new THREE.Matrix4().makeTranslation (-120, 100, -345));
    conectorIntro5.receiveShadow = true;
    conectorIntro5.autoUpdateMatrix = false;
    this.map.push(conectorIntro5);
    ++this.map_size;

    var conectorIntro55 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 30, 70, 1, 1, 1), matConectorIntro5, 0);
    conectorIntro55.applyMatrix (new THREE.Matrix4().makeTranslation (-105, 87.5, -345));
    conectorIntro55.receiveShadow = true;
    conectorIntro55.autoUpdateMatrix = false;
    this.map.push(conectorIntro55);
    ++this.map_size;

    var conectorIntro6 = new Physijs.BoxMesh (new THREE.BoxGeometry (35, 5, 70, 1, 1, 1), matConectorIntro6, 0);
    conectorIntro6.applyMatrix (new THREE.Matrix4().makeTranslation (-85, 40, -345));
    conectorIntro6.receiveShadow = true;
    conectorIntro6.autoUpdateMatrix = false;
    this.map.push(conectorIntro6);
    ++this.map_size;

    var conectorIntro66 = new Physijs.BoxMesh (new THREE.BoxGeometry (5, 30, 70, 1, 1, 1), matConectorIntro6, 0);
    conectorIntro66.applyMatrix (new THREE.Matrix4().makeTranslation (-105, 52.5, -345));
    conectorIntro66.receiveShadow = true;
    conectorIntro66.autoUpdateMatrix = false;
    this.map.push(conectorIntro66);
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
