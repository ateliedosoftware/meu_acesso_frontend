import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


import { createWebHistory, createRouter } from "vue-router";

import BemVindo from './components/BemVindo.vue'
import Login from './components/Login.vue'
import RecuperarSenha from './components/RecuperarSenha.vue'
import RecuperarEmail from './components/RecuperarEmail.vue'
import Aluno from './components/Aluno.vue'
import QuemVoce from './components/QuemVoce.vue'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '', component: BemVindo, name: '/' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/recuperarsenha', component: RecuperarSenha, name: 'recuperarsenha' },
        { path: '/recuperaremail', component: RecuperarEmail, name: 'recuperaremail' },
        { path: '/quemVoce', component: QuemVoce, name: 'quemVoce' },
        { path: '/aluno', component: Aluno, name: 'aluno' },
    ]// short for `routes: routes`
  })

createApp(App).use(router).mount('#app')