<template>
  <div 
    class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    @click="handleClick"
  >
    <!-- Project Image -->
    <div class="relative overflow-hidden">
      <img
        v-if="project.imageUrl"
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div v-else class="w-full aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <Code2 class="w-16 h-16 text-white/50" />
      </div>
      
      <!-- Overlay on Hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-4 left-4 right-4">
          <div class="flex gap-3">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              @click.stop
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
            >
              <Github class="w-5 h-5 text-white" />
            </a>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              @click.stop
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
            >
              <ExternalLink class="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- Project Details -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 3"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
        >
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>
    </div>

    <!-- Quick View Button -->
    <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        @click.stop="showDetails = true"
        class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
      >
        <Eye class="w-5 h-5 text-white" />
      </button>
    </div>
  </div>

  <!-- Project Detail Modal -->
  <Teleport to="body">
    <Transition name="modal">
      <ProjectModal
        v-if="showDetails"
        :project="project"
        @close="showDetails = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Github, ExternalLink, Code2, Eye } from 'lucide-vue-next'
import ProjectModal from '@/components/ProjectModal.vue'
import type { Project } from '@/types'

interface Props {
  project: Project
}

defineProps<Props>()
const showDetails = ref(false)

const handleClick = () => {
  showDetails.value = true
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>