<template>
    <div class="lg:mx-auto lg:py-5 lg:px-5 lg:max-w-min md:mx-auto md:max-w-max md:max-h-full md:p-4">
        <div class="container">
            <div v-on:click='teste'  class="grid grid-rows-2  px-3 py-3  md:p10 lg:px-6 lg:py-6 xl:px-6 xl:py-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 
            m-2 max-h-full border border-solid border-green-500 bg-white rounded-2xl shadow-2xl">
                <i class="material-icons  p-3 text-indigo-800 text-center">{{ icon }}</i>
                <h3 class="text-center space-x-3 space-y-3">{{ name }}</h3>
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