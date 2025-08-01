<template>
  <div class="relative pl-8 pb-8 group">
    <!-- Timeline line -->
    <div 
      class="absolute left-0 top-0 w-px bg-gray-300 dark:bg-gray-700"
      :class="isLast ? 'h-2' : 'bottom-0'"
    ></div>
    
    <!-- Timeline dot -->
    <div 
      class="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-primary-600 transition-all duration-300"
    ></div>
    
    <!-- Content Card -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ml-4">
      <div class="flex flex-wrap items-start justify-between mb-4">
        <div>
          <h3 class="text-xl font-semibold">{{ education.degree }} in {{ education.field }}</h3>
          <div class="text-gray-600 dark:text-gray-400 mt-1">
            <span class="font-medium text-primary-600 dark:text-primary-400">{{ education.school }}</span>
            <span class="mx-2">•</span>
            <span>{{ education.location }}</span>
          </div>
        </div>
        <span class="text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full mt-2 sm:mt-0">
          {{ education.duration }}
        </span>
      </div>
      
      <!-- Achievements -->
      <div v-if="education.achievements && education.achievements.length > 0">
        <ul class="space-y-2">
          <li 
            v-for="(achievement, index) in education.achievements" 
            :key="index"
            class="text-gray-600 dark:text-gray-400 flex items-start"
          >
            <span class="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Education {
  id: string
  degree: string
  field: string
  school: string
  location: string
  duration: string
  achievements?: string[]
}

interface Props {
  education: Education
  isLast?: boolean
}

defineProps<Props>()
</script>