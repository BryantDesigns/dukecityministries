<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

// const frequencies = [
//   { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
//   { value: 'annually', label: 'Annually', priceSuffix: '/year' },
// ]

const frequencies = [
  { value: 'event', label: 'One Time', priceSuffix: '/event' },
]


const tiers = [
  {
    name: 'Roadrunner',
    id: 'tier-roadrunner',
    href: '#',
    price: { event: '$200' },
    description: 'This is the simple, quick and affordable ceremony option for couples, requiring 48 hours’ notice. The ceremony will be Duke City Ministries basic wedding ceremony, with the option of religious or non-religious themes.',
    features: ['30-minute call or meeting to review the ceremony and do a short rehearsal.', 'Day of Event – 30 minutes for the ceremony and signing of the marriage license.'],
    featured: false,
    cta: 'Buy package',
  },
  {
    name: 'Zia',
    id: 'tier-zia',
    href: '#',
    price: { event: '$400' },
    description: 'This package includes the creation of a custom wedding ceremony and vows in partnership with our wedding officiant during a 30-minute planning call or meeting, ideally at least 30 days prior to the event date. Our officiant will hold a rehearsal for you, your fiancé and the wedding party prior to the event date. On the day of the wedding our officiant will reserve an hour for your ceremony and the signing of the marriage license. ',
    features: [
      '30-minute planning call or meeting',
      '30-minute pre-wedding rehearsal',
      'Day of Event – 1 hour for the ceremony and signing of the marriage license.',
    ],
    featured: false,
    cta: 'Buy package',
  },
  {
    name: 'Turquoise',
    id: 'tier-turquoise',
    href: '#',
    price: { event: '$550' },
    description: 'This is the full-service ceremony package offered by Duke City Ministries. This includes a custom ceremony created with our officiant during a planning call or meeting, ideally at least a month prior to the event date. Two weeks prior to the event, our officiant will check in with you and your fiancé to run through the ceremony plan and make any last-minute changes to the ceremony. Our officiant will also run a pre-wedding rehearsal for you, your fiancé and the wedding party. The day of the wedding, our officiant will reserve an hour and a half for your ceremony and signing of the marriage license. The bonus to this package is our Officiant will have your marriage license registered for you, returning to you three copies for records. This is the full-service package taking care of all your needs.',
    features: [
      '30 minutes planning call or meeting',
      '15-minute check in call 2 weeks from event',
      '45-minute pre-wedding rehearsal',
      '1-hour, dedicated support response time',
      'Day of event – 1 ½ hours for the ceremony and signing of the marriage license.',
      'Officiant registers your marriage license, retuning 3 additional copies',
    ],
    featured: false,
    cta: 'Buy package',
  },
  {
    name: 'Bosque',
    id: 'tier-bosque',
    href: '#',
    price: { event: '$600' },
    description: 'The day of wedding coordination service, offered by Duke City Ministries allows you to enjoy your big day and leave all the organization, execution and details to us. This is ideal for DIY brides and grooms who want to hand off that day of planning to enjoy all the hard work they have done! Our package includes a 1-hour planning session, ideally at least one month prior to the event. Two weeks prior to the event date our coordination will have a check in call with you and another call one week out from the event. Our coordinator will also run a one-hour rehearsal for you, your fiancé and the wedding party prior to the wedding. The day of your wedding coordinator will reserve 5 hours for the event, 2 hours prior to the ceremony for set up coordination and three hours for the ceremony and reception. Our coordinator will keep the event running according to the schedule, ensure all the pieces come together on the day. If you are interested in changing the allotment of the 5 hours, that is possible as well. Each additional hour will be $50 each, scheduled in advance. This package allows you to enjoy your event completely and leave the coordination to Duke City Ministries.',
    features: [
      '1 hour planning session ',
      '30-minute check in call two weeks prior to event',
      '30-minute check in call one week prior to event',
      '1 hour pre-wedding rehearsal',
      'Day of event – 5 hours total'],
    featured: false,
    cta: 'Buy package',
  },
  {
    name: 'Rio Grande',
    id: 'tier-riogrande',
    href: '#',
    price: { event: '$900' },
    description: 'This package is the Zia Ceremony Package + The Bosque Day of Coordination Package. When booked together, and in advance, save 10% off total cost of the two packages. In this package, additional hours for our coordinator, also booked in advanced, receive the 10% discount as well, $45 per hour.',
    features: [
      '30-minute planning call or meeting with officiant',
      '1 hour planning session with coordinator',
      '30-minute check in call two weeks prior to event with coordinator',
      '30-minute check in call one week prior to event with coordinator',
      '1 hour pre-wedding rehearsal with officiant and coordinator',
      'Day of event – Coordinator – 5 hours total',
      'Day of Event – Officiant – 1 hour for the ceremony and signing of the marriage license'
    ],
    featured: false,
    cta: 'Buy package',
  },
  {
    name: 'Sandia Peak',
    id: 'tier-sandiapeak',
    href: '#',
    price: { event: '$1035' },
    description: 'This package is the Turquoise Ceremony Package + The Bosque Day of Coordination Package. When booked together, and in advance, save 10% off total cost of the two packages. In this package, additional hours for our coordinator, also booked in advanced, receive the 10% discount as well, $45 per hour.',
    features: [
      '30-minute planning call or meeting with officiant',
      '1 hour planning session with coordinator',
      '30-minute check in call two weeks prior to event with coordinator',
      '15-minute check in call 2 weeks from event with officiant',
      '30-minute check in call one week prior to event with coordinator',
      '1 hour pre-wedding rehearsal with officiant and coordinator',
      'Day of event – Coordinator – 5 hours total',
      'Day of Event – Officiant – 1 ½ hours for the ceremony and signing of the marriage license',
      'Officiant registers your marriage license, retuning 3 additional copies',
    ],
    featured: false,
    cta: 'Buy package',
  },
]

const frequency = ref(frequencies[0])
</script>
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
        <!-- <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for teams of all sizes</p> -->
      </div>
      <!-- <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p> -->
      <!-- <div class="mt-16 flex justify-center">
        <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
            <div :class="[checked ? 'bg-indigo-600 text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div> -->
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="tier in tiers" :key="tier.id" :class="[tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200', 'rounded-3xl p-8 ring-1 xl:p-10']">
          <h3 :id="tier.id" :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-lg font-semibold leading-8']">{{ tier.name }}</h3>
          <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm leading-6']">{{ tier.description }}</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-4xl font-bold tracking-tight']">{{ typeof tier.price === 'string' ? tier.price : tier.price[frequency.value] }}</span>
            <span v-if="typeof tier.price !== 'string'" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'text-sm font-semibold leading-6']">{{ frequency.priceSuffix }}</span>
          </p>
          <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white' : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">{{ tier.cta }}</a>
          <ul role="list" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm leading-6 xl:mt-10']">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
              <CheckIcon :class="[tier.featured ? 'text-white' : 'text-indigo-600', 'h-6 w-5 flex-none']" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>