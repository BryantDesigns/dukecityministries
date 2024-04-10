import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, GlobeAmericasIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'

export default {
policies: [
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
};