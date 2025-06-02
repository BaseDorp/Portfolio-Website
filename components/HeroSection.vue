<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-screen lg:py-12">
    <div class="space-y-8">
      <div>
        <h1 class="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm Sam Hirsch
        </h1>
        
        <div class="space-y-4 text-white text-lg leading-relaxed">
          <p>
            <span class="font-semibold">I have 2.5 years of work experience working IT Project Management</span>
          </p>
          
          <p>
            Driven by a passion for game development, I specialize in Unreal Engine, data analytics, and project management in order to produce high quality work.
          </p>
        </div>
      </div>
    </div>
    
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <img 
          src="/images/circles.png" 
          alt="Background circles" 
          class="w-full h-full object-contain max-w-lg"
        />
      </div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="flex items-center gap-8 mb-4">
          <div class="w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0">
            <img 
              src="/images/GradImage.jpg" 
              alt="Sam Hirsch Profile" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="flex flex-col space-y-4">
            <a href="https://github.com/BaseDorp" target="_blank" class="w-12 h-12 bg-gradient-to-r from-[#A4A6f8] to-[#D4D5F9] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" title="Github"> <!-- TODO make this X -->
              <svg class="w-6 h-6 text-[#272852]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/samhirschdev/" target="_blank" class="w-12 h-12 bg-gradient-to-r from-[#A4A6f8] to-[#D4D5F9] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" title="Linkedin">
              <svg class="w-6 h-6 text-[#272852]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="/images/SamuelHirsch_SkateResume.pdf" target="_blank" class="w-12 h-12 bg-gradient-to-r from-[#A4A6f8] to-[#D4D5F9] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" title="Resume">
              <svg class="w-6 h-6 text-[#272852]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8s0 0 0 0l-6-6zM12 18H6v-2h6v2zm6-4H6v-2h12v2zm-2-6V3.5L18.5 6H16z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="w-full max-w-sm">
          <ToolsSection />
        </div>
      </div>
    </div>
    
    <div class="col-span-1 lg:col-span-2 flex justify-center -mt-28">
      <button 
        @click="handleViewPortfolio"
        class="bg-gradient-to-r from-[#FAFAFA] to-[#D4D5F9] px-8 py-4 rounded-full flex items-center space-x-2 hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <span class="text-[#272852] font-semibold text-lg">View Portfolio</span>
        <svg class="w-5 h-5 text-[#272852]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['view-portfolio'])

const handleViewPortfolio = () => {
  emit('view-portfolio')
}
</script>