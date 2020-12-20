<template>
<div class="lg:mx-20 md:mx-14 m-0 p-0">
  <div class="sm:grid sm:grid-rows-2 relative md:relative sm:relative">
    <svg
      class="sm:w-full sm:my-0 sm:flex-shrink-0 absolute sm:rounded-2xl md:rounded-3xl lg:rounded-3xl"
      viewBox="0 0 375 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H375V109.732C375 109.732 227 136.177 138.5 168.534C50 200.891 0 168.534 0 168.534V0Z"
        fill="#19D564"
        fill-opacity="0.91"
      />
      <path
        d="M0 0H375V107.585C375 107.585 228.5 134.049 137.5 165.237C46.5 196.424 0 165.237 0 165.237V0Z"
        fill="#6E44FF"
        fill-opacity="0.87"
      />
    </svg>

    <div class="flex p-10 absolute">
      <h2 class="text-xl text-white font-bold">
        {{ titulo }}
      </h2>
    </div>

    <div class="absolute flex flex-shrink-0  justify-end">
        <img src="{{ imagem }}" alt="" srcset="">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    imagem: {
      type: String,
      required: false
    },
  },
};
</script>