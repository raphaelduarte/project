<template>
    <div>
        <select class="custom-select" id="inputGroupSelect01">
            <option selected>Selecione...</option>
            <option v-for="item in codigos" v-bind:key="item">{{item}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                codigos: [
                    'R1 - Aluno parece perdido/disperso',
                    'P1 - Não conheço o aluno para avaliá-lo',
                    'E1 - Aluno fala bastante ',
                    'R2 - Aluno fala muito português e não se esforça para falar inglês',
                    'P2 - Sem avanços',
                    'E2 - Aluno está usando palavras e expressões novas',
                    'R3 - Aluno sempre tem as mesmas dúvidas',
                    'P3 - Não regride e não evolui',
                    'E3 - Aluno puxa assunto com outros alunos',
                    'R4 - Aluno atrapalha os outros alunos',
                    'P4 - OUTRO',
                    'E4 - Aluno está falando de forma mais fluida e sem travar muito',
                    'R5 - Aluno desiste facilmente',
                    'E5 - Aluno está conseguindo criar frases maiores',
                    'R6 - Aluno faz outras coisas durante a aula',
                    'E6 - Aluno está evoluindo na pronúncia',
                    'R7 - Aluno trava sempre por nervosismo',
                    'E7 - Percebe-se que o aluno está estudando fora da aula',
                    'R8 - Aluno fica em silêncio esperando alguém falar',
                    'E8 - Mesmo com pouco conhecimento, aluno se esforça para falar inglês',
                    'R9 - Aluno não está estudando a parte teórica',
                    'E9 - Não conheço o aluno para avaliá-lo',
                    'R10 - Aluno não evolui na pronúncia',
                    'E10 - OUTRO',
                    'R11 - Aluno continua pedindo para repetir muitas vezes',
                    'R12 - Aluno não mostra interesse em construir frases maiores',
                    'R13 - Aluno fica muito preso às perguntas exclusivamente',
                    'R14 - Não conheço o aluno para avaliá-lo',
                    'R15 - OUTRO'
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>