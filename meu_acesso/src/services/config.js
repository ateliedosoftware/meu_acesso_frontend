import  axios  from 'axios'

const CORS = 'https://cors-anywhere.herokuapp.com/'

export const http = axios.create({
    baseURL: 'https://meu-acesso-back.herokuapp.com/',
    config: {'Content-Type': 'application/json'}
})