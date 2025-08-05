<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="social-button"
    :aria-label="`Connect on ${platform}`"
  >
    <component
      :is="icon"
      class="social-icon"
      fill="currentColor"
      stroke-width="0"
    />
    <span class="social-text">
      {{ platform }}
    </span>
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  platform: string
  url: string
  icon: Component
}

defineProps<Props>()
</script>

<style scoped>
.social-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 0;
  transition: all 0.2s ease;
  text-decoration: none;
  color: var(--bg-color);
}

.social-button:hover {
  background-color: transparent;
  border-color: var(--border-color);
  color: var(--text-color);
  transform: translateY(-1px);
}

.social-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.social-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
}

@media (max-width: 1200px) {
  .social-button {
    padding: 0.75rem;
    gap: 0;
    min-width: 48px;
    justify-content: center;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }

  .social-text {
    display: none;
  }
}
</style>