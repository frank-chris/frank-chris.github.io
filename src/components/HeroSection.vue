<template>
  <section class="py-20 md:py-32">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-6">
        Hi, I'm Chris Francis
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Data // Machine Learning
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/projects"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
        >
          View My Work
          <ArrowRight class="ml-2 w-5 h-5" />
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Get In Touch
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
</script>