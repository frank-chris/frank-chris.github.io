<template>
  <div 
    v-if="isVisible" 
    class="loading-screen"
    :class="{ 'exit': isExiting }"
  >
    <div class="loading-content">
      <h1 class="loading-name">CHRIS FRANCIS</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isExiting = ref(false)

const emit = defineEmits<{
  complete: []
}>()

onMounted(() => {
  // Start exit animation after 1 second
  setTimeout(() => {
    isExiting.value = true
    
    // Hide completely and emit complete after animation finishes
    setTimeout(() => {
      isVisible.value = false
      emit('complete')
    }, 800) // Match animation duration
  }, 1000)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.loading-screen.exit {
  transform: translateY(-100%);
}

.loading-content {
  text-align: center;
}

.loading-name {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  text-transform: uppercase;
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1200px) {
  .loading-name {
    font-size: 0.8rem;
  }
}
</style>