import  axios  from 'axios'

export const http = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.sertao.ifrs.edu.br:8443/login'
})