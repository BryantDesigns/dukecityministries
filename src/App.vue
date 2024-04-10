<script setup>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Packages from './components/Packages.vue'
import Policies from './components/Policies.vue'
import Reviews from './components/Reviews.vue'
import Title from './components/Title.vue'
import tiers from '../src/assets/data/tiers'
import policies from '../src/assets/data/policies'
import {testimonials, featured} from '../src/assets/data/reviews'


console.log(featured)
console.log(testimonials)



</script>

<template>
  <Title />
  <Packages :tiersArray=tiers.tiers />
  <Policies :policiesArray=policies.policies />
  <About />
  <Reviews :testimonialsArray=testimonials :featuredTestimonial=featured />
</template>