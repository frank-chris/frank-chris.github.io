<template>
  <div 
    class="project-card group relative overflow-hidden cursor-pointer"
    @click="handleClick"
  >
    <!-- Project Image -->
    <div class="relative overflow-hidden">
      <img
        v-if="project.imageUrl"
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div v-else class="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <Code2 class="w-16 h-16 text-white/50" />
      </div>
      
      <!-- Overlay on Hover -->
      <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="flex gap-4">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              @click.stop
              target="_blank"
              rel="noopener noreferrer"
              class="project-icon-button"
            >
              <Github />
            </a>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              @click.stop
              target="_blank"
              rel="noopener noreferrer"
              class="project-icon-button"
            >
              <ExternalLink />
            </a>
            <button
              @click.stop="showDetails = true"
              class="project-icon-button"
            >
              <Eye />
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Project Details -->
    <div class="project-content">
      <h3 class="project-title">
        {{ project.title }}
      </h3>
      
      <p class="project-description">
        {{ project.description }}
      </p>

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
  project: Project & { category?: string }
}

defineProps<Props>()
const showDetails = ref(false)

const handleClick = () => {
  showDetails.value = true
}
</script>

<style scoped>
.project-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.6;
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

.project-card .project-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 0;
  transition: all 0.2s ease;
  text-decoration: none;
  color: var(--text-color);
}

.project-card .project-icon-button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
  transform: translateY(-1px);
}

.project-card .project-icon-button svg {
  width: 20px !important;
  height: 20px !important;
  color: inherit !important;
  fill: none !important;
  stroke: currentColor !important;
  stroke-width: 2 !important;
  outline: none !important;
  box-shadow: none !important;
}
</style>