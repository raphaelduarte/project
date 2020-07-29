<template>
    <div>
        <h1 class="tituloRelatorio">Relatorio de Avaliacao de Aula</h1>
        <Tabela></Tabela>
    </div>
</template>

<script>
    import SideBar from '../mainScreen/SideBar'
    import Tabela from './Tabela/Tabela'
    export default {
        components: {
            Tabela
        },
        data() {
            SideBar
        }
    }
</script>

<style scoped>
    .tituloRelatorio {
        margin-bottom: 3%;
    }
</style>