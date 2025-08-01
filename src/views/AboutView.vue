<template>
  <div class="py-12 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Data Engineer at MedWatchers with expertise in ETL pipelines, AI/ML systems, and cloud infrastructure. UCSD MS Computer Science graduate with a passion for building scalable data solutions.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Left Column - Experience & Education -->
      <div class="lg:col-span-2 space-y-12">
        <!-- Current Position Section -->
        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <Briefcase class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
            Current Position
          </h2>
          <div class="space-y-6">
            <ExperienceCard
              :job="currentJob"
              :is-last="true"
              :no-timeline="true"
            />
          </div>
        </section>

        <!-- Education Section -->
        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
            Education
          </h2>
          <div class="space-y-6">
            <EducationCard
              v-for="(edu, index) in education"
              :key="edu.id"
              :education="edu"
              :is-last="index === education.length - 1"
            />
          </div>
        </section>

        <!-- Previous Experience Section -->
        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <History class="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
            Previous Experience
          </h2>
          <div class="space-y-6">
            <ExperienceCard
              v-for="(job, index) in previousJobs"
              :key="job.id"
              :job="job"
              :is-last="index === previousJobs.length - 1"
            />
          </div>
        </section>
      </div>

      <!-- Right Column - Sidebar -->
      <div class="space-y-8">
        <!-- Skills Summary -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <Code2 class="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
            Key Skills
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in topSkills"
              :key="skill"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Hobbies Section -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <Heart class="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
            Hobbies & Interests
          </h3>
          <div class="space-y-4">
            <div
              v-for="hobby in hobbies"
              :key="hobby.name"
              class="flex items-start"
            >
              <component
                :is="hobby.icon"
                class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 flex-shrink-0"
              />
              <div>
                <h4 class="font-medium">{{ hobby.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ hobby.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Resume -->
        <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
          <FileText class="w-12 h-12 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
          <h3 class="font-semibold mb-2">Want to know more?</h3>
          <button class="mt-3 inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            <Download class="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, GraduationCap, Code2, Heart, BookOpen, Palette, FileText, Download, History, Gamepad2 } from 'lucide-vue-next'
import ExperienceCard from '@/components/ExperienceCard.vue'
import EducationCard from '@/components/EducationCard.vue'
import type { Component } from 'vue'

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

const topSkills = [
  'Python', 'Go', 'SQL', 'AWS', 'Docker',
  'FastAPI', 'Pandas', 'PostgreSQL', 'Argo Workflows'
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
</script>