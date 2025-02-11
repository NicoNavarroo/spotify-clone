<script setup lang="ts">
import Settings from '@/components/Settings.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
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
        <div v-for="artist in 3" :key="artist">
          <div class="rounded-full">
            <div
              class="h-fit group relative group p-4 hover:bg-neutral-800 transition cursor-pointer"
            >
              <div
                class="opacity-0 translate-y-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 bg-emerald-500 absolute w-13 h-13 bottom-22 right-5 rounded-full flex justify-center text-center items-center"
              >
                <Icon icon="material-symbols:play-arrow-rounded" width="2rem" class="h-full" />
              </div>
              <img
                src="https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13"
                class="rounded-full"
              />

              <div class="flex flex-col gap-y-1 mt-2">
                <span class="text-white">Bad Bunny</span>
                <span class="text-neutral-400">Artista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
