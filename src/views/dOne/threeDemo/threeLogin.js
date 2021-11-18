import React from "react";
import * as THREE from "three";
import { Scene } from "three";

export default class ThreeLoginTwo extends React.Component{
    //声明相机
    camera = null;
    //声明场景
    scene = null;
    //声明渲染器
    renderer = null;
    // 生成网格
    mesh = null;
    //盒模型的深度
    depth  = null;
    // 声明容器
    // container=null;
    render(){
        return(
            <div>
                <div id="container" style={{ height: "600px" }}></div>
            </div>
        )
    }

    init=()=>{
        //创建场景

        let container=document.getElementById('container');
        this.scene =new THREE.Scene();
        //在场景中添加雾的效果，fog的参数分别代表了  雾的颜色 开始雾化的视线距离，刚好雾化至看不见的距离
        this.scene.fog =new THREE.Fog(0x000000,0,10000);
        //h额模型的深度
        this.depth=1400;
        // 在场景中添加一个源球盒模型
        // 创建一个立方体
        this.geometry =new THREE.BoxGeometry(100,800,this.depth);
        //加载纹理
        this.texture=new THREE.TextureLoader().load('bg.png');
        //创建网格材质
        this.material = new THREE.MeshBasicMaterial({map:this.texture,side:THREE.BackSide});
        //生成网格
        this.mesh =new THREE.Mesh(this.geometry,this.material);
        //放入场景之中
        this.scene.add(this.mesh);
       
       
       //创建光源的例子
       //1 创建环境光
       const ambientLight = new THREE.AmbientLight(0xffffff,1);
       // 2 创建点光源 位于场景右下角
       const light_rightBottom = new THREE.PointLight(0x0655fd,5,0);
        light_rightBottom.position.set(0,100,-200);
       //3 把光源放入场景中
       this.scene.add(light_rightBottom);
       this.scene.add(ambientLight);
       

        /**
         * 为了避免边缘变形，这里将fov角度设置小一些，距离拉远一些
         * 固定视域角度，求需要多少距离才能满足完整的视野画面
         * 15度等于(Math.PI / 12)
         */
        const width=container.clientWidth;
        const height=container.clientHeight;
        const fov =15
        this.distance =width/2/Math.tan(Math.PI/12);
        this.zAxisNumber = Math.floor( this.distance - this.depth / 2)
        this.camera = new THREE.PerspectiveCamera(fov, width / height, 1, 30000)
        this.camera.position.set(0, 0,  this.zAxisNumber);
        this.cameraTarget = new THREE.Vector3(0, 0, 0)
        this.camera.lookAt( this.cameraTarget);
       
       
        //渲染
        this.renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
        //设置宽高
        this.renderer.setSize(width,height);
        //挂载
        container.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera)
    }
    componentDidMount(){
        this.init()
    }

}