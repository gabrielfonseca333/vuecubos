import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {

  getCubos() {
    let request = "api/cubos"
    let url = Global.urlApiCubos + request
    
    return axios.get(url).then(response => {
      console.log("💡", response.data)
      return response.data})
  }

  getCubo(id) {
    let request = "api/cubos/" + id
    let url = Global.urlApiCubos + request
    
    return axios.get(url).then(response => {
      console.log("💡", response.data)
      return response.data})
  }

  getMarcas() {
    let request = "api/cubos/marcas"
    let url = Global.urlApiCubos + request
    
    return axios.get(url).then(response => {
      console.log("💡", response.data)
      return response.data})
  }

  getCubosMarca(nombre) {
    let request = "api/cubos/cubosmarca/" + nombre
    let url = Global.urlApiCubos + request
    
    return axios.get(url).then(response => {
      console.log("💡", response.data)
      return response.data})
  }

  login(usuario, contrasena) {
    let request = "api/manage/login"
    let url = Global.urlApiCubos + request
    
    return axios.post(url, {email: usuario, password: contrasena}).then(response => {
      console.log("login🟩", response.data.response)
      let token = response.data.response
      localStorage.setItem("token", token)
      return response.data})
  }

  getPerfilUsuario(){
    let request = "api/manage/perfilusuario"
    let url = Global.urlApiCubos + request
    let token = localStorage.getItem("token")

    return axios.get(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(response => {
      console.log("perfil🟩", response.data)
      return response.data})
  }

  getCompras(){
    let request = "api/compra/comprasusuario"
    let url = Global.urlApiCubos + request
    let token = localStorage.getItem("token")

    return axios.get(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(response => {
      console.log("compras🛒", response.data)
      return response.data})
  }

  createPedido(idCubo){
    let request = "api/compra/insertarpedido/" + idCubo
    let url = Global.urlApiCubos + request
    let token = localStorage.getItem("token")

    console.log("token⭐: ", token)
    console.log("url: ", url)

    return axios.post(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(response => {
      console.log("pedido🛒", response.data)
      return response.data})

  }

}