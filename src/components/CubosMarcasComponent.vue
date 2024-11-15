<template>
  <div class="container">
    <h1>Cubos de Marcas</h1>
    <div class="row">
          <div v-for="cubo in cubos" :key="cubo.idCubo" class="col-md-3 card" width="200px" height="300px">
          <img :src="cubo.imagen" style="width: 100px">
          <h2 class="h2">{{cubo.nombre}}</h2>
          <p><b>Precio: </b> {{cubo.precio}}</p>
          <p><b>Valoracion: </b>{{cubo.valoracion}}</p>
          <router-link class="btn btn-danger" :to="'/detalle/'+cubo.idCubo">Ver</router-link>
          </div>
        </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();
export default {

  data() {
    return {
      nombre: this.$route.params.nombre,
      cubos: []
    }
  },

  mounted() {
    this.loadCubos()

  },

  methods: {
    
    loadCubos() {
      let nombre = this.$route.params.nombre
      service.getCubosMarca(nombre).then(response => {
        console.log(response)
        this.cubos = response
      })
    }

  },

  watch: {
    '$route.params.nombre' (nextVal, oldVal) {
      if(nextVal != oldVal) {
        this.loadCubos();
      }
    }
  }

  

  

}
</script>

<style>

</style>