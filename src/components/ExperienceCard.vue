<template>
  <div class="experience-card">
    <!-- Content -->
    <div class="card-content">
      <div class="card-header">
        <div class="header-info">
          <h3 class="position">{{ job.position }}</h3>
          <div class="company-info">
            <span class="company">{{ job.company }}</span>
            <span class="separator">•</span>
            <span class="location">{{ job.location }}</span>
          </div>
        </div>
        <span class="duration" :class="{ 'current': job.current }">
          {{ job.duration }}
        </span>
      </div>
      
      <!-- Description -->
      <ul class="description-list">
        <li 
          v-for="(desc, index) in job.description" 
          :key="index"
          class="description-item"
        >
          <span class="bullet">•</span>
          <span class="description-text">{{ desc }}</span>
        </li>
      </ul>
      
      <!-- Technologies -->
      <div class="technologies">
        <span
          v-for="tech in job.technologies"
          :key="tech"
          class="tech-tag"
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

<style scoped>
.experience-card {
  margin-bottom: 1.5rem;
}

.card-content {
  padding: 1.5rem;
  background-color: var(--card-bg);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.card-content:hover {
  background-color: var(--card-bg-hover);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.header-info {
  flex: 1;
  min-width: 0;
}

.position {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.company-info {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company {
  font-weight: 500;
  color: var(--text-color);
}

.separator {
  color: var(--text-tertiary);
}

.location {
  color: var(--text-tertiary);
}

.duration {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-tertiary);
  background-color: transparent;
  border: 1px solid var(--text-tertiary);
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.duration.current {
  color: var(--bg-color);
  border-color: var(--text-color);
  background-color: var(--text-color);
}

.description-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.description-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.bullet {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  font-weight: 600;
  margin-top: 0.05rem;
  flex-shrink: 0;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.5;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tech-tag {
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  padding: 0.125rem 0.375rem;
  border-radius: 0;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

@media (max-width: 1200px) {
  .card-content {
    padding: 1rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .position {
    font-size: 0.9375rem;
  }
  
  .company-info {
    font-size: 0.8125rem;
  }
  
  .description-text {
    font-size: 0.75rem;
  }
}
</style>