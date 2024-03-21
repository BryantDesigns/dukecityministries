<template>
  <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
            <p>{{ `“${featuredTestimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
            <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
            <div class="flex-auto">
              <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
              <div class="text-gray-600">{{ `@${featuredTestimonial.author.handle}` }}</div>
            </div>
            <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredTestimonial = {
  body: 'We wanted a small, intimate wedding at the top of the Sandia Crest. Mike was able to create a custom wedding ceremony just for us, including our three sons, and blending our family together in addition to joining us in marriage. I was perfect.',
  author: {
    name: 'D. & J.',
    handle: 'dandj',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Mike performed our wedding on top of the bank building in downtown Albuquerque. Mike handled our large wedding party and made the ceremony special for me and my new husband. We highly recommend his services.',
        author: {
          name: 'K. & R.',
          handle: 'kandr',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Our pastor, who we had engaged to perform our wedding ceremony months before the wedding date, had a last-minute emergency leaving us without a minister only a few days before our wedding. A friend recommended we call Mike, and he was able to come right in, take over and get the perfect ceremony put together for us. He saved the day.',
        author: {
          name: 'D. & R.',
          handle: 'dandr',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'During our ceremony our DJ had an audio mishap causing the microphone and speaker to cut out mid ceremony. Mike was able to carry on, project his voice and ensure that the ceremony continued. He kept me calm and focused on the reason we were all there. I appreciate him so much and would recommend him to any bride or groom planning a wedding.',
        author: {
          name: 'A. & T.',
          handle: 'aandt',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: '2020 was crazy enough, not to mention wedding planning. Mike was able to tailor our ceremony exactly for our needs. He made this event stress free in an otherwise stressful year.',
        author: {
          name: 'S. & C.',
          handle: 'sandc',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]
</script>