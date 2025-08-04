import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  // State
  const currentTheme = ref<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  )

  // Actions
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
  }

  // Persist theme preference in localStorage
  watch(currentTheme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', newTheme)
  }, { immediate: true })

  return {
    currentTheme,
    toggleTheme,
    setTheme
  }
})