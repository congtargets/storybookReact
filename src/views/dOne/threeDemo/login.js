import React from "react";
import * as Three from "three";
import { Scene } from "three";

export default class ThreeLogin extends React.Compontent {
  camera = null;
  scene = null;
  renderer = null;
  mesh = null;

  render() {
    return (
      <div>
        <div id="container" style={{ height: "600px" }}></div>
      </div>
    );
  }
  init = () => {
    // 初始化相机，场景相关
    let container = document.getElementById("container");
    this.scene = new Scene();
    this.camera = new Three.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.01,
      1000
    );
    this.renderer = new Three.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(new Three.Color(0x000000));
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    let axes = new Three.AxesHelper(20);
    this.scene.add(axes);
    const planeGeometry = new Three.PlaneGeometry(60, 20);
    const planMaterial = new Three.MeshBasicMaterial({
      color: 0x000000,
    });
    let plan = new Three.Mesh(planeGeometry, planMaterial);
    plan.rotation.x = -0.5 * Math.PI;
    plan.position.set(15, 0, 0);
    this.scene.add(plan);

    //#region 增加一个cube 相机
    const cubeGeometry = new Three.BoxGeometry(4, 4, 4);
    let cubeMaterial = new Three.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });

    let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    this.scene.add(cube);
    //#endregion

    //#region  add  a sphere  增加一个几何体
    let sphereGeometry = new Three.SphereGeometry(4, 20, 20);
    let sphereMaterial = new Three.MeshBasicMaterial({
      color: 0x777ff,
      wireframe: true,
    });
    let sphere = new Three.Mesh(sphereGeometry, sphereMaterial);
    // position the sphere
    sphere.position.set(20, 4, 2);
    //add the sphere to the scene
    this.scene.add(sphere);
    // position and point the camera to the center of the scene
    this.camera.position.set(-30, 40, 30);
    this.camera.lookAt(this.scene.position);
    //#endregion

    // this.camera.position.z = 0.6;
    // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
    // let material = new Three.MeshNormalMaterial();
    // this.mesh = new Three.Mesh(geometry, material);
    // this.scene.add(this.mesh);

    container.appendChild(this.renderer.domElement);
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  };
  componentDidMount() {
    this.init();
    this.animate();
  }
}
