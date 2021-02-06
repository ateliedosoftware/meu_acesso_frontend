<template>
  <div
    class="sm:mx-16 sm:px-0 sm:my-0 md:mx-20 md:px-0 md:my-0 lg:mx-20 xl:mx-96 lg:px-42 lg:my-10 lg:shadow-2xl"
  >
    <cabecalho titulo="Meu Acesso" />

    <div class="flex justify-center">
      <!-- <label for="filtername">Find your hero:</label> -->
      <form action="" v-on:submit.prevent="Acessar" method="post">
        <div
          for="filtername"
          class="grid grid-rows-2 mt-52 sm:mt-64 md:mt-64 lg:mt-60"
        >
          <h2 class="text-lg text-purple-700 lg:h-0">Matricula</h2>
          <input
            v-model="data.matricula"
            class="p-1 border border-solid border-blue-500 rounded-md"
            placeholder="sua matricula"
            type="text"
            id="validar"
          />
          <span class="text-md text-center mt-2 text-purple-700">{{ campo }}</span>

          <h2 class="text-lg mt-2 text-purple-700">Senha</h2>
          <input
            v-model="data.senha"
            class="p-1 border border-solid border-blue-500 rounded-md"
            placeholder="sua senha..."
            type="password"
          />
        </div>
        <div class="flex justify-center flex-grow-0">
          <botao rotulo="Entrar" />
          <!-- <router-link :to="{ name: 'aluno' }">
      </router-link> -->
        </div>
      </form>
    </div>

    <router-link :to="{ name: 'recuperarsenha' }">
      <div class="flex justify-center flex-grow-0 m-1">
        <a class="text-lg text-indigo-700 underline">Esqueceu a senha ?</a>
      </div>
    </router-link>

    <img-ifrs />

    <input v-model="data.matricula" placeholder="edit me">
<p>Message is: {{ data.matricula }}</p>

    <input v-model="message"  placeholder="edit me">
<p>Message is: {{ change }}</p>

  {{matricula}}
  </div>
</template>

<script>
import Botao from "./Botao.vue";
import Cabecalho from "./Cabecalho.vue";
import ImagemIFRS from "./ImagemIFRS.vue";

import Validar from "../services/acess";

export default {

  data() {
    return {
      data:{
        matricula:'',
        senha:''
      },
     message: '',
     campo: ''

    };
  },

  components: {
    botao: Botao,
    cabecalho: Cabecalho,
    "img-ifrs": ImagemIFRS,
  },

  watch: {
  },
  created: function () {
  },
  computed: {
    change() {
      if(this.data.matricula.substr(0, 1) == "0" && this.data.matricula.length == 7 || 
      this.data.matricula.length == 5 || this.data.matricula.length == 6){
        this.data.matricula;
        this.campo = 'matricula Campus Digital'
      }
      if(this.data.matricula.substr(0, 2) == "20" && this.data.matricula.length == 10){
        this.data.matricula;
        this.campo = 'Matricula Sigaa'
      }
      if(Validar.validaCPF(this.data.matricula)){
        this.data.matricula;
        this.campo = 'Matricula CPF'
      }
    }
  },

  methods: {

    Acessar() {
      alert("login teste" + JSON.stringify(this.data));
      this.data.matricula = ''
      this.data.senha = ''
    },
  },
};
</script>
