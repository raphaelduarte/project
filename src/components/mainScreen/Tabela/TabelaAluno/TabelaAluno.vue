<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">N</th>
          <th scope="col">Aluno</th>
          <th scope="col">Presenca</th>
          <th scope="col">Classificacao</th>
          <th scope="col">Comentario</th>
          <th scope="col">O que aconteceu ?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in qtdAlunos" v-bind:key="item" v-bind:carregarNomes="chamaAlunos">
          <th scope="row">{{qtdAlunos[this.iterador]}}</th>
          <td>
            <ColAluno v-bind:aluno="alunos[this.iterador]" />
          </td>
          <td>
            <Presenca />
          </td>
          <td>
            <Classificacao />
          </td>
          <td>
            <Comentario />
          </td>
          <td>
            <FeedbackProfessor />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ColAluno from "./ColAluno";
import Presenca from "./Presenca.vue";
import Classificacao from "./Classificacao";
import Comentario from "./Comentario";
import FeedbackProfessor from "./FeedbackProfessor";

export default {
  data() {
    return {
      qtdAlunos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      alunos: [
        "Marcos",
        "Jose",
        "Ana",
        "Maria",
        "Carla",
        "Pedro",
        "Guilherme",
        "Felipe",
        "Diego",
        "Thiago",
        "Nadia",
        "Victor",
      ],
      iterador: 0
    };
  },
  components: {
    ColAluno,
    Presenca,
    Classificacao,
    FeedbackProfessor,
    Comentario,
  },
  methods: {
    chamaAlunos() {
      this.iterador = this.iterador + 1
    }
  },
  props: {
    carregarNomes: {
      chamaAlunos: {type: Function}
    },
    
  },
};
</script>

<style scoped>
</style>