import React from "react";
import * as THREE from "three";
import { Scene } from "three";

export default class ThreeLoginTwo extends React.Component{
    camera = null;
    scene = null;
    renderer = null;
    mesh = null;
    depth  = null;
    render(){
        return(
            <div>
                <div id="container" style={{ height: "600px" }}></div>
            </div>
        )
    }

    init=()=>{
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
        //渲染
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        //设置宽高
        this.renderer.setSize(container.clientWidth,container.clientHeight);
        //挂载
        container.appendChild(this.renderer.domElement)
    }
    componentDidMount(){
        this.init()
    }

}