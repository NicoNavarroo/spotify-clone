import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'

export function useAudioPlayer() {
  const isTrackTimeCurrent = ref(null)
  const isTrackTimeTotal = ref(null)

  const useSong = useSongStore()
  const { audio } = storeToRefs(useSong)

  onMounted(() => {
    if (audio.value) {
      setTimeout(() => {
        timeupdate()
        loadmetadata()
      }, 300)
    }
  })

  const timeupdate = () => {
    audio.value.addEventListener('timeupdate', function () {
      var minutes = Math.floor(audio.value.currentTime / 60)
      var seconds = Math.floor(audio.value.currentTime - minutes * 60)
      isTrackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
      const value = (100 / audio.value.duration) * audio.value.currentTime
    })
  }

  const loadmetadata = () => {
    audio.value.addEventListener('loadedmetadata', function () {
      const duration = audio.value.duration
      const minutes = Math.floor(duration / 60)
      const seconds = Math.floor(duration % 60)
      isTrackTimeTotal.value = minutes + ':' + seconds.toString().padStart(2, '0')
    })
  }

  watch(audio, () => {
    timeupdate()
    loadmetadata()
  })

  watch(
    () => isTrackTimeCurrent.value,
    (time) => {
      if (time && time == isTrackTimeTotal.value) {
        console.log('ddsdsdsd')
      }
    },
  )
  return { isTrackTimeCurrent, isTrackTimeTotal }
}
