<template>
  <div class="pets">
    <h1>This the pets page</h1>
    <button v-on:click="getPets">Click for pets</button>
    <ul id="example-1">
  <li v-for="pet in pets">
    {{ pet.name }}
  </li>
</ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'pets',
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
          console.log(response);
          this.pets = response.data;
        }, 
        (error) => {
          console.log(error);
        })
    }
  }
}
</script>
