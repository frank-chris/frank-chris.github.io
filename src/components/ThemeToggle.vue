<template>
  <button 
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <Sun v-if="isDark" class="theme-icon" />
    <Moon v-else class="theme-icon" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  background-color: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 40;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.theme-toggle:hover {
  transform: scale(1.1);
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .theme-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>