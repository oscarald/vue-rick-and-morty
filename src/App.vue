<script setup>
import Card from "./components/Card.vue";
import Pagination from "./components/Pagination.vue";
import { onMounted } from "vue";
import { useCounterStore } from "./stores/counterStore";
const store = useCounterStore();
onMounted(() => {
  store.getCharacters();
});

</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-5xl text-center p-5">Rick and Morty</h1>
    <div class="flex content-center justify-center">
      <button
        @click="store.getFilteredCharacters('Alive')"
        class="px-5 bg-indigo-600 m-2 rounded text-white hover:bg-indigo-800 text-lg"
      >
        Alive
      </button>
      <button
        @click="store.getFilteredCharacters('Dead')"
        class="px-5 bg-indigo-600 m-2 rounded text-white hover:bg-indigo-800 text-lg"
      >
        Dead
      </button>
      <button
        @click="store.getFilteredCharacters('unknown')"
        class="px-5 bg-indigo-600 m-2 rounded text-white hover:bg-indigo-800 text-lg"
      >
        Unknown
      </button>
      <button
        @click="store.getAllCharacters"
        class="px-5 bg-indigo-600 m-2 rounded text-white hover:bg-indigo-800 text-lg"
      >
        All
      </button>
    </div>
    <div v-if="store.state" class="flex content-center justify-center"><span class="loader"></span></div>
    <div class="grid grid-cols-3 gap-4">
      <Card
        :character="character"
        v-for="character in store.filteredCharacters"
        :key="character.id"
      />
    </div>
    <Pagination />
  </div>
</template>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
