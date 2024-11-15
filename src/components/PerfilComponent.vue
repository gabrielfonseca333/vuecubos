<template>
  <div class="container">
    <h1>Perfil Component</h1>
       

    <div class="card" style="padding: 20px">
      <h2>Perfil {{ usuario.idUsuario }}</h2>
      <p>Hola,  {{ usuario.nombre }}</p>
      <p>Email: {{ usuario.email }}</p>
    </div>

    <button @click="getCompras()" class="btn btn-primary">Ver Historial de Compras</button>
    <router-link to="/comprarcubo" class="btn btn-danger">Realizar Compra</router-link>

    
    <div v-if="compras.length > 0" class="card" style="padding: 20px; text-align: left">
      <h2 class="h2">Historial de Compras</h2>
      <ul>
        <li v-for="compra in compras" :key="compra">
          {{compra.idPedido}} - {{compra.usuario}} - {{compra.fechaPedido}}
        </li>
      </ul>
    </div>

 
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PerfilComponent",

  data() {
    return {
      usuario: {},
      compras: []
    };
  },

  mounted() {
    service.getPerfilUsuario().then((response) => {
      this.usuario = response;
      console.log(this.usuario);
    });
  },

  methods: {
    
    getCompras() {
      service.getCompras().then((response) => {
        this.compras = response;
        console.log(this.compras);
      });
    }

  }
};
</script>

<style></style>
