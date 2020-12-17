//import { http } from './config'

import  axios  from 'axios'

const token = "?key=b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMjAxOTMwOTczNSIsImV4cCI6WyI3NzciXX0.xL4HJI3benIOVokDd0Bf6UTUar1wZtm4nA28P41uTKs'"

const CORS = 'https://cors-anywhere.herokuapp.com/'

export default {
    login:(matricula, senha) => {
        return axios.post({
            url: CORS+'https://api.sertao.ifrs.edu.br:8443/login',
            config: {
                'Content-Type': 'multipart/form-data',
            },
            data: {
                username: matricula,
                password: senha
            }
        })
    },

    recuperar:(matricula, senhaAtual, novaSenha, confirmaSenha) => { 
        return axios.post({
            url: CORS+'https://senhadc.sertao.ifrs.edu.br/index.php',
            config: {
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'pt-BR,pt;q=0.9',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                login: matricula,
                oldpassword: senhaAtual,
                newpassword: novaSenha,
                confirmpassword: confirmaSenha 
            }
        })
    },

    redefinirEmail:(matricula, email) => {
        return axios.post({
            url: CORS+'https://senhadc.sertao.ifrs.edu.br/?action=sendtoken',
            config: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'pt-BR,pt;q=0.9',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-User': '?1'
            },
            data: {
                login: matricula,
                mail: email
            }
        })
    }
}