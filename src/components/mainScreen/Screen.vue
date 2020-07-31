<template>
    <div>
        <img class="logo_relatorio" src='../loginScreen/assets/logo.png'>
        <h1 class="tituloRelatorio">Relatório de Avaliação de Aula</h1>
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
    .logo_relatorio{
    width: 30%;
    }
</style>