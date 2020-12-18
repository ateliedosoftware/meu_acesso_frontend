<template>

    <div class='grid grid-row-2 mt-0 p-0'>

        <div class="flex relative">
            <svg class="w-full flex-shrink-0" viewBox="0 0 375 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H375V109.732C375 109.732 227 136.177 138.5 168.534C50 200.891 0 168.534 0 168.534V0Z"
                    fill="#19D564" fill-opacity="0.91" />
                <path d="M0 0H375V107.585C375 107.585 228.5 134.049 137.5 165.237C46.5 196.424 0 165.237 0 165.237V0Z"
                    fill="#6E44FF" fill-opacity="0.87" />
            </svg>

            
            <div class="absolute flex-wrap p-10">
                <h2 class="text-xl text-white font-bold">
                    Preciso saber um pouco sobre você
                </h2>
            </div>

            <div class="absolute p-30 flex d mt-32 ml-16  justify-around">
                <img class="w-1/4 flex-shrink-0" src="../assets/women.jpg" alt="" srcset="">
            </div>
        </div>

        <div class="grid grid-row-2 bg-gray-300 rounded-3xl mt-10 pb-8  p-5 m-5">
            <h2 class="text-lg text-center text-blue-700">Coloque aqui seu CPF</h2>
            <input type="number" v-model="cpf" class='m-2 p-2 lg:p-2 lg:m-5' />
        </div>
        
    {{cpf}}
            <div class='flex justify-center flex-grow-0'>
             <router-link :to="{name :'aluno'}">
            <button @click="envio()" type="button"
                    class="m-2 p-4 lg:w-1/6 ml-5 lg:p-3 lg:m-5 mr-5 bg-indigo-700 rounded-md text-md font-sans text-white">Continuar</button>
            </router-link >
            </div>

        <div class='flex justify-center flex-grow'>
            <img class="p-0 m-2" src="../assets/logoIFRS-home.png" alt="" srcset="">
        </div>
    </div>

</template>

<script>

import Login from '../services/login'
import { result } from '../services/acess'
    export default {
        data() {
            return {
                cpf: {
                    type: String,
                    required: true
                },
                person: {                       
                type: Object,
                required: true
                }
            }
            },

        methods: {
            envio(){
                Login.login(this.cpf)
                .then(resp => resp)
                .then(response => {
                 console.log(JSON.stringify(response.data))
                 this.person = JSON.stringify(response.data)
                 alert("Solicitação obtida com sucesso !!!" + JSON.stringify(this.person.campus.nome_completo))
                })
                .catch((err) => {
                    alert("Erro !! " + err)
                })
            }
       },
    }
</script>