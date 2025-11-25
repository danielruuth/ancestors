<template>
  <div class="space-y-10">
    <section class="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div class="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-indigo-900/20 backdrop-blur">
        <h2 class="text-xl font-semibold text-white sm:text-2xl">Välj register</h2>
        <p class="mt-2 text-sm text-slate-300 sm:text-base">
          Allt originalmaterial finns kvar i statiska HTML-filer. Här styr du vilka listor som öppnas i navigationspanelen, och
          detaljerna visas i den stora ytan till höger.
        </p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <button
            v-for="register in registers"
            :key="register.key"
            class="group flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-left shadow-lg shadow-black/20 transition hover:border-indigo-400/40 hover:shadow-indigo-900/30"
            :class="{ 'border-indigo-400/50 bg-indigo-500/10 ring-1 ring-indigo-300/40': register.key === activeRegister.key }"
            @click="selectRegister(register)"
          >
            <div class="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-200">
              <component :is="register.icon" class="h-5 w-5" />
            </div>
            <div class="space-y-1">
              <p class="text-base font-semibold text-white">{{ register.title }}</p>
              <p class="text-sm leading-relaxed text-slate-300">{{ register.description }}</p>
              <p class="text-xs uppercase tracking-wide text-indigo-200/80">Start: {{ register.start }}</p>
            </div>
          </button>
        </div>
        <div class="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Direktlänkar öppnas i huvudytan</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Skalbar layout för små skärmar</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Legacy HTML läses via iframes</span>
        </div>
      </div>
      <div class="rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-xl shadow-black/30 backdrop-blur">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-indigo-200">Snabbåtgärder</p>
            <h3 class="text-xl font-semibold text-white">Start- och stödresurser</h3>
            <p class="text-sm text-slate-300">Öppna startsidan eller byt panelvy för mobil.</p>
          </div>
          <button
            class="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-4 py-2 text-sm font-semibold text-indigo-100 ring-1 ring-indigo-400/30 transition hover:bg-indigo-500/25"
            @click="resetView"
          >
            <IconRefresh class="h-4 w-4" /> Återställ vy
          </button>
        </div>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            class="flex items-center justify-between rounded-xl bg-indigo-500/10 px-4 py-3 text-left text-sm font-semibold text-indigo-100 ring-1 ring-indigo-400/30 transition hover:bg-indigo-500/15"
            @click="openStart"
          >
            <span>Visa startsidan</span>
            <IconArrow class="h-4 w-4" />
          </button>
          <button
            class="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-semibold text-slate-100 ring-1 ring-white/10 transition hover:bg-white/10"
            @click="toggleNav"
          >
            <span>{{ showNav ? 'Göm' : 'Visa' }} navigering</span>
            <IconEye class="h-4 w-4" />
          </button>
        </div>
        <p class="mt-4 text-xs text-slate-400">
          Navigationspanelen laddar de befintliga registerfilerna. När du trycker på en länk där öppnas själva innehållet i huvudpanelen
          bredvid, precis som i den ursprungliga ram-lösningen.
        </p>
      </div>
    </section>

    <section class="rounded-2xl border border-white/5 bg-slate-900/70 p-4 shadow-2xl shadow-black/30 backdrop-blur">
      <div class="flex flex-col gap-3 border-b border-white/5 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-indigo-200">Visning</p>
          <h3 class="text-xl font-semibold text-white">Register och detaljer</h3>
          <p class="text-sm text-slate-300">Nuxt/Vue styr layouten medan legacy-HTML fortsätter att leverera det faktiska innehållet.</p>
        </div>
        <div class="flex flex-wrap gap-2 text-xs text-slate-300">
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Mobilvänlig stackning</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Separata paneler</span>
        </div>
      </div>
      <LegacyViewer
        :nav-src="navSrc"
        :main-src="mainSrc"
        :show-nav="showNav"
        class="mt-4"
        @update:main-src="(val) => (mainSrc = val)"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const PersonIcon = defineComponent({
  name: 'PersonIcon',
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-6 1.62-6 3.62V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.38C18 15.62 15.33 14 12 14Z" />
    </svg>
  `
});

const SurnameIcon = defineComponent({
  name: 'SurnameIcon',
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 5a1 1 0 0 1 1-1h10a5 5 0 0 1 0 10H7v4a1 1 0 0 1-2 0Zm2 7h9a3 3 0 0 0 0-6H6Z" />
    </svg>
  `
});

const PlaceIcon = defineComponent({
  name: 'PlaceIcon',
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 4.52 5.49 11.22 6.35 12.18a1 1 0 0 0 1.3 0C13.51 20.22 19 13.52 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  `
});

const registers = [
  {
    key: 'person',
    title: 'Personregister',
    description: 'Bläddra alfabetiskt bland personerna i släktträdet.',
    start: '2-1.htm',
    navSrc: '/2-1.htm',
    icon: PersonIcon
  },
  {
    key: 'surname',
    title: 'Efternamnsregister',
    description: 'Sorterat efter efternamn med länkar till samma detaljer.',
    start: '3-1.htm',
    navSrc: '/3-1.htm',
    icon: SurnameIcon
  },
  {
    key: 'place',
    title: 'Ortsregister',
    description: 'Visa personer grupperade efter orter och platser.',
    start: '4-1.htm',
    navSrc: '/4-1.htm',
    icon: PlaceIcon
  }
];

const activeRegister = ref(registers[0]);
const navSrc = ref(activeRegister.value.navSrc);
const mainSrc = ref('/picpage.htm');
const showNav = ref(true);

const selectRegister = (register: (typeof registers)[number]) => {
  activeRegister.value = register;
  navSrc.value = register.navSrc;
};

const openStart = () => {
  mainSrc.value = '/picpage.htm';
};

const toggleNav = () => {
  showNav.value = !showNav.value;
};

const resetView = () => {
  selectRegister(registers[0]);
  openStart();
  showNav.value = true;
};

const IconRefresh = defineComponent({
  name: 'IconRefresh',
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M3.04 7.06A7 7 0 0 1 17 9a1 1 0 0 1-2 0 5 5 0 1 0-1.06 3H12a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-1.77A7 7 0 1 1 3.04 7.06Z" />
    </svg>
  `
});

const IconArrow = defineComponent({
  name: 'IconArrow',
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5A1 1 0 0 1 9.3 14.3L12.59 11H4a1 1 0 0 1 0-2h8.59L9.3 5.7a1 1 0 0 1 0-1.4Z" />
    </svg>
  `
});

const IconEye = defineComponent({
  name: 'IconEye',
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 4c-4.27 0-7.52 3.07-8.94 5a1.5 1.5 0 0 0 0 2c1.42 1.93 4.67 5 8.94 5s7.52-3.07 8.94-5a1.5 1.5 0 0 0 0-2C17.52 7.07 14.27 4 10 4Zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-2a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z" />
    </svg>
  `
});
</script>
