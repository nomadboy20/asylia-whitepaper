<template>

  <div class="">

    <UContainer class=" min-h-screen   flex flex-col justify-between w-screen">

      <div id="cursor-glow" class="fixed inset-0 pointer-events-none z-40"></div>

      <div class="flex py-6 items-center justify-between">

        <div @click="g='0'" class="flex hover:cursor-pointer space-x-4 items-center">

          <Logo class="w-12 text-slate-700 dark:text-white h-auto"/>
          <div class="flex flex-col">
            <div class="text-4xl   text-primary text-ano font-bold">
              Asylia.io
            </div>
            <div class="text-center mt-1 pl-2 relative text-sm flex items-center ">
              <span class="block text-slate-800 dark:text-gray-400 italic">&ldquo;Arx, Imperium, Ostium&rdquo; - Pevnosť, moc, brána.</span>
            </div>
          </div>
        </div>

        <div class="flex space-x-5 grow max-w-[40%] items-center">
          <UTabs v-model="g" :items="items" :content="false" class="w-full"/>
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
                :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                color="neutral"
                variant="ghost"
                @click="isDark = !isDark"
            />

            <template #fallback>
              <div class="size-8"/>
            </template>
          </ClientOnly>
          <USelect v-model="lang" size="sm" :items="LANGUAGES" value-key="value" :icon="icon" class="w-24"/>
        </div>

      </div>

      <template v-if="g === '0'">

        <div class="master-intro mt-12 text-slate-500 dark:text-gray-400 text-3xl md:text-5xl leading-snug">
          <div v-html="displayedHtml"></div>
        </div>

        <div class="mt-6 p-4 border-l-4 border-yellow-600 text-slate-600 dark:text-gray-300 italic text-lg max-w-2xl">
          &ldquo;Vaše Kľúče. Vaše Bitcoiny. Vaše kráľovstvo. <br/> – Nemeniteľná istota.&rdquo;
        </div>

        <div @click="scrollToWStart"
             class="text-center py-6 group hover:cursor-pointer  text-lg flex items-center justify-center space-x-4   text-yellow-500"
             :class="{'opacity-0':!isScrolledTop}"
        >
          <span class="opacity-75 group-hover:opacity-100">Read whitepaper {{ isScrolledTop }}</span>
          <font-awesome :icon="['fal', 'computer-mouse-scrollwheel']"
                        class="opacity-50 animate-bounce-slow group-hover:opacity-75"/>
        </div>

      </template>

      <RoadMap v-else/>

    </UContainer>

    <WhitePaper v-if="g === '0'"/>

    <UContainer>

      <h1 class="text-4xl text-center font-bold  text-slate-800 dark:text-white mt-14">
        Náš tým.
      </h1>
      <p class="italic mt-4 text-center text-slate-600 dark:text-gray-500 mb-10">
        „Opus tam validum est quam artifices eius.“ <br/> - Dielo je také silné, akí sú jeho tvorcovia.
      </p>

      <div class="w-full flex text-center justify-center mt-8">

        <div class="flex items-center space-x-8">
          <div class="flex flex-col items-center space-y-2 shrink-0">
            <img src="/images/david-zita.jpg" class="rounded-full w-48 h-48 object-cover"/>
            <p class="text-2xl  text-slate-600 dark:text-gray-100 font-bold">
              Dávid Zita
            </p>
          </div>
          <div class="text-left">
            <p class="text-slate-600 dark:text-gray-400 text-lg mt-2">
              Zakladateľom ,autorom a core vývojarom projektu Asylia.io je dlhoročný technologický profesionál s viac
              než desaťročnou praxou v oblasti vývoja webových a mobilných aplikácií, bezpečnostných riešení a
              decentralizovaných technológií.

              Poháňaný osobným presvedčením o význame suverenity, súkromia a bezpečnosti, spojil skúsenosti z
              technológie a hlboké pochopenie princípov Bitcoinu do projektu, ktorého cieľom je poskytnúť skutočne
              bezpečné a nezávislé custody riešenie.

              Asylia vznikla z jednoduchej, ale pevnej viery:

            </p>

            <blockquote class="border-l-4 border-yellow-600 pl-4 italic my-4 text-slate-800 dark:text-gray-300">
              „Skutočné vlastníctvo znamená aj skutočnú zodpovednosť.“
            </blockquote>

            <p class="text-slate-600 dark:text-gray-400 text-lg mt-2">
              Projekt Asylia.io nie je marketingový experiment, ale dlhodobý záväzok k budovaniu bezpečnejšieho Bitcoin
              ekosystému, postaveného na čestnosti, tradičných hodnotách a technickej precíznosti.

            </p>
          </div>

        </div>

      </div>

      <div class="w-full border-t border-gray-300 dark:border-gray-700 mt-12"></div>

      <EmailForm/>

      <SupportBanner class="mt-14"/>
      <div>
        <div class=" p-4 mt-12 w-full text-right  text-slate-800 dark:text-gray-300 italic text-lg ">
          &ldquo;Crafting in Czech republic.&rdquo;
        </div>
      </div>
      <footer
          class=" py-4 mt-3 w-full mx-auto text-center text-sm text-slate-800 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
        <div>
          &copy; 2025 Asylia.io — Stavia na dôvere a stabilite. Kontakt: info@asylia.io
        </div>
      </footer>
    </UContainer>
  </div>

