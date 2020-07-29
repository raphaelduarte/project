<template>
  <div id="app">  
    <Login v-if="this.status == 0" @submit-login="submitLogin()"/>
    <Screen/> 
  </div>
</template>

<script>
import Login from './components/loginScreen/Login'
import Screen from './components/mainScreen/Screen'




export default {
  name: 'App',
  components: {
    Login,
    Screen
  },
  data() {
    return {
      status: 1
    }
  },
  methods: {
    submitLogin() {
      return  this.status;
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
