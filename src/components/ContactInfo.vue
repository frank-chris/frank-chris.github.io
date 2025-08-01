<template>
  <div class="space-y-6">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <MapPin class="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h3 class="font-medium mb-1">Location</h3>
        <p class="text-gray-600 dark:text-gray-400">
          La Jolla, CA 92037<br />
          United States
        </p>
      </div>
    </div>

    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <Mail class="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h3 class="font-medium mb-1">Email</h3>
        <a
          href="mailto:chrisfrancischris@gmail.com"
          class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          chrisfrancischris@gmail.com
        </a>
      </div>
    </div>

    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <Phone class="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h3 class="font-medium mb-1">Phone</h3>
        <a
          href="tel:+18583196485"
          class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          +1 (858) 319-6485
        </a>
      </div>
    </div>

    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <Clock class="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h3 class="font-medium mb-1">Availability</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Monday - Friday<br />
          9:00 AM - 6:00 PM PST
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone, Clock } from 'lucide-vue-next'
</script>