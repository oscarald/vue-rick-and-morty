import axios from "axios";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    characters: [],
    filteredCharacters: [],
    currentPage: 1,
    totalPages: 1,
    nextPage: "",
    prevPage: "",
    state: false
  }),
  getters: {},
  actions: {
    async getCharacters() {
      try {
        this.state = true
        const char = await axios.get("https://rickandmortyapi.com/api/character");
        this.totalPages = char.data.info.pages;
        if (char.data.info.next) this.nextPage = char.data.info.next;
        if (char.data.info.prev) this.prevPage = char.data.info.prev;
        this.characters = char.data.results;
        this.filteredCharacters = char.data.results;
        this.state = false
      } catch (error) {
        console.log(error);
      }
    },
    getFilteredCharacters(status) {
      //console.log(status)
      this.filteredCharacters = this.characters.filter(
        (character) => character.status == status
      );
    },
    getAllCharacters() {
      this.filteredCharacters = this.characters;
    },
    async getNextPage(){
      try {
        this.state = true
        const char = await axios.get(this.nextPage);
        this.totalPages = char.data.info.pages;
        if (char.data.info.next) this.nextPage = char.data.info.next;
        if (char.data.info.prev) this.prevPage = char.data.info.prev;
        this.characters = char.data.results;
        this.filteredCharacters = char.data.results;
        this.state = false
      } catch (error) {
        console.log(error)
      }
    },
    async getPrevPage(){
      try {
        this.state = true
        const char = await axios.get(this.prevPage);
        this.totalPages = char.data.info.pages;
        if (char.data.info.next) this.nextPage = char.data.info.next;
        if (char.data.info.prev) this.prevPage = char.data.info.prev;
        this.characters = char.data.results;
        this.filteredCharacters = char.data.results;
        this.state = false
      } catch (error) {
        console.log(error)
      }
    }
  },
});
