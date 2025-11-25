<template>
  <div class="grid gap-4 lg:grid-cols-[360px,1fr]" :class="{ 'grid-cols-1': !showNav }">
    <div v-if="showNav" class="flex flex-col gap-3 rounded-xl border border-white/5 bg-slate-900/60 p-4 shadow-inner shadow-black/30">
      <div class="flex items-center justify-between text-sm font-semibold text-slate-100">
        <span>Register</span>
        <span class="rounded-full bg-white/10 px-3 py-1 text-[11px] text-indigo-100 ring-1 ring-white/10">Legacy</span>
      </div>
      <p class="text-xs text-slate-300">
        Navigationslistan laddas direkt från de befintliga HTML-sidorna. Klickar du på en länk öppnas innehållet i panelen till höger.
      </p>
      <div class="relative overflow-hidden rounded-lg border border-white/5 bg-slate-950/70 shadow">
        <iframe
          :src="navSrc"
          name="nav"
          title="Register-navigering"
          class="h-[420px] w-full overflow-auto bg-white"
        />
        <div class="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />
      </div>
    </div>

    <div class="flex flex-col gap-3 rounded-xl border border-indigo-500/20 bg-slate-900/80 p-4 shadow-xl shadow-indigo-900/30">
      <div class="flex items-center justify-between text-sm font-semibold text-slate-100">
        <div class="flex items-center gap-2">
          <span class="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          Huvudinnehåll
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-100 ring-1 ring-indigo-400/30 transition hover:bg-indigo-500/25"
          @click="$emit('update:main-src', '/picpage.htm')"
        >
          <IconHome class="h-3.5 w-3.5" /> Starta om
        </button>
      </div>
      <div class="relative overflow-hidden rounded-lg border border-indigo-500/30 bg-slate-950/80 shadow">
        <iframe
          :src="mainSrc"
          name="main"
          title="Legacy-innehåll"
          class="min-h-[480px] w-full overflow-auto bg-white"
        />
        <div class="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-indigo-500/30" />
      </div>
      <p class="text-xs text-slate-300">
        De gamla sidorna behåller sin funktionalitet men bäddas in i en responsiv layout. På små skärmar staplas panelerna så att innehållet
        blir enklare att läsa.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineProps<{
  navSrc: string;
  mainSrc: string;
  showNav: boolean;
}>();

defineEmits<{
  'update:main-src': [string];
}>();

const IconHome = defineComponent({
  name: 'IconHome',
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.3 2.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 16.7 10H16v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3H9v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6h-.7a1 1 0 0 1-.7-1.7Z" />
    </svg>
  `
});
</script>
