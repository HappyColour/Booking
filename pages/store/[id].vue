<template>
  <div>
    <div class="mb-3 md:hidden">
      <el-carousel
        class="mlr-20"
        arrow="never"
        height="20rem"
        :interval="5000"
        :pause-on-hover="false"
      >
        <el-carousel-item
          v-for="item in list"
          :key="item"
        >
          <el-image
            :key="item"
            class="h-full w-full"
            :src="item"
            fit="cover"
          />
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
      <p class="text-base text-gray-500">
        Closed opens soon at 11:00
      </p>
      <span class="hidden md:block">•</span>
      <p class="text-base text-gray-500">
        32 Farmhill Park, Douglas
      </p>
    </div>
    <div class="hidden md:block">
      <div class="grid-layout">
        <div class="large-image rounded-xl">
          <img :src="list[0]">
        </div>
        <div class="small-image top rounded-xl">
          <img :src="list[1]">
        </div>
        <div class="small-image bottom rounded-xl">
          <img :src="list[2]">
        </div>
      </div>
    </div>
    <div>
      <h2>Services</h2>
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
const list = ['https://images.fresha.com/locations/location-profile-images/32389/2039628/8f402467-10db-4d1f-bf6b-b599ea18dbb1-TsimShaTsuiHandsomeFactoryBarberShop-HK-Kowloon-Kowloon-TsimShaTsui-Fresha.jpg?class=venue-gallery-large&dpr=3', 'https://images.fresha.com/locations/location-profile-images/32389/2039629/a33077fa-7bae-452f-9bd2-52bff9cf59dd-TsimShaTsuiHandsomeFactoryBarberShop-HK-Kowloon-Kowloon-TsimShaTsui-Fresha.jpg?class=venue-gallery-small&dpr=3', 'https://images.fresha.com/locations/location-profile-images/32389/2039630/d657a6bf-2008-4116-9671-4100463698fc-TsimShaTsuiHandsomeFactoryBarberShop-HK-Kowloon-Kowloon-TsimShaTsui-Fresha.jpg?class=venue-gallery-small&dpr=3']
</script>

<style>
.mlr-20 {
  margin: 0 -20px;
}
.grid-layout {
  display: grid;
  grid-template-areas:
    "large top"
    "large bottom";
  grid-template-columns: 2fr 1fr; /* 左侧大图宽度是右侧图片的两倍 */
  grid-template-rows: 1fr 1fr; /* 右侧两行等高 */
  gap: 24px; /* 图片之间的间隙 */
  box-sizing: border-box;
  height: 76vh;
}
.large-image {
  grid-area: large;
  overflow: hidden;
}

.large-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右上小图片 */
.top {
  grid-area: top;
  overflow: hidden;
}

/* 右下小图片 */
.bottom {
  grid-area: bottom;
  overflow: hidden;
}

.small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并填满空间 */
}
</style>
