<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        I work with a variety of modern technologies to build scalable applications
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div v-for="category in skillCategories" :key="category.name" class="text-center">
        <component :is="category.icon" class="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
        <h3 class="text-xl font-semibold mb-4">{{ category.name }}</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="px-3 py-1 bg-white dark:bg-gray-700 rounded-md text-sm shadow-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code2, Server, Palette } from 'lucide-vue-next'
import type { Component } from 'vue'

interface SkillCategory {
  name: string
  icon: Component
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Core Tech',
    icon: Code2,
    skills: ['Python', 'C++', 'Go', 'SQL', 'JavaScript', 'HTML', 'C', 'Bash']
  },
  {
    name: 'Data & AI/ML',
    icon: Server,
    skills: ['Pandas', 'PyTorch', 'Whisper', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'MongoDB']
  },
  {
    name: 'Cloud & DevOps',
    icon: Palette,
    skills: ['AWS (EC2, S3, Bedrock)', 'Docker', 'GitHub Actions', 'Argo Workflows', 'Git', 'Linux']
  }
]
</script>