<template>
    <div>
        <h1 class="mt-2 block">Maison de Beauté</h1>
        111
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
definePageMeta({
  validate: async (route) => {
    // 仅允许访问数字id的页面    
    return /^\d+$/.test(route.params.id)
  }
})

// 当访问/posts/1时，route.params.id将为1
console.log('11',route.params.id)


</script>