</template>

<script setup>

import Logo from "~/components/icons/logo/logo.vue";
import EmailForm from "~/components/EmailForm.vue";
import SupportBanner from "~/components/SupportBanner.vue";
import RoadMap from "~/components/RoadMap.vue";

const SCROLL_THRESHOLD = 60; // Konštanta, koľko px tolerujeme
const isScrolledTop = ref(true); // Refka, ktorú budeš používať

function handleScroll() {
  isScrolledTop.value = window.scrollY - SCROLL_THRESHOLD <= 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Pre istotu nastavíme aj pri mountnutí
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const LANGUAGES = ref([
  {
    label: 'Cs',
    value: 'cs-Cz',
    icon: 'flagpack:cz'
  },
  {
    label: 'Sk',
    value: 'sk-Sk',
    icon: 'flagpack:sk'
  },
  {
    label: 'En',
    value: 'en-Uk',
    icon: 'flagpack:gb-ukm'
  }
])

const lang = ref(LANGUAGES.value[0]?.value)
const icon = computed(() => LANGUAGES.value.find(item => item.value === lang.value)?.icon)

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const g = ref("0")
const items = ref([
  {
    label: 'Whitepaper',
    icon: 'i-lucide-scroll',
  },
  {
    label: 'Roadmap',
    icon: 'i-streamline:arrow-roadmap',
  }
])

onMounted(() => {
  const glow = document.getElementById('cursor-glow')
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    if (isDark.value) {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(250, 204, 21, 0.15), transparent 300px)`
    } else {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(29, 41, 61, 0.15), transparent 300px)`
    }
  })
})

const fullHtml = `
  „<b class=" text-primary dark:text-white">Bitcoinová pevnosť</b>,
  kde <b class="text-slate-600 dark:text-gray-200">suverenita</b> stretáva
  <b class="text-slate-600 dark:text-gray-200">bezpečnosť.</b>
  <b class="text-primary dark:text-white"> Ochránte</b> vaše digitálne
  <b class="text-slate-600 dark:text-gray-200">bohatstvo</b> pomocou overenej
  <b class="text-primary dark:text-white">multisignature technológiou.</b>
  Pretože skutočné
  <b class="text-slate-600 dark:text-gray-200">vlastníctvo</b> znamená
  <b class="text-slate-600 dark:text-gray-200">zodpovednosť</b> – dnes aj pre
  <b class="text-slate-600 dark:text-gray-200">generácie</b>, ktoré prídu po nás.“
`;

const displayedHtml = ref('')
onMounted(() => {
  let i = 0
  const speed = 15 // ms na písmeno
  let currentHtml = ''

  function typeHtml() {
    if (i >= fullHtml.length) return

    if (fullHtml[i] === '<') {
      // Sme na začiatku tagu
      const endTag = fullHtml.indexOf('>', i)
      if (endTag !== -1) {
        currentHtml += fullHtml.slice(i, endTag + 1)
        i = endTag + 1
      }
    } else {
      // Bežný znak mimo tagu
      currentHtml += fullHtml[i]
      i++
    }

    displayedHtml.value = currentHtml
    setTimeout(typeHtml, speed)
  }

  typeHtml()
})

const scrollToWStart = () => {
  const element = document.getElementById('white-paper-start')
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}

</script>

<style>
#cursor-glow {
  transition: background 0.21s ease;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
</style>
