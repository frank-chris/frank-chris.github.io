import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'
import type { Theme } from '../stores/theme'

export function useTheme() {
  const themeStore = useThemeStore()
  const { currentTheme } = storeToRefs(themeStore)
  const { toggleTheme, setTheme } = themeStore

  // Computed properties
  const isDark = computed(() => currentTheme.value === 'dark')
  const isLight = computed(() => currentTheme.value === 'light')

  // Helper to get theme-aware colors
  const getThemeColor = (lightColor: string, darkColor: string) => {
    return computed(() => isDark.value ? darkColor : lightColor)
  }

  // System preference detection
  const detectSystemTheme = (): Theme => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  // Apply system theme
  const applySystemTheme = () => {
    const systemTheme = detectSystemTheme()
    setTheme(systemTheme)
  }

  // Listen for system theme changes
  const watchSystemTheme = () => {
    if (!window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    })
  }

  return {
    currentTheme: computed(() => currentTheme.value),
    isDark,
    isLight,
    toggleTheme,
    setTheme,
    getThemeColor,
    detectSystemTheme,
    applySystemTheme,
    watchSystemTheme
  }
}