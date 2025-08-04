<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4" 
    style="background-color: var(--modal-overlay);"
    @click="$emit('close')"
  >
    <div 
      class="modal-container relative w-full max-w-4xl max-h-[90vh] overflow-hidden border"
      style="background-color: var(--bg-color); border-color: var(--border-color);"
      @click.stop
    >
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="modal-close-button absolute top-4 right-4 z-10"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" v-show="showScrollIndicator">
        <ChevronDown class="w-4 h-4" />
      </div>

      <!-- Scrollable Content -->
      <div class="overflow-y-auto max-h-[90vh] scrollable-content" @scroll="handleScroll" ref="scrollContainer">
        <!-- Project Image -->
        <div class="relative">
          <img
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
            class="w-full h-64 md:h-96 object-cover"
          />
          <div v-else class="w-full h-64 md:h-96 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <Code2 class="w-24 h-24 text-white/50" />
          </div>
        </div>

        <!-- Project Details -->
        <div class="p-8">
          <div class="flex items-start justify-between mb-6">
            <div>
              <h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text-color); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">{{ project.title }}</h2>
              <div class="flex items-center gap-4" style="font-family: 'Inter', sans-serif; font-size: 0.875rem; color: var(--text-tertiary);">
                <span v-if="project.category">{{ project.category }}</span>
                <span v-if="project.createdAt">{{ formatDate(project.createdAt) }}</span>
              </div>
            </div>
            
            <div class="flex gap-3">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-button"
              >
                <Github class="w-5 h-5 mr-2" />
                View Code
              </a>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-button whitespace-nowrap"
              >
                <ExternalLink class="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h3 style="font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 600; color: var(--text-color); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">About this project</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 300; color: var(--text-tertiary); line-height: 1.6;">
              {{ project.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="mb-8">
            <h3 style="font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 600; color: var(--text-color); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">Technologies used</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { X, Github, ExternalLink, Code2, ChevronDown } from 'lucide-vue-next'
import type { Project } from '@/types'

interface Props {
  project: Project & { category?: string }
}

defineProps<Props>()
defineEmits(['close'])

const scrollContainer = ref<HTMLElement>()
const showScrollIndicator = ref(true)

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(date)
}

const handleScroll = () => {
  if (!scrollContainer.value) return
  
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value
  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
  
  showScrollIndicator.value = !isAtBottom
}

const checkScrollable = () => {
  if (!scrollContainer.value) return

  nextTick(() => {
    const { scrollHeight, clientHeight } = scrollContainer.value!
    showScrollIndicator.value = scrollHeight > clientHeight
  })
}

onMounted(() => {
  checkScrollable()
})
</script>

<style scoped>
/* Hide scrollbar completely */
.scrollable-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollable-content::-webkit-scrollbar {
  display: none;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: var(--text-color);
  color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  animation: pulse 2s infinite;
}

.scroll-indicator:hover {
  opacity: 1;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

/* Modal container */
.modal-container {
  background-color: var(--bg-color) !important;
  border-color: var(--border-color) !important;
}

/* Modal close button */
.modal-close-button {
  padding: 0.5rem;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close-button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
  transform: scale(1.05);
}

/* Modal buttons */
.modal-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  text-decoration: none;
}

.modal-button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

/* Tech tags */
.tech-tag {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}
</style>