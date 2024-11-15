<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
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
  }
  
  

}
</script>

<style>

</style>