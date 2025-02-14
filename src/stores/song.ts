import { ref, computed, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useSongStore = defineStore('song', () => {
  const audio: Ref<HTMLAudioElement | null> = shallowRef(null) // 🔥 Mejora
  const isPlaying: Ref<boolean> = ref(false)
  const isPaused: Ref<boolean> = ref(false)
  let artistsInfo: Ref<ArtistInterface> = ref({})

  const playSong = (song: string) => {
    console.log(song)
    audio.value = new Audio()
    audio.value.src = song
    audio.value.play()
    isPlaying.value = true
  }
  const stopSong = () => {
    audio.value.pause()
    isPaused.value = true
  }
  const resumeSong = () => {
    audio.value.play()
    isPaused.value = false
  }
  const updateArtistsInfo = (data) => {
    artistsInfo.value = { ...data }
  }

  return { isPlaying, isPaused, artistsInfo, playSong, stopSong, resumeSong, updateArtistsInfo }
})
