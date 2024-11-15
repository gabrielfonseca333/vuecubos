<template>
  <div class="container">
    <h1>Comprar Cubo</h1>
    <div>
      <form @submit.prevent>
        <select v-model="idCubo" class="form-control">
          <option v-for="cubo in cubos" :key="cubo.idCubo" v-bind:value="cubo.idCubo">
            {{ cubo.nombre }}
          </option>
        </select>
        <button @click="crearPedido()" class="btn btn-danger">Comprar</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {

  name: 'ComprarCubo',
  data () {
    return {
      cubos: [],
      idCubo: 0
    }
  },

  mounted(){
    this.getCubos()
  },

  methods: {


    getCubos(){
      service.getCubos().then((response) => {
        this.cubos = response
      })
    },

    crearPedido(){
      let idCubo = this.idCubo.toString()
      console.log("🪅", idCubo)

      service.createPedido(idCubo).then((response) => {
        console.log("🪅", response)
        this.$router.push('/perfil')
      })
      
    },
    
  },

  

}
</script>

<style>

</style>