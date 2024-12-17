<template>
  <div>
    <div class="mb-3 md:hidden">
      <el-carousel
        class="mlr-20"
        arrow="never"
        :interval="5000"
        :pause-on-hover="false"
      >
        <el-carousel-item
          v-for="item in list"
          :key="item"
        >
          <h3>
            <el-image
              :key="item"
              :src="item"
              fit="cover"
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <h1 class="text-xl font-bold md:text-5xl">
      Maison de Beauté
    </h1>
    <div class="flex-col items-start flex gap-2 md:flex-row md:items-center">
      <el-rate
        v-model="rateValue"
        show-score
        text-color="#ff9900"
        score-template="{ value }"
        disabled
      />
      <span class="hidden md:block">•</span>
      <p>Closed opens soon at 11:00</p>
      <span class="hidden md:block">•</span>
      <p>32 Farmhill Park, Douglas</p>
    </div>
    <div class="grid-areas">
      <div class="grid-1">
        <img :src="list[0]">
      </div>
      <div class="grid-2">
        <img :src="list[1]">
      </div>
      <div class="grid-3">
        <img :src="list[2]">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
  validate: async (route) => {
    // 仅允许访问数字id的页面
    return /^\d+$/.test(route.params.id)
  },
})

// 当访问/posts/1时，route.params.id将为1
console.log('11', route.params.id)

const rateValue = ref(4.6)
const list = ['https://images.fresha.com/locations/location-profile-images/1239812/1657111/e5b87bd5-eeba-4308-ade5-9c38aba7d8d8-AGWNails-IM-Douglas-Douglas-Fresha.jpg?class=venue-gallery-mobile&dpr=2', 'https://images.fresha.com/locations/location-profile-images/1239812/1657112/442ac3d2-3de3-4a10-bd51-6903182a5cb4-AGWNails-IM-Douglas-Douglas-Fresha.jpg?class=venue-gallery-mobile&dpr=2', 'https://images.fresha.com/locations/location-profile-images/1239812/1657113/5033b71b-efd0-4a20-8c85-2ebce0d24972-AGWNails-IM-Douglas-Douglas-Fresha.jpg?class=venue-gallery-mobile&dpr=2']
</script>

<style>
.mlr-20 {
  margin: 0 -20px;
}
.grid-areas {
  display: grid;
  grid-template-areas: "a a b" "a a c";
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
}
.grid-1 {
  grid-area: a;
}
.grid-2 {
  grid-area: b;
}
.grid-3 {
  grid-area: c;
}
</style>
