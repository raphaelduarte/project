<template>
    <div>
        <img class="logo" src='../loginScreen/assets/logo.png'>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Seja Bem Vindo"
            }
        },
    }
</script>

<style scoped>
.logo{
  width: 50%;
}
</style>