// // locomotive js - smootg scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });


// // gsap to animate
// // shery js to animate imagea accordingly

console.clear();
var Stage = /** @class */  (function () {
    function Stage() {
        // container
        var _this = this;
        this.render = function () {
            this.renderer.render(this.scene, this.camera);
        };
        this.add = function (elem) {
            this.scene.add(elem);
        };
        this.remove = function (elem){
            this.scene.remove(elem);
        };
        this.container = document.getElementById('game');
        // renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: flase
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor('#D0CBC7', 1);
        this.container.appendChild(this.renderer,domElement);
        // scene
        this.scene = new THREE.Scene();
        //camera
        var aspect = window.innerWidth / window.innerHeight;
        var d = 20;
        this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, -100, 1000);
        this.camera.position.x = 2;
        this.camera.position.y = 2;
        this.camera.position.z = 2; 
        this.camera.lookAt(new THREE.Vector3(0, 0, 0))   
        //light
        this.light = new THREE.Directiona(0xffffff, 0.5);
        this.light.position.set(0, 449, 0);
        this.scene.add(this.light);
        this.softKight = new THREE.AmbientLight(0xffffff, 0.4);
        window.addEventListener('resize', function () {return _this.onrize() });
}
 Stage.prototype.setCamera = function(y, speed) {
    if (speed === void 0) { speed = 0.3; }
    TweenLite.to(this.camera.position, speed, { y: y + 4, ease: power1.easeInOut });
    TweenLite.to(this.camera.lookAt, speed, { y: y, ease: power1.easeInOut });
 }
  Stage.prototype.onResize = function () {
    var viewsize = 30;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.left = window.innerWidth / -viewsize;
    this.camera.right = window.innerWidth / -viewsize;
    this.camera.top = window.innerWidth / -viewsize;
    this.camera.bottom = window.innerWidth / -viewsize;
    this.camera.updateprojectionMatrix();
  };
  return Stage;
}());
var Block = /** @class */ (function () {
    function Block(block) {
        //set size an position
        this.STATES = {ACTIVE: 'active', STOPPED: 'stopped', MSSED: 'missed' };
        this.MOVE_AMOUT = 12;
        this.dimenion =  {width: 0, height: 0, depth: 0 };
        this.position = { x: 0, y: 0, z: 0 };
        this.tragetBlock = block;
        this.index = (this.tragetBlock ? this.tragetBlock.index : 0) + 1;
        this.workingplane = this.index % 2 ? 'x' : 'z';
        this.workingDimension = this.index % 2 ? 'width' : 'depth';
        // set the dimensions from the traget block, or defults
        this.dimenion.width = this.tragetBlock ? this.tragetBlock.dimension.width : 10;
        this.dimension.height = this.tragetBlock ? this.tragetBlock.dimenion.height : 2;
        this.dimension.depth = this.tragetBlock ? this.tragetBlock.dimension.depth : 10;
        this.position.x = this.tragetBlock ? this.tragetBlock.position.x : 0;
        this.position.y = this.dimenion.height * this.index;
         this.position.z = this.tragetBlock ? this.tragetBlock.position.z : 0;
          this.colorOffset = this.tragetBlock ? this.tragetBlock.colorOffset : Math.round(Math.round) * 100;
          // set color
          if (!this.tragetBlock) {
            this.color = 0x333344;
          }
          else {
            var offset = this.index = this.STATES.ACTIVE 
                  }

    }
})