<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">N</th>
          <th scope="col">Aluno</th>
          <th scope="col">Presença</th>
          <th scope="col">Classificação</th>
          <th scope="col">Comentário</th>
          <th scope="col">O que aconteceu ?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in qtdAlunos" v-bind:key="item">
          <th scope="row">{{qtdAlunos[item] + 1}}</th>
          <td>
            <ColAluno v-bind:aluno="alunos[item]" />
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
    <table class="table table-hover">
      <thead>
        <tr>
          <th>N</th>
          <th>Anotações da Aula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in qtdAlunos" v-bind:key="item">
          <th>{{qtdAlunos[item] + 1}}</th>
          <td>
            <AnotacoesAula/>
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
import AnotacoesAula from './AnotacoesAula';

export default {
  data() {
    return {
      qtdAlunos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
      ]
    };
  },
  components: {
    ColAluno,
    Presenca,
    Classificacao,
    FeedbackProfessor,
    Comentario,
    AnotacoesAula
  },
  methods: {
    
  },
  props: {
    
    
  },
};
</script>

<style scoped>
</style>