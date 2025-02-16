import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'

export function useSongProgress() {
  const audio = ref<HTMLAudioElement | null>(null)
  const duration = ref(0)
  const currentTime = ref(0)

  const songPath = ref('')
  const { artistsInfo } = storeToRefs(useSongStore())

  const loadAudio = () => {
    if (!songPath.value) return

    audio.value = new Audio(songPath.value)

    audio.value.addEventListener('loadedmetadata', () => {
      const songDuration = audio.value.duration
      const totalMinutes = Math.floor(songDuration / 60)
      const totalseconds = Math.floor(songDuration % 60)

      duration.value = totalMinutes + ':' + totalseconds.toString().padStart(2, '0')
    })

    // Escuchar el tiempo actual de reproducción
    audio.value.addEventListener('timeupdate', () => {
      currentTime.value = Math.floor(audio.value!.currentTime)
      console.log('🎧 Tiempo transcurrido:', currentTime.value)
    })

    audio.value.addEventListener('ended', () => {
      currentTime.value = 0
    })
  }

  watch(
    artistsInfo,
    (newValue) => {
      if (!newValue.songPath) {
        // Si no hay path, reiniciamos valores
        duration.value = 0
        currentTime.value = 0
        if (audio.value) {
          audio.value.pause()
          audio.value = null
        }
        return
      }

      // Si hay un nuevo path, cargamos la canción
      songPath.value = newValue.songPath
      loadAudio()
    },
    { deep: true },
  )

  onMounted(() => {
    if (songPath.value) {
      loadAudio()
    }
  })

  onUnmounted(() => {
    if (audio.value) {
      audio.value.pause()
      audio.value = null
    }
  })

  return {
    duration,
    currentTime,
  }
}
