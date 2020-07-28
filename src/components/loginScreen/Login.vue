<template>
  <div class="hello">
    <b-container>
      <login-header></login-header>
      <login-password></login-password>
      <login-button @submit-login="$emit('submit-login', $event.this.status)"></login-button>
      
   </b-container> 
  </div>
</template>
<script>
import LoginPassword from './LoginPassword'
import LoginHeader from './LoginHeader'
import LoginButton from './LoginButton'

export default {
  name: 'Login',
  components: {
    LoginPassword,
    LoginHeader,
    LoginButton
  },
  data(){
    return {

    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>