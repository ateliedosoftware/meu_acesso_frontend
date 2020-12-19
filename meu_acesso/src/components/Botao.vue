<template>
    <div class="flex justify-center">
        <button  class="m-2  ml-5 py-3 px-14  md:px-16 md:py-4 lg:px-20 lg:py-2 lg:m-5 mr-5 bg-indigo-700 rounded-md text-md font-sans text-white" type="button">{{ rotulo }}</button>
    </div>
</template>

<script>
export default {
    props: {
        rotulo:{
            required: true,
            type: String
        }
    },

   
}
</script>