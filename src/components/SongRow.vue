<script setup>
import { ref, toRefs, onMounted, computed } from 'vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import { useSongStore } from '@/stores/song'

const emit = defineEmits(['update:song'])
let isHover = ref(false)
const isTrackTime = ref('0:00')
const songStore = useSongStore()

const props = defineProps({
  track: Object,
  artist: Object,
  index: Number,
})

const { track, artist, index } = toRefs(props)

const isSameSong = computed(() => {
  return songStore.artistsInfo.songPlayed === props.track.name
})
const showPauseIcon = computed(() => {
  return songStore.isPlaying && !songStore.isPaused && isSameSong.value
})
onMounted(() => {
  const audio = new Audio(track.value.path)
  audio.addEventListener('loadedmetadata', function () {
    const duration = audio.duration
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    isTrackTime.value = minutes + ':' + seconds.toString().padStart(2, '0')
  })
})
</script>

<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center w-full py-1.5">
      <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
        <Pause v-if="showPauseIcon" fillColor="#FFFFFF" :size="25" @click="songStore.stopSong" />
        <Play @click="emit('update:song', track)" v-else fillColor="#FFFFFF" :size="25" />
      </div>
      <div v-else class="text-white font-semibold w-[40px] ml-5">
        <span class="text-neutral-500 text-font-semibold">
          {{ index }}
        </span>
      </div>
      <div>
        <div
          class="font-semibold"
          :class="{ 'text-emerald-500': isSameSong, 'text-white': !isSameSong }"
        >
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">{{ artist.name }}</div>
      </div>
    </div>
    <div class="flex items-center">
      <button type="button" v-if="isHover">
        <Heart fillColor="#1BD760" :size="22" />
      </button>
      <div v-if="isTrackTime" class="text-xs !mx-5 text-gray-400">
        {{ isTrackTime }}
      </div>
    </div>
  </li>
</template>
