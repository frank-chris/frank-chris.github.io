<template>
  <div class="relative pb-8 group" :class="noTimeline ? '' : 'pl-8'">
    <!-- Timeline line -->
    <div 
      v-if="!noTimeline"
      class="absolute left-0 top-0 w-px bg-gray-300 dark:bg-gray-700"
      :class="isLast ? 'h-2' : 'bottom-0'"
    ></div>
    
    <!-- Timeline dot -->
    <div 
      v-if="!noTimeline"
      class="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full transition-all duration-300"
      :class="job.current 
        ? 'bg-primary-600 ring-4 ring-primary-100 dark:ring-primary-900/30' 
        : 'bg-gray-400 dark:bg-gray-600 group-hover:bg-primary-600'"
    ></div>
    
    <!-- Content Card -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6" :class="noTimeline ? '' : 'ml-4'">
      <div class="flex flex-wrap items-start justify-between mb-4">
        <div>
          <h3 class="text-xl font-semibold">{{ job.position }}</h3>
          <div class="text-gray-600 dark:text-gray-400 mt-1">
            <span class="font-medium">{{ job.company }}</span>
            <span class="mx-2">•</span>
            <span>{{ job.location }}</span>
          </div>
        </div>
        <span 
          class="text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0"
          :class="job.current 
            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'"
        >
          {{ job.duration }}
        </span>
      </div>
      
      <!-- Description -->
      <ul class="space-y-2 mb-4">
        <li 
          v-for="(desc, index) in job.description" 
          :key="index"
          class="text-gray-600 dark:text-gray-400 flex items-start"
        >
          <span class="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
          <span>{{ desc }}</span>
        </li>
      </ul>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in job.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  id: string
  position: string
  company: string
  location: string
  duration: string
  current: boolean
  description: string[]
  technologies: string[]
}

interface Props {
  job: Experience
  isLast?: boolean
  noTimeline?: boolean
}

defineProps<Props>()
</script>