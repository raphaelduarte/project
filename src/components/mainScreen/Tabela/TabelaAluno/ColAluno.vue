<template>
    <div>
    <p v-for="aluno in alunos" v-bind:key="aluno">Marcos</p>
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                alunos: ['Marcos', 'Jose', 'Ana', 'Maria', 'Carla', 'Pedro', 'Guilherme', 'Felipe', 'Diego', 'Thiago', 'Nadia', 'Victor']
            }
        },
    }
</script>

<style scoped>

</style>