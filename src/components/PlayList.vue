<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<template>
  <div>
    <div class="flex items-center text-neutral-400 justify-between">
      <div class="flex items-center gap-x-2">
        <Icon icon="mdi:library-bookmark" class="text-lg" />
        <span>Your library</span>
      </div>

      <div class="hover:bg-neutral-800 hover:text-white transition duration-300 rounded-full p-1">
        <Icon icon="material-symbols:add" class="cursor-pointer text-xl" />
      </div>
    </div>
    <div class="flex flex-col gap-y-2 text-white mt-4">list of songs</div>
  </div>
</template>
