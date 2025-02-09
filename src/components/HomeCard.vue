<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  image: String,
  tittle: String,
  subTittle: String,
})

const { image, tittle, subTittle } = toRefs(props)
</script>

<template>
  <RouterLink to="library">
    <div class="bg-[#111111] rounded-md !p-4 !m-2 hover:bg-[#252525] cursor-pointer">
      <img :src="image" alt="" class="rounded-md" />
      <div class="text-white font-semibold !pt-4 text-[17px]">
        {{ tittle }}
      </div>
      <div class="text-gray-400 !pt-1 !pb-3 text-[14px]">
        {{ subTittle }}
      </div>
    </div>
  </RouterLink>
</template>
