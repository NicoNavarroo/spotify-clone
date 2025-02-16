import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'

export function useAudioPlayer() {
  const audio = ref<HTMLAudioElement | null>(null)
  const currentTime = ref(0)
  const duration = ref(0)

  const songStore = useSongStore()
  const { artistsInfo } = storeToRefs(songStore)

  const updateTime = () => {
    if (audio.value) {
      currentTime.value = audio.value.currentTime
      console.log('Duración:', currentTime.value)
    }
  }

  const setupAudio = (src: string) => {
    if (!src) return

    audio.value = new Audio(src)

    audio.value.addEventListener('loadedmetadata', () => {
      duration.value = audio.value!.duration
      console.log('Duración:', duration.value)
    })

    audio.value.addEventListener('timeupdate', updateTime)
  }

  watch(
    () => artistsInfo,
    (newInfo) => {
      if (artistsInfo) {
        console.log('asasasasasasasasa', newInfo.value.songPath)
        setupAudio(newInfo.value.songPath)
      }
    },
    { deep: true, immediate: true },
  )

  onUnmounted(() => {
    if (audio.value) {
      audio.value.removeEventListener('timeupdate', updateTime)
    }
  })

  return { audio, currentTime, duration }
}
