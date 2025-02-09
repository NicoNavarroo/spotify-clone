<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
</script>

<template>
  <div class="!p-8">
    <button tpye="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Podcast to make you smarter
    </button>

    <div class="!py-1.5"></div>
    <div class="flex items-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/42/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/69/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="md:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/77/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="lg:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/90/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="xl:block hidden"
      />
    </div>
  </div>
  <div class="!p-8">
    <button tpye="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Recomended Songs
    </button>

    <div class="!py-1.5"></div>
    <div class="flex items-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/42/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/69/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="md:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/77/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="lg:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/90/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="xl:block hidden"
      />
    </div>
  </div>
  <div class="!p-8">
    <button tpye="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Recomended radio
    </button>

    <div class="!py-1.5"></div>
    <div class="flex items-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/42/300/300"
        tittle="title here"
        subTittle="subtittle here"
      />
      <HomeCard
        image="https://picsum.photos/id/69/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="md:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/77/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="lg:block hidden"
      />
      <HomeCard
        image="https://picsum.photos/id/90/300/300"
        tittle="title here"
        subTittle="subtittle here"
        class="xl:block hidden"
      />
    </div>
  </div>
</template>
