<template>
    <div>
        <form>
        <div class="form-group">
            <input placeholder="Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Nunca iremos mandar mensagens para voce ou compartilhar seu email com outras pessoas.</small>
        </div>
        <div class="form-group">
            <input placeholder="Senha" type="password" class="form-control" id="exampleInputPassword1">
            <b-link href="#foo" class="forgotPasswordLink" @click="$emit('submit-login', this.status)">Esqueci minha senha</b-link>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Salvar login</label>
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                login: '',
                password: ''
                
            }
        },
        props: {

        }
    }
</script>

<style scoped>
.loginLabel {
    float: left;
}
.forgotPasswordLink{
      float: right;
      
      font-size: 70%;
  }

</style>