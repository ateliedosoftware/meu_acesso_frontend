<template>
    <div class="flex justify-center">
        <button  class="m-2 p-4 lg:w-1/6 ml-5 lg:p-3 lg:m-5 mr-5 bg-indigo-700 rounded-md text-md font-sans text-white" type="button">{{ rotulo }}</button>
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