<template>
  <nav class="bg-gradient-to-r from-[#272852] to-[#5759B8] p-6 rounded-b-2xl mb-8 nav-glow">
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 rounded-full flex items-center justify-center">
          <img src="/images/Website_Icon3.png" alt="">
        </div>
        <h1 class="text-2xl font-bold bg-gradient-to-r from-[#FAFAFA] to-[#D4D5F9] bg-clip-text text-transparent">
          Sam Hirsch
        </h1>
      </div>
      
      <ReachOutButton />
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-glow {
  box-shadow: 
    0 8px 32px rgba(87, 89, 184, 0.4),
    0 4px 16px rgba(164, 166, 248, 0.3),
    0 2px 8px rgba(87, 89, 184, 0.2);
}
</style>