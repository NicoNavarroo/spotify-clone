<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import type { Ref } from 'vue'

import Navbar from './components/Navbar.vue'
import PlayList from './components/PlayList.vue'
import MusicPlayer from './components/MusicPlayer.vue'
let openMenu: Ref<boolean> = ref(false)
</script>

<template>
  <div class="flex bg-black h-screen p-2 gap-2">
    <div class="hidden md:flex flex-col bg-black gap-y-2 h-full w-[300px]">
      <div
        class="bg-neutral-900 rounded-lg flex flex-col gap-y-3 text-neutral-400 !px-5 !py-4 w-full"
      >
        <Navbar />
      </div>
      <div
        class="bg-neutral-900 rounded-lg h-full flex flex-col gap-y-3 px-5 !py-4 overflow-y-auto w-full"
      >
        <PlayList />
      </div>
    </div>
    <div class="bg-neutral-900 rounded-lg h-full overflow-hidden overflow-y-auto w-full">
      <RouterView />
    </div>

    <MusicPlayer />
  </div>
</template>
