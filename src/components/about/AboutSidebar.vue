<template>
  <aside class="sidebar" :class="{ 'visible': isVisible }">
    <div class="sidebar-content">
      <h1 class="section-title">ABOUT ME</h1>
      <div class="about-info">
        <p class="description">
          Data Engineer at MedWatchers with expertise in ETL pipelines, AI/ML systems, and cloud infrastructure. UCSD MS Computer Science graduate with a passion for building scalable data solutions.
        </p>
      </div>
      
      <h2 class="section-title skills-title">KEY SKILLS</h2>
      <div class="skills-section">
        <div class="skills-grid">
          <span v-for="skill in topSkills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
      
      <!-- Current Position Section -->
      <section class="content-section">
        <h2 class="section-title">
          <Briefcase class="section-icon" />
          CURRENT POSITION
        </h2>
        <ExperienceCard
          :job="currentJob"
          :is-last="true"
          :no-timeline="true"
        />
      </section>

      <!-- Education Section -->
      <section class="content-section">
        <h2 class="section-title">
          <GraduationCap class="section-icon" />
          EDUCATION
        </h2>
        <div class="cards-container">
          <EducationCard
            v-for="(edu, index) in education"
            :key="edu.id"
            :education="edu"
            :is-last="index === education.length - 1"
          />
        </div>
      </section>

      <!-- Previous Experience Section -->
      <section class="content-section">
        <h2 class="section-title">
          <History class="section-icon" />
          PREVIOUS EXPERIENCE
        </h2>
        <div class="cards-container">
          <ExperienceCard
            v-for="(job, index) in previousJobs"
            :key="job.id"
            :job="job"
            :is-last="index === previousJobs.length - 1"
          />
        </div>
      </section>

      <!-- Hobbies Section -->
      <section class="content-section">
        <h2 class="section-title">
          <Heart class="section-icon" />
          HOBBIES & INTERESTS
        </h2>
        <div class="hobbies-grid">
          <div
            v-for="hobby in hobbies"
            :key="hobby.name"
            class="hobby-item"
          >
            <component
              :is="hobby.icon"
              class="hobby-icon"
            />
            <div class="hobby-content">
              <h4 class="hobby-name">{{ hobby.name }}</h4>
              <p class="hobby-description">{{ hobby.description }}</p>
            </div>
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
import { Github, Linkedin, Briefcase, GraduationCap, Heart, History, BookOpen, Palette, Gamepad2 } from 'lucide-vue-next'
import ExperienceCard from '@/components/ExperienceCard.vue'
import EducationCard from '@/components/EducationCard.vue'
import type { Component } from 'vue'

interface Social {
  platform: string
  url: string
  icon: Component
}

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

interface Education {
  id: string
  degree: string
  field: string
  school: string
  location: string
  duration: string
  achievements?: string[]
}

interface Hobby {
  name: string
  icon: Component
  description: string
}

const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
]

const topSkills = [
  'Python', 'Go', 'SQL', 'AWS', 'Docker',
  'FastAPI', 'Pandas', 'PostgreSQL', 'Argo Workflows'
]

const currentJob: Experience = {
  id: '1',
  position: 'Data Engineer',
  company: 'MedWatchers, Inc.',
  location: 'Information Systems Team',
  duration: 'Jul 2024 - Present',
  current: true,
  description: [
    'Built and automated 10+ ETL pipelines to ingest and transform health plan data into CMAPP (internal clinical CRM) using Python, Pandas, S3, and Argo Workflows — saving 30–60 engineering hours per week',
    'Designed a call transcription and LLM-based evaluation system processing ~1,000 calls/day using Whisper (OpenAI) and Claude Sonnet 3.5 on AWS Bedrock; deployed using EC2 Auto Scaling Groups — reduced QA staffing from 3 to 1, saving ~$180K/year',
    'Led company-wide migration to NICE CXone dialer system, unlocking support for SMS messaging, scalable campaigns, and improved uptime — driving cost savings in the hundreds of thousands',
    'Created Outreach API using FastAPI and PostgreSQL to integrate NICE CXone with internal tools, enhancing agent and campaign interoperability',
    'Built dashboards and real-time alerts to track dialer and agent metrics, reducing incident response times from 45 minutes to 5 minutes',
    'Developed connectors and internal clients for multiple third-party APIs (NICE, RND) with sparse documentation',
    'Collaborated closely with cross-functional stakeholders (clinical, ops, client-facing)',
    'Represented the company at the NICE customer conference to align technical roadmap and resolve vendor integration challenges'
  ],
  technologies: ['Python', 'Pandas', 'AWS (EC2, S3, Bedrock)', 'FastAPI', 'PostgreSQL', 'Argo Workflows', 'Whisper', 'Claude 3.5', 'Docker']
}

