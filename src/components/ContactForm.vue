<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium mb-2">
        Name
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 transition-colors"
        placeholder="John Doe"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium mb-2">
        Email
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 transition-colors"
        placeholder="john@example.com"
      />
    </div>

    <div>
      <label for="subject" class="block text-sm font-medium mb-2">
        Subject
      </label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 transition-colors"
        placeholder="Project inquiry"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium mb-2">
        Message
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 transition-colors resize-none"
        placeholder="Tell me about your project..."
      />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      <Send v-if="!isSubmitting" class="w-5 h-5 mr-2" />
      <Loader2 v-else class="w-5 h-5 mr-2 animate-spin" />
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <div v-if="submitStatus" class="mt-4">
      <div
        :class="{
          'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300': submitStatus === 'success',
          'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300': submitStatus === 'error'
        }"
        class="p-4 rounded-lg"
      >
        {{ statusMessage }}
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Send, Loader2 } from 'lucide-vue-next'
import type { ContactForm } from '@/types'

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const statusMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', form)
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof ContactForm] = ''
    })
    
    submitStatus.value = 'success'
    statusMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  } catch (error) {
    submitStatus.value = 'error'
    statusMessage.value = 'Something went wrong. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>