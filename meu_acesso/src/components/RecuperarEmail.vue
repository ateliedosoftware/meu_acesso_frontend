<template>
  <div>
    <cabecalho titulo="Redefinir por Email" />

    <hr class="mt-40" />

    <div class="grid grid-rows-2 flex justify-center mt-5 mb-10">
      <div class="flex justify-center"></div>
      <h2 class="text-lg text-purple-700">Matricula</h2>
      <input v-model="matricula" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="sua matricula" type="text" />

      <h2 class="text-lg mt-2 text-purple-700">Email</h2>
      <input v-model="email" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="seu email" type="email" name="" id="" />
    </div>


    <div class="flex justify-center flex-grow-0">
      <router-link :to="{ name: 'aluno' }">
        <botao rotulo="Recuperar - Email" @click="RedefinirEmail()" />
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
        email: {
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
      RedefinirEmail(){
          Login.redefinirEmail(this.matricula, this.email)
          .then(resp => console.log(resp))
      }
  },
};
</script>