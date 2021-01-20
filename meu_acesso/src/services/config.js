import  axios  from 'axios'

const CORS = 'https://cors-anywhere.herokuapp.com/'

export const http = axios.create({
    baseURL: `https://ma-back-homolog.sertao.ifrs.edu.br/`,
    config: {'Content-Type': 'application/json'}
})