import { http } from './config'

import  axios  from 'axios'


const CORS = 'https://cors-anywhere.herokuapp.com/'

const recuperarSenha = 'http://localhost:3000/changepassword/'

export default {
    login:(matricula) => {
        return axios.post({
            url: 'http://localhost:3000/search/sAMAccountName/' + matricula,
            config: {
                'Content-Type': 'application/json',
            },
            // data: {
            //     username: matricula,
            //     password: senha
            // }
        })
    },

    recuperar:(matricula) => { 

        return http.post('changepassword/', matricula)
    },

    search:(matricula) => {
        return http.post(`search/sAMAccountName/${matricula}`)
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