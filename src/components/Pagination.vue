<script setup >
import { useCounterStore } from "../stores/counterStore";
const store = useCounterStore();
</script>

<template>
    
<nav class="text-center my-5">
  <ul class="inline-flex -space-x-px">
    <li>
      <button :disabled="!store.prevPage" @click="store.getPrevPage" class="disabled:opacity-25 cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
    </li>
    <li>
      <button  @click="store.getNextPage" class="cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
    </li>
  </ul>
</nav>

</template>
  