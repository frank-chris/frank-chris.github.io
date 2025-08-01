<template>
  <section class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Here are some of my recent projects that showcase my skills and experience
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <ProjectCardHorizontal
          v-if="featuredProjects[0]"
          :project="featuredProjects[0]"
        />
      </div>
      <div class="lg:col-span-1">
        <ProjectCard
          v-if="featuredProjects[1]"
          :project="featuredProjects[1]"
        />
      </div>
    </div>
    
    <div class="text-center mt-12">
      <RouterLink
        to="/projects"
        class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
      >
        View All Projects
        <ArrowRight class="ml-2 w-4 h-4" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardHorizontal from '@/components/ProjectCardHorizontal.vue'
import type { Project } from '@/types'

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Call Transcription & LLM Evaluation System',
    description: 'Designed a system processing ~1,000 calls/day using Whisper and Claude 3.5 on AWS Bedrock. Deployed using EC2 Auto Scaling Groups, reducing QA staffing from 3 to 1 and saving ~$180K/year.',
    technologies: ['Python', 'AWS Bedrock', 'Whisper', 'Claude 3.5', 'EC2', 'Auto Scaling'],
    imageUrl: '/images/projects/call-transcription.jpg',
    featured: true,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Surfstore: Fault-Tolerant File Storage',
    description: 'Developed a networked file storage application (like Dropbox) in Go with RAFT protocol for fault tolerance and consistent hashing for scalability.',
    technologies: ['Go', 'RAFT', 'gRPC', 'Consistent Hashing'],
    imageUrl: '/images/projects/surfstore.png',
    githubUrl: 'https://github.com/frank-chris/Surfstore',
    featured: true,
    createdAt: new Date()
  }
]
</script>