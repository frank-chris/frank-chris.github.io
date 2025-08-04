<template>
  <aside class="sidebar" :class="{ 'visible': isVisible }">
    <div class="sidebar-content">
      <h1 class="section-title">MY PROJECTS</h1>
      <div class="about-info">
        <p class="description">
          A showcase of my data engineering, systems programming, and machine learning projects. Each project represents a solution to real-world challenges using cutting-edge technologies.
        </p>
      </div>
      
      <!-- All Projects Section -->
      <section class="content-section">
        <h2 class="section-title">
          <Star class="section-icon" />
          ALL PROJECTS
        </h2>
        <div class="projects-masonry">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-masonry-item"
          >
            <ProjectCardMasonry :project="project" />
          </div>
        </div>
      </section>
      
    </div>
  </aside>
  
  <!-- Social icons on extreme left - fixed position -->
  <div class="social-icons-vertical">
    <a 
      v-for="social in socials" 
      :key="social.platform"
      :href="social.url" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link"
      :aria-label="social.platform"
    >
      <component :is="social.icon" fill="currentColor" stroke-width="0" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Linkedin, Star } from 'lucide-vue-next'
import ProjectCardMasonry from '@/components/ProjectCardMasonry.vue'
import type { Component } from 'vue'
import type { Project } from '@/types'

interface Social {
  platform: string
  url: string
  icon: Component
}

interface ProjectWithCategory extends Project {
  category: string
}

const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
]


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

const isVisible = ref(false)

onMounted(() => {
  // Trigger fade-in animation after mount
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<style scoped>
.sidebar {
  position: relative;
  width: 60%;
  padding: 4rem 1rem 4rem 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-gutter: stable;
  opacity: 0;
  transition: opacity 0.8s ease-out, width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Layout animation - start with home size when animating */
.sidebar.layout-animate {
  width: 55%;
}

/* Animate to non-home size when mounted */
.sidebar.layout-animate.layout-mounted {
  width: 60%;
}

.sidebar.visible {
  opacity: 1;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.sidebar-content {
  width: 100%;
  padding: 4rem 4rem 4rem 6rem;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}


.about-info {
  margin-bottom: 2rem;
}

.description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.6;
}


.content-section {
  margin-bottom: 3rem;
}

.section-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.featured-project-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.featured-project-item:hover {
  background-color: var(--card-bg-hover);
}

.featured-project-content {
  flex: 1;
}

.featured-project-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.projects-masonry {
  column-count: 2;
  column-gap: 1rem;
  width: 100%;
}

.project-masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
}

.social-icons-vertical {
  position: fixed;
  left: 4rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  z-index: 10;
}

.social-icons-vertical::before,
.social-icons-vertical::after {
  content: '';
  width: 1px;
  height: 6rem;
  background-color: var(--border-color);
}

.social-icons-vertical::before {
  margin-bottom: 1rem;
}

.social-icons-vertical::after {
  margin-top: 1rem;
}

.social-link {
  color: var(--text-color);
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--text-tertiary);
}

.social-link svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 1200px) {
  .sidebar {
    width: 100%;
    padding: 3rem 2rem;
    justify-content: center;
    overflow-y: auto;
    max-height: 100vh;
  }

  .sidebar::-webkit-scrollbar {
    display: none;
  }

  .sidebar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .sidebar-content {
    margin-top: 0;
    text-align: center;
    padding: 2rem 1rem;
  }
  
  .description {
    text-align: left;
  }
  
  .project-masonry-item {
    text-align: left;
  }
  
  .projects-masonry {
    text-align: left;
  }
  
  .content-section {
    text-align: left;
  }

  .social-icons-vertical {
    display: none;
  }

  .section-title {
    font-size: 0.8rem;
  }
  
  
  .projects-masonry {
    column-count: 1;
  }
}
</style>