<script setup>
import { useSongStore } from '@/stores/song'

const songStore = useSongStore()
</script>

<template>
  <div
    id="MusicPlayer"
    v-if="songStore.isPlaying || songStore.isPaused"
    class="fixed flex items-center px-2 justify-between bottom-0 w-full z-50 h-[80px] bg-[#181818] border-t border-t-[#272727]"
  >
    <div class="flex items-center gap-x-2">
      <img class="h-15" :src="songStore.artistsInfo.albumCover" alt="" />

      <div class="flex flex-col gap-x-2">
        <span class="text-white text-sm">{{ songStore.artistsInfo.songName }}</span>
        <span class="text-sm text-neutral-700">{{ songStore.artistsInfo.name }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-x-2">
      <span class="text-white text-sm">{{ songStore.artistsInfo.songName }}</span>
      <span class="text-sm text-neutral-700">{{ songStore.artistsInfo.name }}</span>
    </div>

    <div class="flex flex-col gap-x-2">
      <span class="text-white text-sm">{{ songStore.artistsInfo.songName }}</span>
      <span class="text-sm text-neutral-700">{{ songStore.artistsInfo.name }}</span>
    </div>
  </div>
</template>
