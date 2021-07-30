<template>
    <div class="text-left">

       asd
       <div v-html="canvasDom">
         
       </div>
        
    </div>
</template>

<script>
const THREE = require('three') 


export default {
  name: 'workTime',
  props: {
    workDateList:[]
  },
  data() {
      return {
        canvasDom:""
      }
    },
    created(){
        
    },
    mounted(){
      this.init();
    },
    methods:{
       init: function() {
            // var scene = new THREE.Scene();
            // // console.log(scene)
            // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            // var renderer = new THREE.WebGLRenderer();
            // renderer.setSize( window.innerWidth, window.innerHeight );
            // this.canvasDom = renderer.domElement.outerHTML

            // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // var cube = new THREE.Mesh( geometry, material );
            // scene.add( cube );

            // camera.position.z = 5;


            // function animate() {
            //   requestAnimationFrame( animate );
            //   renderer.render( scene, camera );
            //   cube.rotation.x += 0.01;
            //   cube.rotation.y += 0.01;
            // }
            // animate();

        },

    }
}
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
