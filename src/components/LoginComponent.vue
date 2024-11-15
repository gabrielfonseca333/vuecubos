<template>
  <div class="container">
    <h1>Login Component</h1>
    <div class="card" style="padding: 20px">
      <form @submit.prevent>
        <input v-model="usuario" type="text" placeholder="Usuario" class="form-control" />
        <input v-model="contrasena" type="password" placeholder="Contraseña" class="form-control" />
        <button @click="login()" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {

  name: "LoginComponent",

  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },

  methods: {

    login() {
      let user = this.usuario;
      let pass = this.contrasena;
      service.login(user, pass).then((response) => {
        console.log(response);
        this.$router.push("/perfil");

      });
    },

  }

};
</script>

<style></style>
