<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    character:{
        type: Object
    }
})
const color = computed(() => {
    //console.log(props.character.status)
    switch (props.character.status) {
        case "Alive":
            //console.log("test")
            return "w-4 h-4 bg-green-600 rounded-full mr-1"
        case "Dead":
            return "w-4 h-4 bg-red-600 rounded-full mr-1"
        default:
            return "w-4 h-4 bg-blue-600 rounded-full mr-1"
    }
})
//console.log(props.character)
</script>
<template>
    <div class="p-2 border border-gray-300 flex flex-col">
        <img :src="props.character.image" alt="" >
        <h1 class="text-4xl font-bold">{{ props.character.name }}</h1>
        <h3 class="text-xl flex items-center"> <div :class="color"></div>{{ props.character.status }}</h3>
    </div>
</template>


