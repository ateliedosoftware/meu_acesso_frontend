<template> 
  <div class="lg:mx-20 sm:mx-20 md:mx-20 sm:px-0 sm:my-0 md:px-0 md:my-0  xl:mx-96 lg:px-42 lg:my-10">
  <div>
    <cabecalho titulo="Recuperar Senha" />

      
      <div class="flex justify-center">
    <div class="grid grid-rows-2 flex justify-center mt-52 sm:mt-64 md:mt-72  lg:mt-60">
      <h2 class="text-lg text-gray-500">Matricula</h2>
      <input v-model="matricula" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="sua matricula" type="text" />

      <h2 class="text-lg mt-2 text-gray-500">Senha Atual</h2>
      <input v-model="senhaAtual" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="senha atual" type="password" name="" id="" />

      <!-- <div class="border border-solid border-red-700 border-2 m-1 p-5 rounded-lg"> -->
      <h3 v-show="verificaSenha" class="flex justify-center mt-1 mb-1 pt-2 text-red-600">AS SENHAS DEVEM SER IGUAIS !!!</h3>

      <h2 class="text-lg mt-2 text-purple-700">Nova Senha</h2>
      <input v-model="NovaSenha" class="p-1 border border-solid border-blue-500 rounded-md" placeholder="nova senha" type="password" name="" id="" />

      <h2 class="text-lg mt-2 text-purple-700">Confirme sua Senha</h2>
      <input v-model="ConfirmaSenha" id='confirma' class="p-1 border border-solid border-blue-500 rounded-md" placeholder="nova senha" type="password" name=""  />
    </div>
    </div>
  
       <router-link :to="{ name: 'recuperaremail' }">
           <div class="flex justify-center flex-grow-0 m-1">
        <a class="text-lg text-indigo-700 underline">Redefinir por Email ?</a>
           </div>
      </router-link>

    <div class="flex justify-center flex-grow-0">
      <router-link :to="{ name: 'aluno' }">
        <botao rotulo="Redefinir Senha" @click="Redefinir()" />
      </router-link>
    </div>

    <img-ifrs />
  </div>
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
        verificaSenha: Boolean,
      },
    };
  },

  components: {
    botao: Botao,
    cabecalho: Cabecalho,
    "img-ifrs": ImagemIFRS,
    entrar: InputEntrar,
  },

  computed: {
    verifica: () => {
        document.getElementById('confirma').addEventListener('blur', () => {
          if (this.NovaSenha !== this.ConfirmaSenha) {
           return this.verificaSenha = true
          }
        })
    }
    

  },

  methods: {
      Redefinir(){
        if(verifica()){
          return false;
        }
          Login.recuperar(this.matricula, this.senhaAtual, this.NovaSenha, this.ConfirmaSenha)
          .then(resp => console.log(resp))
      }
  },
};
</script>