<template>
  <div class="max-w-7xl mx-auto py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        I'm always interested in hearing about new opportunities and projects
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-6">Send me a message</h2>
        <ContactForm />
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
          <ContactInfo />
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6">Connect with me</h2>
          <div class="flex flex-wrap gap-4">
            <SocialButton
              v-for="social in socials"
              :key="social.platform"
              :platform="social.platform"
              :url="social.url"
              :icon="social.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
import ContactForm from '@/components/ContactForm.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import SocialButton from '@/components/SocialButton.vue'
import type { Component } from 'vue'

interface Social {
  platform: string
  url: string
  icon: Component
}

const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
]
</script>