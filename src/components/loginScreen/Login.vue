<template>
  <div class="hello">
    <b-container>
      <login-header></login-header>
      <login-password></login-password>
      
   </b-container> 
  </div>
</template>
<script>
import LoginPassword from './LoginPassword'
import LoginHeader from './LoginHeader'

export default {
  name: 'Login',
  components: {
    LoginPassword,
    LoginHeader
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