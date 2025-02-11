<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const openMenu: Ref<boolean> = ref(false)

const target = ref(null)
onClickOutside(target, (event) => (openMenu.value = false))
</script>

<template>
  <div class="flex items-center justify-end p-2">
    <button class="bg-white px-6 rounded-full font-medium py-1 cursor-pointer">Log out</button>

    <button @click="openMenu = !openMenu" class="rounded-full mtº-2 !mr-2 mt-0.5 cursor-pointer">
      <div class="flex select-none items-center">
        <img
          class="rounded-full outline-none !ml-2 !mr-2"
          width="33"
          src="https://yt3.ggpht.com/yti/ANjgQV9BgblrKs8AkKMMaGJajQNZvfpIrWauchR2j57oD6Q=s88-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </button>
    <span
      ref="target"
      v-if="openMenu"
      class="fixed w-[190px] bg-[#282828] shadow-2xl mt-6 z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
    >
      <ul class="text-gray-200 font-semibold select-none text-[14px]">
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
      </ul>
    </span>
  </div>
</template>
