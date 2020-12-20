<template>
    <div class="">
        <div class="flex justify-center">
        <div class="grid grid-rows-2 p-8 m-2 bg-white rounded-2xl shadow-2xl">
            <i class="material-icons text-indigo-800 text-center">{{ icon }}</i>
            <h3 class="text-center py-0">{{ name }}</h3>
        </div>
        </div>
    </div>
</template>


<script>
export default {

    props: {
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
    
}
</script>