<template>
    <div class=" lg:mx-auto lg:py-5 lg:px-5 lg:max-w-min md:mx-auto md:max-w-max md:max-h-full md:p-4">
        <div class="p-1 m-0 content-between">
        <div v-on:click='teste'  class="grid grid-rows-2 px-8 py-8 md:px-12 md:py-12 w-full max-h-full m-2 border border-solid border-green-500 bg-white rounded-2xl shadow-2xl">
            <i class="material-icons py-0 px-0 text-indigo-800 text-center">{{ icon }}</i>
            <h3 class="text-center py-0 px-0">{{ name }}</h3>
        </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return { }
    },
            
    props: {
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },

    methods: {
         teste(){
            alert(this.name)
        }
    },
    
}
</script>