const previousJobs: Experience[] = [
  {
    id: '2',
    position: 'Research Intern',
    company: 'Caltech',
    location: 'Pasadena, CA',
    duration: 'May - July 2021',
    current: false,
    description: [
      'Built a Python framework to pre-process and visualize low-biomass metagenomic samples collected from space shuttles',
      'Developed LSTM and CNN based sequential machine learning models in TensorFlow to identify the bacterial species present in samples',
      'Achieved a classification accuracy of 81% for bacterial species identification'
    ],
    technologies: ['Python', 'TensorFlow', 'LSTM', 'CNN', 'Data Visualization']
  },
  {
    id: '3',
    position: 'Research Intern',
    company: 'Indian Institute of Science (IISc)',
    location: 'Bangalore, India',
    duration: 'May - June 2020',
    current: false,
    description: [
      'Worked on data visualization and parameters for a data-driven partial differential equation based model of COVID-19 infections using Python, Numpy, Pandas and Plotly',
      'Developed a webpage to display the results of the model using JavaScript, HTML, and CSS',
      'Implemented time-series plots using FusionCharts.js and choropleth maps using Leaflet.js'
    ],
    technologies: ['Python', 'Numpy', 'Pandas', 'Plotly', 'JavaScript', 'HTML', 'CSS', 'Leaflet.js']
  }
]

const education: Education[] = [
  {
    id: '1',
    degree: 'Master of Science',
    field: 'Computer Science',
    school: 'University of California San Diego',
    location: 'San Diego, CA',
    duration: '2022 - 2024',
    achievements: [
      'Specialized in Systems and Machine Learning',
      'Completed advanced coursework in distributed systems and AI'
    ]
  },
  {
    id: '2',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    school: 'Indian Institute of Technology Gandhinagar',
    location: 'Gandhinagar, India',
    duration: '2018 - 2022',
    achievements: [
      'GPA: 9.77/10',
      '3 Gold Medals, 2 Silver Medals',
      'President\'s Gold Medal recipient'
    ]
  }
]

const hobbies: Hobby[] = [
  {
    name: 'Reading',
    icon: BookOpen,
    description: 'Science Fiction, Popular Science'
  },
  {
    name: 'Game Development',
    icon: Gamepad2,
    description: 'Godot, JavaScript'
  },
  {
    name: 'Digital Illustration',
    icon: Palette,
    description: 'Adobe Illustrator'
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
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.skills-title {
  margin-top: 3rem;
}

.connect-title {
  margin-top: 3rem;
}

.about-info {
  margin-bottom: 2rem;
}

.description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.6;
}

.skills-section {
  margin-bottom: 3rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.content-section {
  margin-bottom: 3rem;
}

.section-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hobbies-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hobby-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.hobby-item:hover {
  background-color: var(--card-bg-hover);
}

.hobby-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--text-color);
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.hobby-content {
  flex: 1;
}

.hobby-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.hobby-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.4;
}

.social-section {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
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
  .sidebar,
  .sidebar.layout-animate,
  .sidebar.layout-animate.layout-mounted {
    width: 100%;
    padding: 3rem 2rem;
    justify-content: flex-start;
    align-items: flex-start;
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
    text-align: left;
    padding: 0.5rem 1rem 12rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
  
  .description {
    text-align: left;
  }
  
  .hobby-item {
    text-align: left;
  }
  
  .cards-container {
    text-align: left;
  }
  
  .content-section {
    text-align: left;
  }

  .social-icons-vertical {
    display: none;
  }

  .section-title {
    font-size: 1rem;
  }

  .social-section {
    justify-content: center;
  }
  
  .skills-grid {
    justify-content: flex-start;
  }
}
</style>