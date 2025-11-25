<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
    <div class="relative isolate overflow-hidden bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent">
      <div class="absolute inset-y-0 left-1/2 -z-10 w-[120%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_45%)]" />
      <div class="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <header class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-3">
            <p class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200 ring-1 ring-white/10">
              <span class="h-2 w-2 rounded-full bg-emerald-400" />
              Levande släktforskning
            </p>
            <div class="space-y-2">
              <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl">Ancestors Explorer</h1>
              <p class="max-w-2xl text-base text-slate-200 sm:text-lg">
                Ett nytt modernt gränssnitt för den ursprungliga Disgen-exporten. Utforska person-, namn- och ortregister
                med förbättrad läsbarhet, responsiv layout och ett mobilanpassat arbetsflöde.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 text-sm text-indigo-100">
              <span class="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 ring-1 ring-indigo-400/30">
                <IconCheck /> Mobilvänlig vy
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 ring-1 ring-indigo-400/30">
                <IconCheck /> Tailwinddesign
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 ring-1 ring-indigo-400/30">
                <IconCheck /> Legacy-innehåll kvar
              </span>
            </div>
          </div>
        </header>
        <main class="mt-10">
          <NuxtPage />
        </main>
      </div>
    </div>
    <footer class="border-t border-white/5 bg-slate-950/60">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p class="font-medium text-slate-200">Anor online</p>
        <p>Skapad av Tommy Jönsson. Exporterad via Disgen 2018, nu med en modern vy.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

const IconCheck = defineComponent({
  name: 'IconCheck',
  template: `
    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.543-6.543a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  `
});
</script>
