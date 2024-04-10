<script setup>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Packages from './components/Packages.vue'
import Policies from './components/Policies.vue'
import Reviews from './components/Reviews.vue'
import Title from './components/Title.vue'
import tiers from '../src/assets/data/tiers'

console.log(tiers)
</script>

<template>
  <Title />
  <Packages :tiersArray=tiers.tiers />
  <Policies />
  <About />
  <Reviews />
</template>


