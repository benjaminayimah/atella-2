<template>
    <section id="banner" ref="banner" class="relative">
      <div class="loading absolute" v-if="!modelLoaded">Loading...</div>
        <a href="https://affinityws.com/atelleweb" class="a-button button-primary br-32 btn-lng scale-in absolute">Back</a>
        <button @click="$store.commit('openCostModal')" class="button-secondary br-32 gap-8">
            Real cost of buying an Atella
            <span class="centered br-24">
                <svg xmlns="http://www.w3.org/2000/svg" height="11.154" viewBox="0 0 5.635 11.154">
                    <path id="Vector" d="M1.26,12.077a.577.577,0,0,1-.408-.985L4.968,6.976a.674.674,0,0,0,0-.952L.852,1.908a.577.577,0,0,1,.816-.816L5.784,5.208a1.829,1.829,0,0,1,0,2.584L1.668,11.908A.575.575,0,0,1,1.26,12.077Z" transform="translate(-0.683 -0.923)"></path>
                </svg>
            </span>
        </button>
    </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'BannerScene',
  props: ['rotation', 'zoom'],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      modelLoaded: false,
      model: null,
    };
  },
  watch: {
    rotation(newRotation) {
      if (this.modelLoaded && this.model) {
        this.model.rotation.y = newRotation / 180 * Math.PI;
      }
    },
    zoom(newZoom) {
      if (this.modelLoaded && this.model) {
        this.camera.position.z = newZoom
      }
    },
  },
  methods: {
    init3DScene() {
      const container = this.$refs.banner;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(40, containerWidth / containerHeight, 1, 5000);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(containerWidth, containerHeight);
      this.renderer.setClearColor(0xF5F3F1);

      container.appendChild(this.renderer.domElement);

      this.camera.position.x = 2;
      this.camera.position.y = 3;
      this.camera.position.z = this.zoom;

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.update();

      const directionalLight = new THREE.DirectionalLight(0x999999, 1);
      directionalLight.position.set(0, 100, 100);
      directionalLight.castShadow = true;
      directionalLight.intensity = 1.5;
      this.scene.add(directionalLight);

      // Add more lights or elements to the scene if needed
      let light2 = new THREE.PointLight(0xffffff, 10);
        light2.position.set(50, 10, 0);
        light2.intensity = 1.5; 
        this.scene.add(light2);

        let light3 = new THREE.PointLight(0xffffff, 10);
        light3.position.set(0, 100, -500);
        light3.intensity = 1.5; 
        this.scene.add(light3);
    },
    loadModel() {
      const loader = new GLTFLoader();

      loader.load('scene.gltf', (gltf) => {
        this.model = gltf.scene;
        this.model.rotation.y = this.rotation / 180 * Math.PI;

        this.scene.add(this.model);

        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        this.model.position.sub(center);

        this.modelLoaded = true;

        this.animate();
      });
    },
    observeContainerResize() {
      const container = this.$refs.banner;
      const observer = new ResizeObserver((entries) => {
        if (entries.length > 0) {
          const { width, height } = entries[0].contentRect;
          this.handleContainerResize(width, height);
        }
      });

      observer.observe(container);
    },
    handleContainerResize(width, height) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.controls.update();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init3DScene();
    this.loadModel();
    this.observeContainerResize();
  }
};

</script>

<style lang="scss" scoped>
.loading{
  inset: 50% auto auto 50%;
  transform: translateX(-50%);
}
#banner {
    height: 50dvh;
    background-color: #F5F3F1;
    cursor: grab;
    position: sticky;
    top: 0;
    z-index: 10;

}
canvas {
    height: 100%;
    width: 100%;
}
.button-primary{
    inset: 50px auto auto 80px;
    background-color: #fff;
    color: #000;
}
.button-secondary{
    padding: 14px 18px 14px 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    color: #000;
    span{
      background-color: #fff;
      padding: 8px 24px;
    }
    
}
@media screen and (max-width: 900px){
  .button-primary{
    inset: 30px auto auto 20px;
    padding: 8px 24px;
    height: 40px;
    font-size: 0.91rem;

  }
  .button-secondary {
    padding: 7px 7px 7px 14px;
    font-size: 0.91rem;
    span{
      padding: 8px 16px;
    }
  }
}
</style>