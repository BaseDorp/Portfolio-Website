<template>
  <div class="relative">
    <DotPattern
      class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" 
    />
    
    <HeroSection @view-portfolio="scrollToProjects" />
    
    <div id="projects-section">
      <ProjectsSection />
    </div>
    
    <Transition name="fade-scale">
      <button
        v-show="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#A4A6f8] to-[#D4D5F9] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg class="w-6 h-6 text-[#272852]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects-section')
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const projectsSection = document.getElementById('projects-section')
  if (projectsSection) {
    const rect = projectsSection.getBoundingClientRect()
    showBackToTop.value = rect.top <= window.innerHeight / 2
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Page meta
useHead({
  title: 'Sam Hirsch - Game Developer & IT Operations Manager',
  meta: [
    { name: 'description', content: 'Portfolio of Sam Hirsch - Site IT Operations Manager with 2.5 years experience, specializing in Unreal Engine and 3D modeling for game development.' }
  ]
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>