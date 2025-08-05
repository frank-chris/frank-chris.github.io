<template>
  <div class="education-card">
    <!-- Content -->
    <div class="card-content">
      <div class="card-header">
        <div class="header-info">
          <h3 class="degree">{{ education.degree }} in {{ education.field }}</h3>
          <div class="school-info">
            <span class="school">{{ education.school }}</span>
            <span class="separator">•</span>
            <span class="location">{{ education.location }}</span>
          </div>
        </div>
        <span class="duration">
          {{ education.duration }}
        </span>
      </div>
      
      <!-- Achievements -->
      <div v-if="education.achievements && education.achievements.length > 0">
        <ul class="achievements-list">
          <li 
            v-for="(achievement, index) in education.achievements" 
            :key="index"
            class="achievement-item"
          >
            <span class="bullet">•</span>
            <span class="achievement-text">{{ achievement }}</span>
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

<style scoped>
.education-card {
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

.degree {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.school-info {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.school {
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
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-tertiary);
  background-color: transparent;
  border: 1px solid var(--text-tertiary);
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  white-space: nowrap;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.achievement-item {
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

.achievement-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .card-content {
    padding: 1rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .degree {
    font-size: 1.125rem;
  }
  
  .school-info {
    font-size: 1rem;
  }
  
  .achievement-text {
    font-size: 0.9375rem;
  }
}
</style>