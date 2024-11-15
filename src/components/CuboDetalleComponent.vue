<template>
  <div class="container">
    <h1>Detalle</h1>
    <div class="card">
      <img :src="cubo.imagen" style="width: 250px" class="img-fluid">
      <h2 class="h2">{{cubo.nombre}}</h2>
      <p><b>Precio: </b> {{cubo.precio}}</p>
      <p><b>Valoracion: </b>{{cubo.valoracion}}</p> 
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();
export default {

  data() {
    return {
      idCubo: this.$route.params.id,
      cubo: {}
    }
  },

  mounted() {
    let id = this.$route.params.id
    service.getCubo(id).then(response => {
      console.log(response)
      this.cubo = response
    })
  }

}
</script>

<style>

</style>