<script setup>
import { useSongStore } from '@/stores/song'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useSongProgress } from '@/composables/UseSongTime'
import { watch } from 'vue'
const songStore = useSongStore()

const { duration, currentTime } = useSongProgress()

const onclickPlay = () => {
  songStore.resumeSong()
}

const onclickPause = () => {
  songStore.stopSong()
}
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
        <span class="text-white text-sm">{{ songStore.artistsInfo.songPlayed }}</span>
        <span class="text-sm text-neutral-700">{{ songStore.artistsInfo.name }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-x-2">
      <div class="flex items-center cursor-pointer justify-center gap-x-4">
        <Icon
          icon="material-symbols:skip-previous"
          width="35"
          height="35"
          class="text-neutral-200"
        />
        <div class="bg-white rounded-full">
          <Icon
            v-if="songStore.isPlaying && !songStore.isPaused"
            icon="material-symbols:pause-outline-rounded"
            width="35"
            height="35"
            style="color: #040404"
            @click="onclickPause"
          />
          <Icon
            v-else
            icon="material-symbols:play-arrow-rounded"
            width="35"
            height="35"
            style="color: #040404"
            class="cursor-pointer"
            @click="onclickPlay"
          />
        </div>
        <Icon
          icon="material-symbols:skip-next"
          width="35"
          height="35"
          class="text-neutral-200 cursor-pointer"
        />
      </div>
      <div class="flex items-center text-center text-neutral-300 justify-center gap-x-2">
        <span>{{ currentTime }}</span>
        <div>barra de carga de cancion</div>
        <div>{{ duration }}</div>
      </div>
    </div>

    <div class="flex flex-col gap-x-2">
      <span class="text-white text-sm">{{ songStore.artistsInfo.songPlayed }}</span>
      <span class="text-sm text-neutral-700">{{ songStore.artistsInfo.name }}</span>
    </div>
  </div>
</template>
