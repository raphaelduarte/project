<template>
    <div>
        <b-list-group>
            <b-list-group-item><b-form-input v-model="text"
            placeholder="Seu email para login"></b-form-input></b-list-group-item>

            <b-list-group-item><b-form-input v-model="password" 
            placeholder="Sua senha para login"></b-form-input></b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {

        }
    }
</script>

<style scoped>

</style>