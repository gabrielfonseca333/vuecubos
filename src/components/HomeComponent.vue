<template>
  <div class="container">
        <h1>Home</h1>
        <!-- como hago para que haya espacio entre las columnas? -->
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
  name: 'HomeComponent',
  data() {
    return {
      cubos: []
    }
  },
  mounted() {
    service.getCubos().then(response => {
      console.log(response)
      this.cubos = response
    })
  }
}
</script>

<style>

</style>