<template>
    <div>
      <tabela-professor></tabela-professor>
      <tabela-aluno></tabela-aluno>
      <button type="button" class="btn btn-primary enviarRelatorio">Enviar Relatório</button>
    </div>
</template>

<script>
    import TabelaAluno from './TabelaAluno/TabelaAluno'
    import TabelaProfessor from './TabelaProfessor/TabelaProfessor'
    export default {
      
      components: {
            TabelaAluno,
            TabelaProfessor
      },
      data() {
        return {
                
        }
      },
        
    }
</script>

<style scoped>
  .enviarRelatorio{
    float: right;
    margin-right: 10%;
    margin-bottom: 10%;
  }
</style>