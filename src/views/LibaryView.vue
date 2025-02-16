<script setup>
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue'
import artists from '../data/artist.json'
import SongRow from '@/components/SongRow.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useSongStore } from '@/stores/song'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

const route = useRoute()
const songsStore = useSongStore()

const selectedArtist = ref({})

const totalSongs = computed(() => {
  return selectedArtist.value.tracks?.length
})
onMounted(() => {
  selectedArtist.value = artists.find((artist) => artist.id === Number(route.params.id))
  songsStore.updateArtistsInfo({ ...selectedArtist.value })
})

const clickSong = (song) => {
  if (!songsStore.isPaused || songsStore.artistsInfo.songPlayed !== song.name) {
    songsStore.updateArtistsInfo({ songPlayed: song.name, songPath: song.path })
    songsStore.playSong(song.path)
  }
  songsStore.resumeSong()
}
const onClickRandomSong = () => {
  songsStore.randomSong()
}
</script>

<template>
  <div class="h-fit bg-test-500 border-b border-neutral-800 !p-6">
    <div class="flex items-end w-full relative h-full">
      <div class="h-56 w-68">
        <img class="h-full" :src="selectedArtist.albumCover" />
      </div>

      <div class="w-full !ml-5">
        <span class="text-white font-semibold">Álbum</span>
        <div style="font-size: 4.5rem" class="text-white w-full font-bold text-3xl">
          {{ selectedArtist.albumName }}
        </div>
        <div class="flex items-center gap-x-2">
          <div>
            <img :src="selectedArtist.artistImage" class="w-6 h-6 rounded-full" />
          </div>
          <div class="text-white hover:underline cursor-pointer font-semibold">
            {{ selectedArtist.name }}
          </div>
          <div class="circle" />
          <span class="text-neutral-300 text-sm">{{ selectedArtist.releaseYear }}</span>
          <div class="circle" />
          <span class="!-ml-0.5 text-neutral-300 text-sm"> {{ totalSongs }} songs</span>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="flex !gap-4 items-center justify-start !bottom-0 !m-6">
      <div
        class="transition-all cursor-pointer duration-400 bg-emerald-500 hover:bg-emerald-400 cursor-pointer w-10 h-10 xl:w-13 xl:h-13 lg:w-8 lg:h-8 bottom-20 right-5 rounded-full flex justify-center text-center items-center"
      >
        <button class="rounded-full cursor-pointer">
          <Pause
            v-if="songsStore.isPlaying && !songsStore.isPaused"
            fillColor="#181818"
            :size="25"
            @click="songsStore.stopSong"
          />
          <Icon
            icon="material-symbols:play-arrow-rounded"
            v-else
            fillColor="#1db954"
            :size="25"
            width="2rem"
            @click="onClickRandomSong"
          />
        </button>
      </div>

      <button type="button">
        <Heart fillColor="#1BD760" :size="30" />
      </button>
      <button type="button">
        <DotsHorizontal fillColor="#FFFFFF" :size="25" />
      </button>
    </div>
  </div>
  <div class="!px-6 overflow-x-hidden">
    <div class="flex items-center justify-between !px-5">
      <div class="flex items-center justify-between text-gray-400">
        <div class="!mr-7">#</div>
        <div class="text-sm">Title</div>
      </div>
      <div><ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" /></div>
    </div>
    <div class="border-b border-b-[#2A2A2A] !mt-2"></div>
    <div class="!mb-4"></div>
    <ul class="w-full" v-for="(track, index) in selectedArtist.tracks" :key="track">
      <SongRow :artist="selectedArtist" :track="track" :index="++index" @update:song="clickSong" />
    </ul>
  </div>
</template>

<style scoped>
.circle {
  width: 4px;
  height: 4px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}
</style>
