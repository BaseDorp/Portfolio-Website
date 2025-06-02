<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-[#0D0E1E]">
    <LayoutAppHeader/>
    <main class="container mx-auto px-6 py-8 max-w-7xl">
      <slot/>
    </main>
    <LayoutAppFooter/>
  </div>
</template>

<style scoped>

</style>