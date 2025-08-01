<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    @click="$emit('close')"
  >
    <div 
      class="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      @click.stop
    >
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Scrollable Content -->
      <div class="overflow-y-auto max-h-[90vh]">
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
              <h2 class="text-3xl font-bold mb-2">{{ project.title }}</h2>
              <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
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
                class="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github class="w-5 h-5 mr-2" />
                View Code
              </a>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ExternalLink class="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-3">About this project</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-3">Technologies used</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium"
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
import { X, Github, ExternalLink, Code2 } from 'lucide-vue-next'
import type { Project } from '@/types'

interface Props {
  project: Project & { category?: string }
}

defineProps<Props>()
defineEmits(['close'])

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(date)
}
</script>