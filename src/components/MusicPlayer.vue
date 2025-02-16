<script setup>
import { useSongStore } from '@/stores/song'
import { useAudioPlayer } from '@/composables/UseSongTime'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { isPlaying, isPaused, audio, artistsInfo } = storeToRefs(useSong)
const { isTrackTimeCurrent, isTrackTimeTotal } = useAudioPlayer()
const onclickPlay = () => {
  useSong.resumeSong()
}

const onclickPause = () => {
  useSong.stopSong()
}
</script>

<template>
  <div
    id="MusicPlayer"
    v-if="audio"
    class="fixed flex items-center px-2 justify-between bottom-0 w-full z-50 h-[80px] bg-[#181818] border-t border-t-[#272727]"
  >
    <div class="flex items-center gap-x-2">
      <img class="h-15" :src="artistsInfo.albumCover" alt="" />

      <div class="flex flex-col gap-x-2">
        <span class="text-white text-sm">{{ artistsInfo.songPlayed }}</span>
        <span class="text-sm text-neutral-700">{{ artistsInfo.name }}</span>
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
            v-if="isPlaying && !isPaused"
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
        <span>{{ isTrackTimeCurrent }}</span>
        <div>barra de carga de cancion</div>
        <div>{{ isTrackTimeTotal }}</div>
      </div>
    </div>

    <div class="flex flex-col gap-x-2">
      <span class="text-white text-sm">{{ artistsInfo.songPlayed }}</span>
      <span class="text-sm text-neutral-700">{{ artistsInfo.name }}</span>
    </div>
  </div>
</template>
