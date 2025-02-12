<script setup lang="ts">
import Settings from '@/components/Settings.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import artists from '../data/artist.json'
import { RouterLink } from 'vue-router'

const getResponsiveClass = (index: number): string => {
  if (index < 3) return ''
  const classes = [
    'sm:block hidden', // Muestra el 4to en sm (≥640px)
    'md:block hidden', // Muestra el 5to en md (≥768px)
    'lg:block hidden',
  ]
  return classes[index - 3] || 'hidden'
}
</script>

<template>
  <div>
    <div class="h-fit bg-linear-to-b from-emerald-800 !p-6">
      <div>
        <Settings />
      </div>

      <span class="text-white text-2xl font-semibold">Welcome back</span>
    </div>

    <div class="flex flex-col gap-y-4 p-6">
      <span class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >Artistas populares</span
      >
      <div class="flex gap-x-2">
        <div v-for="(artist, index) in artists" :key="artist.id" :class="getResponsiveClass(index)">
          <div class="rounded-full">
            <RouterLink :to="`library/${artist.id}`">
              <div
                class="h-fit group relative group p-4 hover:bg-neutral-800 hover:bg-linear-to-b from-neutral-900 rounded-lg transition cursor-pointer"
              >
                <div
                  class="opacity-0 translate-y-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 bg-emerald-500 absolute w-10 h-10 xl:w-13 xl:h-13 lg:w-8 lg:h-8 bottom-20 right-5 rounded-full flex justify-center text-center items-center"
                >
                  <Icon icon="material-symbols:play-arrow-rounded" width="2rem" class="h-full" />
                </div>
                <img :src="artist.artistImage" class="rounded-full" />

                <div class="flex flex-col gap-y-1 mt-2">
                  <span class="text-white">{{ artist.name }}</span>
                  <span class="text-neutral-400">Artista</span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
