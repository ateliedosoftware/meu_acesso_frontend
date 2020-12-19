<template>
  <div
    class="bg-blue-5 lg:mx-20 sm:mx-0 sm:px-0 sm:my-0 xl:mx-96 lg:px-42 lg:my-10">
    <cabecalho titulo="Meu Acesso" />

    <div class="flex justify-center">
      <div class="grid grid-rows-2 mt-52 lg:mt-60">
        <h2 class="text-lg text-purple-700 lg:h-0">Matricula</h2>
        <input
          v-model="matricula"
          class="p-1 border border-solid border-blue-500 rounded-md"
          placeholder="sua matricula"
          type="text"/>

        <h2 class="text-lg mt-2 text-purple-700">Senha</h2>
        <input
          v-model="senha"
          class="p-1 border border-solid border-blue-500 rounded-md"
          placeholder="sua senha..."
          type="password"
          name=""
          id=""/>
      </div>
    </div>
    
    <router-link :to="{ name: 'recuperarsenha' }">
      <div class="flex justify-center flex-grow-0 m-1">
        <a class="text-lg text-indigo-700 underline">Esqueceu a senha ?</a>
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
    Acessar() {
      Login.login(this.matricula, this.senha).then((resp) => console.log(resp));
    },
  },
};
</script>