<template>
  <div class="lg:mx-20 sm:mx-20 sm:px-0 sm:my-0 xl:mx-96 lg:px-42 lg:my-10 lg:shadow-2xl">
  <div>
    <cabecalho titulo="Redefinir por Email" />

    <div class="flex justify-center">
    <div class="grid grid-rows-2 mt-52 sm:mt-64 md:mt-64 lg:mt-60">
      <h2 class="text-lg text-purple-700">Matricula</h2>
      <input v-model="matricula" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="sua matricula" type="text" />

      <h2 class="text-lg mt-2 text-purple-700">Email</h2>
      <input v-model="email" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="seu email" type="email" name="" id="" />
    </div>
    </div>


    <div class="flex justify-center flex-grow-0 mt-5">
      <router-link :to="{ name: 'aluno' }">
        <botao rotulo="Recuperar - Email" @click="RedefinirEmail()" />
      </router-link>
    </div>

    <img-ifrs />
  </div>
  </div>
</template>

<script>
import Botao from "./Botao.vue";
import Cabecalho from "./Cabecalho.vue";
import ImagemIFRS from "./ImagemIFRS.vue";


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
  },

  methods: {
      RedefinirEmail(){
          // redefinirEmail(this.matricula, this.email)
          // .then(resp => console.log(resp))
      }
  },
};
</script>