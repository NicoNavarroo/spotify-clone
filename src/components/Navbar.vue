<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import type { RouteInterInterface } from '@/types/RouteInterface'
import type { Ref } from 'vue'

import { Icon } from '@iconify/vue'

const routePath = useRoute()
const routes: Ref<RouteInterInterface[]> = ref([
  {
    name: 'Home',
    path: '/',
    icon: 'material-symbols-light:home-rounded',
  },
  {
    name: 'Seach',
    path: '/search',
    icon: 'material-symbols:search',
  },
])
</script>

<template>
  <div v-for="route in routes" :key="route.name">
    <RouterLink :to="route.path">
      <div
        class="flex items-center gap-x-2"
        :class="{ 'font-bold text-white': route.path === routePath.path }"
      >
        <Icon :icon="route.icon" :style="{ fontSize: '23px' }" />
        <span>
          {{ route.name }}
        </span>
      </div>
    </RouterLink>
  </div>
</template>
