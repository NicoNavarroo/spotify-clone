<script setup>
import CategorySelect from '@/components/CategorySelect.vue'
</script>

<template>
  <div>
    <div class="!p-8">
      <button
        tpye="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      >
        Podcast to make you smarter
      </button>

      <div class="!py-1.5"></div>
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        <CategorySelect category="podcast" image="https://picsum.photos/id/10/300/300" />
        <CategorySelect category="audioBooks" image="https://picsum.photos/id/5/300/300" />
        <CategorySelect category="Made for you" image="https://picsum.photos/id/99/300/300" />
        <CategorySelect category="podcast" image="https://picsum.photos/id/10/400/300" />
        <CategorySelect category="New release" image="https://picsum.photos/id/222/300/300" />
        <CategorySelect category="AudioBooks" image="https://picsum.photos/id/89/300/300" />
        <CategorySelect category="Books" image="https://picsum.photos/id/98/300/300" />
      </div>
    </div>
  </div>
</template>
