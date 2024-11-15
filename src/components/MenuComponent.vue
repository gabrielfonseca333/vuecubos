<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">GF</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
        </li>
        <li class="nav-item">
          <button @click="registrarse()" class="nav-link">Registrarse</button>
        </li>
        <li class="nav-item">
          <button @click="cerrarSesion()" class="nav-link">Cerrar Sesion</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li v-for="marca in marcas" :key="marca" class="dropdown-item">
              <router-link class="dropdown-item" :to="'/marca/'+marca">{{marca}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos'
const service = new ServiceCubos()
export default {

  name: 'MenuComponent',
  data() {
    return {
      marcas: []
    }
  },

  mounted() {
    service.getMarcas().then(response => {
      console.log(response)
      this.marcas = response
    })
  },

  methods: {
    
    cerrarSesion(){

      let token = localStorage.getItem("token")
      if(!token){
        alert("No hay ninguna sesion abierta!🔴")
      }else{
        localStorage.removeItem("token")
      alert("Sesion cerrada!🔴")
      this.$router.push("/")
      }
    },

    registrarse(){

      let token = localStorage.getItem("token")
      if(token){
        alert("Ya hay una sesion iniciada!🟩")
        this.$router.push("/login")
      }else{
        this.$router.push("/register")
      }
    }

  }
  
  

}
</script>

<style>

</style>