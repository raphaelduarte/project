<template>
  <div class="hello">
    

    <b-container>
      <img class="logo" src='../assets/logo.png'>

      <h1>{{msg}}</h1>

      <b-list-group>
        <b-list-group-item><b-form-input v-model="text"
        placeholder="Seu email para login"></b-form-input></b-list-group-item>

        <b-list-group-item><b-form-input v-model="password" 
        placeholder="Sua senha para login"></b-form-input></b-list-group-item>
      </b-list-group>

      <b-button variant="success" class="loginButton">ENTRAR</b-button>
   </b-container>

   
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      msg: "Seja Bem Vindo",
      
      

    }
  },
  methods: {
    
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 50%;
}
  
</style>