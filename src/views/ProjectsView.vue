<template>
  <div class="py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A showcase of my data engineering, systems programming, and machine learning projects
      </p>
    </div>

    <!-- Masonry Grid -->
    <div class="masonry-wrapper">
      <div
        v-for="project in projects"
        :key="project.id"
        class="masonry-item"
      >
        <ProjectCardMasonry :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCardMasonry from '@/components/ProjectCardMasonry.vue'
import type { Project } from '@/types'

interface ProjectWithCategory extends Project {
  category: string
}

const projects: ProjectWithCategory[] = [
  {
    id: '1',
    title: 'Call Transcription & LLM Evaluation System',
    description: 'Designed a system processing ~1,000 calls/day using Whisper (OpenAI) and Claude Sonnet 3.5 on AWS Bedrock. Deployed using EC2 Auto Scaling Groups, reducing QA staffing from 3 to 1 and saving ~$180K/year.',
    technologies: ['Python', 'AWS Bedrock', 'Whisper', 'Claude 3.5', 'EC2', 'Auto Scaling'],
    imageUrl: '/images/projects/call-transcription.jpg',
    category: 'Data Engineering',
    featured: true,
    createdAt: new Date('2024-07-01')
  },
  {
    id: '2',
    title: 'ETL Pipeline Automation System',
    description: 'Built and automated 10+ ETL pipelines to ingest and transform health plan data into CMAPP (internal clinical CRM) using Python, Pandas, S3, and Argo Workflows. Saved 30–60 engineering hours per week.',
    technologies: ['Python', 'Pandas', 'AWS S3', 'Argo Workflows', 'PostgreSQL'],
    imageUrl: '/images/projects/etl-pipeline.jpg',
    category: 'Data Engineering',
    featured: true,
    createdAt: new Date('2024-07-01')
  },
  {
    id: '3',
    title: 'Surfstore: Fault-Tolerant File Storage',
    description: 'Developed a networked file storage application (based on Dropbox) in Go that lets users sync files to and from the cloud. Implemented the RAFT protocol for fault tolerance and consistent hashing for scalability.',
    technologies: ['Go', 'RAFT', 'gRPC', 'Consistent Hashing'],
    imageUrl: '/images/projects/surfstore.png',
    githubUrl: 'https://github.com/frank-chris/Surfstore',
    category: 'Systems',
    featured: true,
    createdAt: new Date('2023-03-01')
  },
  {
    id: '4',
    title: 'TritonHTTP: HTTP/1.1 Web Server',
    description: 'Developed a web server that implements a subset of the HTTP/1.1 protocol using Go. Implemented support for concurrent connections and virtual hosting.',
    technologies: ['Go', 'HTTP/1.1', 'Concurrent Programming', 'Networking'],
    imageUrl: '/images/projects/tritonhttp.png',
    githubUrl: 'https://github.com/frank-chris/TritonHTTP',
    category: 'Systems',
    featured: false,
    createdAt: new Date('2023-01-01')
  },
  {
    id: '5',
    title: 'SpiroMask: ML-Powered Lung Health Monitor',
    description: 'Developed a system for estimating lung-health parameters using machine learning and audio sensors fitted in consumer-grade N95 and cloth masks with an error rate less than 5%. Published in ACM Transactions on Computing for Healthcare.',
    technologies: ['Python', 'Machine Learning', 'Signal Processing', 'Audio Analysis'],
    imageUrl: '/images/projects/spiromask.png',
    liveUrl: 'https://dl.acm.org/doi/10.1145/3477599',
    category: 'Machine Learning',
    featured: true,
    createdAt: new Date('2022-04-01')
  },
  {
    id: '6',
    title: 'Compiler for C-flavoured Language',
    description: 'Created a compiler for a simple C-flavoured programming language using Flex, Bison, and C. Implemented variables, expressions, control flow, arrays, functions, input/output, and function scope.',
    technologies: ['C', 'Flex', 'Bison', 'Compiler Design'],
    imageUrl: '/images/projects/compiler.jpg',
    githubUrl: 'https://github.com/frank-chris/Compiler',
    category: 'Systems',
    featured: false,
    createdAt: new Date('2021-05-01')
  },
  {
    id: '7',
    title: 'Space Metagenomics Analysis Framework',
    description: 'Built a Python framework to pre-process and visualize low-biomass metagenomic samples collected from space shuttles. Developed LSTM and CNN models in TensorFlow achieving 81% bacterial species classification accuracy.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'CNN', 'Data Visualization'],
    imageUrl: '/images/projects/space-metagenomics.png',
    category: 'Research',
    featured: true,
    createdAt: new Date('2021-07-01')
  },
  {
    id: '8',
    title: 'COVID-19 Data Visualization Dashboard',
    description: 'Worked on data visualization for a PDE-based COVID-19 model. Developed an interactive webpage with time-series plots using FusionCharts.js and choropleth maps using Leaflet.js.',
    technologies: ['Python', 'JavaScript', 'Plotly', 'Leaflet.js', 'HTML/CSS'],
    imageUrl: '/images/projects/covid-dashboard.png',
    category: 'Research',
    featured: false,
    createdAt: new Date('2020-06-01')
  }
]

</script>

<style scoped>
.masonry-wrapper {
  column-count: 1;
  column-gap: 1.5rem;
  width: 100%;
  position: relative;
}

@media (min-width: 640px) {
  .masonry-wrapper {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .masonry-wrapper {
    column-count: 3;
  }
}

@media (min-width: 1536px) {
  .masonry-wrapper {
    column-count: 4;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  display: inline-block;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
}

/* Smooth transition animations */
.project-card-enter-active,
.project-card-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.project-card-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.project-card-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* For smooth repositioning */
.project-card-move {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
}

/* Prevent layout jumps */
.masonry-wrapper > span {
  display: contents;
}

/* Fade in animation when items become visible */
.masonry-item {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>