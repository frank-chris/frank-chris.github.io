<template>
  <RouterLink
    :to="to"
    class="nav-link"
    :class="{
      'nav-link--active': isActive
    }"
  >
    {{ label }}
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface Props {
  to: string
  label: string
}

const props = defineProps<Props>()
const route = useRoute()

const isActive = computed(() => {
  return route.path === props.to || (props.to !== '/' && route.path.startsWith(props.to))
})
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200;
  @apply text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400;
}

.nav-link--active {
  @apply text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20;
}
</style>