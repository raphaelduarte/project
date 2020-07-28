<template>
    <div>
        <b-button variant="success" class="loginButton">ENTRAR</b-button>
        <b-link href="#foo" class="forgotPasswordLink" @click="$emit('submit-login', this.status)">Esqueci minha senha</b-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               status: 1 
            }
            
        },
        methods: {
            
        },
        
    }
</script>

<style scoped>
    .loginButton {
    float: left;
    margin-top: 2%;
  }
  .forgotPasswordLink{
      float: right;
      
      font-size: 70%;
  }
</style>