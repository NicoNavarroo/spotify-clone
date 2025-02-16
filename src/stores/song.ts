import { ref, computed, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useSongStore = defineStore('song', () => {
  const audio: Ref<HTMLAudioElement | null> = shallowRef(null) // 🔥 Mejora
  const isPlaying: Ref<boolean> = ref(false)
  const isPaused: Ref<boolean> = ref(false)
  let artistsInfo: Ref<ArtistInterface> = ref({})
  let songsList = ref([])

  const playSong = (song: string) => {
    audio.value = new Audio()
    audio.value.src = song
    audio.value.play()
    isPlaying.value = true
    isPaused.value = false
  }

  const randomSong = () => {
    let randomNumber = Math.round(Math.random() * artistsInfo.value.tracks.length)

    artistsInfo.value.songPlayed = artistsInfo.value.tracks[randomNumber].name
    playSong(artistsInfo.value.tracks[randomNumber].path)
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
    artistsInfo.value = { ...artistsInfo.value, ...data }
  }

  const addSongsList = (list) => {
    songsList.value = [...list]
  }

  return {
    isPlaying,
    isPaused,
    songsList,
    randomSong,
    artistsInfo,
    addSongsList,
    playSong,
    stopSong,
    resumeSong,
    updateArtistsInfo,
  }
})
