<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import type { Ref } from 'vue'

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

import MenuItem from '@/components/MenuItem.vue'
let openMenu: Ref<boolean> = ref(false)
</script>

<template>
  <div class="bg-black sticky top-0 flex justify-end p-2">
    <button
      @click="openMenu = !openMenu"
      :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
      class="bg-black hover:bg-[#282828] rounded-full p-0.5 mtº-2 !mr-2 mt-0.5 cursor-pointer"
    >
      <div class="flex items-center">
        <img
          class="rounded-full !ml-2 !mr-2"
          width="27"
          src="https://yt3.ggpht.com/yti/ANjgQV9BgblrKs8AkKMMaGJajQNZvfpIrWauchR2j57oD6Q=s88-c-k-c0x00ffffff-no-rj"
        />
        <div class="text-white text-[14px] ml-1.5 font-semibold">John Weeks Dev</div>
        <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
        <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
      </div>
    </button>
  </div>

  <div class="flex bg-black h-screen p-2 gap-2">
    <div class="hidden md:flex flex-col bg-black gap-y-2 h-full w-[300px]">
      <div class="bg-neutral-900 rounded-lg w-full">Sidebar navigation</div>
      <div class="bg-neutral-900 rounded-lg h-full overflow-y-auto w-full">Song library</div>
    </div>
    <div class="bg-neutral-900 rounded-lg h-full overflow-hidden overflow-y-auto w-full">
      <RouterView />
    </div>
  </div>
  <!--  <div>
    <div
      id="TopNav"
      class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center gap-x-2 pl-2">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button
          type="button"
          class="rounded-full bg-black p-[1px] hover:bg-[#] ml-[2px] cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mtº-2 !mr-2 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            class="rounded-full !ml-2 !mr-2"
            width="27"
            src="https://yt3.ggpht.com/yti/ANjgQV9BgblrKs8AkKMMaGJajQNZvfpIrWauchR2j57oD6Q=s88-c-k-c0x00ffffff-no-rj"
          />
          <div class="text-white text-[14px] ml-1.5 font-semibold">John Weeks Dev</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>

    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" />
      </RouterLink>
      <div class="!my-8"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="!ml-[2px]" :iconSize="21" name="Home" iconString="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem
            class="!ml-[2px]"
            :iconSize="24"
            name="Search"
            iconString="search"
            pageUrl="/search"
          />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem
            class="!ml-[2px]"
            :iconSize="23"
            name="Your Library"
            iconString="library"
            pageUrl="/library"
          />
        </RouterLink>
        <div class="!py-3.5"></div>
        <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
        <MenuItem
          class="!-ml-[2px]"
          :iconSize="24"
          name="Liked Songs"
          iconString="liked"
          pageUrl="/liked"
        />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[13px] !mt-3 text-gray-300 hover:text-white">
          My Playlist #1
        </li>
        <li class="font-semibold text-[13px] !mt-3 text-gray-300 hover:text-white">
          My Playlist #2
        </li>
        <li class="font-semibold text-[13px] !mt-3 text-gray-300 hover:text-white">
          My Playlist #3
        </li>
        <li class="font-semibold text-[13px] !mt-3 text-gray-300 hover:text-white">
          My Playlist #4
        </li>
      </ul>
    </div>
  </div>

  <div
    class="fixed right-0 top-0 w-[calc(100%-250px)] overflow-auto h-full rounded-xl bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="!mt-[70px]"></div>
    <RouterView />
    <div class="!mb-[100px]"></div>
  </div>

--></template>
