<template>
  <button 
    @click="copyEmailToClipboard"
    class="bg-gradient-to-r from-[#A4A6f8] to-[#D4D5F9] px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all duration-300 relative cursor-pointer"
    :class="{ 'scale-95': isClicked }"
  >
    <span class="text-[#272852] font-semibold transition-all duration-300">
      {{ buttonText }}
    </span>
    
    <svg 
      v-show="!isCopied" 
      class="w-5 h-5 text-[#272852] transition-opacity duration-300" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
    
    <svg 
      v-show="isCopied" 
      class="w-5 h-5 text-[#272852] transition-opacity duration-300" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
    </svg>
    
    <div 
      v-show="showTooltip"
      class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap transition-opacity duration-300 z-50"
      :class="{ 'opacity-100': showTooltip, 'opacity-0': !showTooltip }"
    >
      {{ tooltipText }}
      <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
    </div>
  </button>
</template>

<script setup>
import { ref } from 'vue'
const email = 'samhirsch.dev@gmail.com'

const isCopied = ref(false)
const isClicked = ref(false)
const showTooltip = ref(false)

const buttonText = computed(() => {
  return isCopied.value ? 'Email Copied!' : 'Reach Out'
})

const tooltipText = computed(() => {
  return isCopied.value ? 'Email copied to clipboard!' : email
})

const copyEmailToClipboard = async () => {
  try {
    isClicked.value = true
    setTimeout(() => {
      isClicked.value = false
    }, 150)
    
    await navigator.clipboard.writeText(email)
    
    isCopied.value = true
    showTooltip.value = true
    
    setTimeout(() => {
      isCopied.value = false
      showTooltip.value = false
    }, 2000)
    
  } catch (err) {
    console.error('Failed to copy email: ', err)
    
    const textArea = document.createElement('textarea')
    textArea.value = email
    document.body.appendChild(textArea)
    textArea.select()
    
    try {
      document.execCommand('copy')
      isCopied.value = true
      showTooltip.value = true
      
      setTimeout(() => {
        isCopied.value = false
        showTooltip.value = false
      }, 2000)
    } catch (fallbackErr) {
      console.error('Fallback copy failed: ', fallbackErr)
    }
    
    document.body.removeChild(textArea)
  }
}
</script>