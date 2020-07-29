<template>
    <div>
      <tabela-professor></tabela-professor>
      <tabela-aluno></tabela-aluno>
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

<style lang="scss" scoped>

</style>