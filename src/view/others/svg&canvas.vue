<template>
    <div class="text-left">
        svg&canvas
        <div style="width:600px;border:1px solid red;">
          <table>
            <tr>
              <td>ajdj</td>
              <td>ajdjasdhasjdhhdfgdfkgjkdfg</td>
              <td>ajdjasdhasjdhhdfgdfkgjkdfg</td>
              <td>ajdjasdhasjdhhdfgdfkgjkdfg</td>
            </tr>
          </table> 
        </div>
        <div id="container"></div>
    </div>
</template>

<script>
// import { ElMessage } from 'element-plus'
// import * as Three from 'three'
// export default {
//   name: 'workTime',
//   props: {
//     workDateList:[]
//   },
//   data() {
//       return {
//         camera: null,
//         scene: null,
//         renderer: null,
//         mesh: null
//       }
//     },
//     created(){
//         this.init();
//         this.animate()
//     },
//     mounted(){},
//     methods:{
//        init: function() {
//             let container = document.getElementById('container');
    
//             this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
//             this.camera.position.z = 1;
    
//             this.scene = new Three.Scene();
    
//             let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
//             let material = new Three.MeshNormalMaterial();
    
//             this.mesh = new Three.Mesh(geometry, material);
//             this.scene.add(this.mesh);
    
//             this.renderer = new Three.WebGLRenderer({antialias: true});
//             this.renderer.setSize(container.clientWidth, container.clientHeight);
//             container.appendChild(this.renderer.domElement);
    
//         },
//         animate: function() {
//             requestAnimationFrame(this.animate);
//             this.mesh.rotation.x += 0.01;
//             this.mesh.rotation.y += 0.02;
//             this.renderer.render(this.scene, this.camera);
//         }

//     }
// }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  table{
    width: 100%;
    table-layout:fixed;
    tr{
      padding: 4px 6px;
      td{
        white-space:nowrap; 
        overflow:hidden;   
        text-overflow:ellipsis;
        word-break:keep-all; 
        
        border: 1px solid;
        padding: 4px;
      }
    }
  }
</style>
