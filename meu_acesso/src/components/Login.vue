<template>
  <div >
    <cabecalho titulo="Meu Acesso" />

    <hr class="mt-40" />

    <div class="grid grid-rows-2 flex justify-center mt-5 mb-10">
      <div class="flex justify-center"></div>
      <h2 class="text-lg text-purple-700">Matricula</h2>
      <input v-model="matricula" class="p-1" type="text" />

      <h2 class="text-lg mt-2 text-purple-700">Senha</h2>
      <input v-model="senha" class="p-1" type="password" name="" id="" />
    </div>

       <router-link :to="{ name: 'recuperarsenha' }">
           <div class="flex justify-center flex-grow-0 m-1">
        <a >Esqueceu a senha ?</a>
           </div>
      </router-link>

    <div class="flex justify-center flex-grow-0">
      <router-link :to="{ name: 'aluno' }">
        <botao rotulo="Entrar" @click="Acessar()" />
      </router-link>
    </div>

    <img-ifrs />
  </div>
</template>

<script>
import Login from "../services/requests.js";
import Botao from "./Botao.vue";
import Cabecalho from "./Cabecalho.vue";
import ImagemIFRS from "./ImagemIFRS.vue";
import InputEntrar from "./InputEntrar.vue";

export default {
  data() {
    return {
      props: {
        matricula: {
          type: String,
          required: true,
        },
        senha: {
          type: String,
          required: true,
        },
      },
    };
  },

  components: {
    botao: Botao,
    cabecalho: Cabecalho,
    "img-ifrs": ImagemIFRS,
    entrar: InputEntrar,
  },

  methods: {
      Acessar(){
          Login.login(this.matricula, this.senha)
          .then(resp => console.log(resp))
      }
  },
};
</script>