<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Duke City Ministries is run by Albuquerque natives, husband and wife, Mike and Kate Otzenberger. Duke City Ministries specializes in officiation of wedding ceremonies and day of the wedding coordination services in Albuquerque, Rio Rancho and Santa Fe, New Mexico. We understand that planning a wedding can be stressful, involve long days and late-night googling sessions. We are here to help you create the ceremony of your dreams with a personalized approach. Our goal is to allow you to enjoy your wedding day, focused on your spouse, without worry for the details. We have made our price and service list transparent and easy to understand making it easy to know what we can offer you for your wedding day.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Our officiant, Mike Otzenberger, is an Albuquerque native, with ten years of public speaking experience and five years of officiation experience. Mike became a minister to officiate the wedding of two close, long time friends as a favor. Mike enjoyed facilitating such a special moment for this couple and got rave reviews. Friends and family started recommending him or requesting his services for their own weddings. In 2021, Mike and his wife Kate decided to make it official and started Duke City Ministries. </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Kate Otzenberger, our day of coordinator, is organized, detail oriented and has over eight years of party planning and wedding coordination experience. Having planned and organized large parties and weddings, Kate understands how to bring your vision to life and help take the stress away. She takes on each event as a unique challenge and thrives on the day of energy and excitement. Allow her to take on the stress and worry of your big day with Duke City Ministries Day of wedding coordination services.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We look forward to the opportunity to help bring your big day to life and offer several packages to fit any wedding venue, wedding size, or time frame. Please feel free to contact us with any questions you have about our services or for availability requests. We wish you happy wedding planning!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
