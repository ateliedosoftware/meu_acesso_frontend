<template>
  <div
    class="sm:mx-16 sm:px-0 sm:my-0 md:mx-20 md:px-0 md:my-0 lg:mx-20 xl:mx-96 lg:px-42 lg:my-10 lg:shadow-2xl">
    <cabecalho titulo="Preciso saber um pouco sobre você. Você é?" />

    <div class="flex justify-center flex-wrap mx-5 md:mx-auto">
      <div class="grid grid-cols-2 mt-32 md:mt-32 relative">
        <card  icon="school" name="Nosso Aluno" />

        <card  icon="nature_people" name="Servidor do Campus" />

        <card  icon="streetview" name="Terceirizado" />

        <card  icon="people_outline" name="Visitante" />
      </div>
    </div>
    <div class="flex justify-end p-10 align-middle">
        <div class="grid grid-cols-2">
        <p class="text-black text-sm">Servidor do IFRS, porém lotado em outro campus opte pela opção Visitante</p>
            <i class="material-icons text-indigo-800">live_help</i>
        </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Headers from "./Headers.vue";


export default {
  data() {
    return {};
  },

  components: {
    card: Card,
    cabecalho: Headers,
  },

  methods: {
  
  },
};
</script>