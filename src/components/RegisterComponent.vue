<template>
  <div class="container">
    <h1>Register Component</h1>
    <div class="card" style="padding: 20px">
      <form @submit.prevent>
        <input v-model="nombre" type="text" placeholder="Nombre" class="form-control" />
        <input v-model="email" type="text" placeholder="Email" class="form-control" />
        <input v-model="contrasena" type="password" placeholder="Contraseña" class="form-control" />
        <button @click="register()" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const services = new ServiceCubos();

export default {

  data() {
    return {
      nombre: "",
      email: "",
      contrasena: ""
    };
  },

  methods: {

    register(){

      let nombre = this.nombre
      let email = this.email
      let contrasena = this.contrasena

      services.register(nombre, email, contrasena).then(response => { services
        console.log("Usuario registrado!🟩", response)
        alert("Usuario registrado!🟩")
        this.$router.push("/login")
      })
    }
    
  }

}
</script>

<style>

</style>