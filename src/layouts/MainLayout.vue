<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <RouterLink to="/" class="text-xl font-bold text-primary-600 dark:text-primary-400">
              Chris Francis
            </RouterLink>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />
              <NavLink to="/projects" label="Projects" />
              <NavLink to="/contact" label="Contact" />
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu class="md:hidden" />
          </div>
        </div>
      </nav>
    </header>
    
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
    
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ currentYear }} Chris Francis. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import NavLink from '@/components/NavLink.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SocialLinks from '@/components/SocialLinks.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>