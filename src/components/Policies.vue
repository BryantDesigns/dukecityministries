<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- <div class="mx-auto max-w-2xl lg:max-w-4xl"> -->
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Policies</h2>
        <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article v-for="policy in policies" :key="policy.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-40 lg:shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <component :is="policy.icon" class="h-40 w-full text-white items-center justify-center" aria-hidden="true" />
              <!-- <img :src="post.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" /> -->
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <!-- <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
              </div> -->
              <div class="group relative max-w-xl">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="policy.href">
                    <span class="absolute inset-0" />
                    {{ policy.title }}
                  </a>
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">{{ policy.description }}</p>
              </div>
              <!-- <div class="mt-6 flex border-t border-gray-900/5 pt-6 ">
                <div class="h-auto w-auto absolute left-0 top-0 flex items-center justify-center rounded-lg bg-indigo-600"> -->
                  <!-- <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" /> -->
                  <!-- <component :is="post.icon" class="h-36 w-36 text-white items-center justify-center" aria-hidden="true" /> -->
                  <!-- <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a :href="post.author.href">
                        <span class="absolute inset-0" />
                        {{ post.author.name }}
                      </a>
                    </p>
                    <p class="text-gray-600">{{ post.author.role }}</p>
                  </div> -->
                <!-- </div>
              </div> -->
            </div>
          </article>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, GlobeAmericasIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

/*
defineProps({
  policies: {
    type: Array,
      default: [
        {
          id: 1,
          title: 'Payments',
          href: '#',
          description:
            'To reserve your date with us we will have you sign our contract agreement and give us 50% deposit. At the rehearsal we will collect the remaining 50%. \n\nWe accept the following forms of payment:\n- Cash\n- Apple Pay\n- Pay Pal\n- Money Order\n- Cashier’s Check\n',
          icon:
            CurrencyDollarIcon,
        },
        {
          id: 2,
          title: 'Travel beyond Albuquerque, Rio Rancho and Santa Fe',
          href: '#',
          description:
            'We would love to work with you outside our home area. Depending on time of travel, distance and accommodations needed additional cost will be required. We will discuss this on a case-by-case basis and ensure a tailored experience and fair price for every couple.',
          icon:
            GlobeAmericasIcon,
        },
        {
          id: 3,
          title: 'Refunds',
          href: '#',
          description:
            'If the event is cancelled prior to Duke City Ministries starting planning, any meetings, or the start of creation of your ceremony a full refund will be provided. If the event is cancelled after the planning process has begun, the deposit will not be refunded. Once rehearsal is complete, and full payment is made, refunds will not be provided.',
          icon:
            CurrencyDollarIcon,
        },
      ],
  },
})
*/

const policies = [
  {
    id: 1,
    title: 'Payments',
    href: '#',
    description:
      'To reserve your date with us we will have you sign our contract agreement and give us 50% deposit. At the rehearsal we will collect the remaining 50%. \n\nWe accept the following forms of payment:\n- Cash\n- Apple Pay\n- Pay Pal\n- Money Order\n- Cashier’s Check\n',
    icon:
      CurrencyDollarIcon,

  },
  {
    id: 2,
    title: 'Travel beyond Albuquerque, Rio Rancho and Santa Fe',
    href: '#',
    description:
      'We would love to work with you outside our home area. Depending on time of travel, distance and accommodations needed additional cost will be required. We will discuss this on a case-by-case basis and ensure a tailored experience and fair price for every couple.',
    icon:
    GlobeAmericasIcon,

  },
  {
    id: 3,
    title: 'Refunds',
    href: '#',
    description:
      'If the event is cancelled prior to Duke City Ministries starting planning, any meetings, or the start of creation of your ceremony a full refund will be provided. If the event is cancelled after the planning process has begun, the deposit will not be refunded. Once rehearsal is complete, and full payment is made, refunds will not be provided.',
    icon:
      CurrencyDollarIcon,

  },
  // More posts...
]

</script>