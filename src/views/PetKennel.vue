<template>
  <div class="pets">
    <h1>This the pets page</h1>
    <button v-on:click="getPets">Click for pets</button>
    <ul id="pet-list">
  <li v-for="pet in pets" :key="pet.name">
    {{ pet.name }}
  </li>
</ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'pet-kennel',
  data () {
    return {
      pets: []
    }
  },
  methods: {
    getPets: function () {
      axios.get('http://localhost:3000/getPets', {
        headers: {
          "screenSize": window.width,
          "shelter": "",
          "count": 0,
        }
      })
        .then((response) => {
          this.pets = response.data;
        }, 
        (error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style>
#pet-list {
  list-style-type: none;
}
</style>
