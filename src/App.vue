<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>