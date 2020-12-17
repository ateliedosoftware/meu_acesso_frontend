<template>
  <div>
    <cabecalho titulo="Recuperar Senha" />

    <hr class="mt-40" />

    <div class="grid grid-rows-2 flex justify-center mt-5 mb-10">
      <div class="flex justify-center"></div>
      <h2 class="text-lg text-gray-500">Matricula</h2>
      <input v-model="matricula" class="p-1" type="text" />

      <h2 class="text-lg mt-2 text-gray-500">Senha Atual</h2>
      <input v-model="senhaAtual" class="p-1" type="password" name="" id="" />

      <h2 class="text-lg mt-2 text-purple-700">Nova Senha</h2>
      <input v-model="NovaSenha" class="p-1 border-purple-700 border-solid" type="password" name="" id="" />

      <h2 class="text-lg mt-2 text-purple-700">Confirme sua Senha</h2>
      <input v-model="ConfirmaSenha" class="p-1" type="password" name="" id="" />

    </div>

       <router-link :to="{ name: 'recuperaremail' }">
           <div class="flex justify-center flex-grow-0 m-1">
        <a >Redefinir por Email ?</a>
           </div>
      </router-link>

    <div class="flex justify-center flex-grow-0">
      <router-link :to="{ name: 'aluno' }">
        <botao rotulo="Redefinir Senha" @click="Redefinir()" />
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
        senhaAtual: {
          type: String,
          required: true,
        },
        NovaSenha: {
          type: String,
          required: true,
        },
        ConfirmaSenha: {
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
      Redefinir(){
          Login.recuperar(this.matricula, this.senhaAtual, this.NovaSenha, this.ConfirmaSenha)
          .then(resp => console.log(resp))
      }
  },
};
</script>