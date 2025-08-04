<template>
  <div class="projects-container" @wheel="handleWheel">
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <ProjectsSidebar ref="sidebarRef" :class="{ 
      'layout-animate': shouldAnimateLayout,
      'layout-mounted': layoutMounted 
    }" />
    <main class="main-content" :class="{ 
      'layout-animate': shouldAnimateLayout,
      'layout-mounted': layoutMounted 
    }">
      <HomeNavigation />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import ProjectsSidebar from '@/components/projects/ProjectsSidebar.vue'
import HomeNavigation from '@/components/home/HomeNavigation.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const router = useRouter()
const sidebarRef = ref<InstanceType<typeof ProjectsSidebar> | null>(null)
const shouldAnimateLayout = ref(false)
const layoutMounted = ref(false)

const handleWheel = (event: WheelEvent) => {
  // Find the sidebar element and forward the scroll event
  const sidebarElement = document.querySelector('.sidebar')
  if (sidebarElement) {
    sidebarElement.scrollTop += event.deltaY
    event.preventDefault()
  }
}

onBeforeMount(() => {
  // Check if we're coming from home page
  const previousRoute = router.options.history.state.back
  const comingFromHome = previousRoute === '/' || !previousRoute
  
  // Animate layout if coming from home page
  shouldAnimateLayout.value = comingFromHome
})

onMounted(() => {
  if (shouldAnimateLayout.value) {
    // Trigger layout animation
    requestAnimationFrame(() => {
      layoutMounted.value = true
    })
  } else {
    // Set layout immediately if not animating
    layoutMounted.value = true
  }
})


</script>

<style scoped>
.projects-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  position: relative;
}

.main-content {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 4rem 4rem 1rem;
  transition: flex-basis 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Layout animation - start with home size when animating */
.main-content.layout-animate {
  flex: 0 0 45%;
}

/* Animate to non-home size when mounted */
.main-content.layout-animate.layout-mounted {
  flex: 0 0 40%;
}

.projects-grid-container {
  width: 100%;
  max-width: 100%;
}

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
    column-count: 2;
  }
}

@media (max-width: 1200px) {
  .projects-container {
    flex-direction: column;
    padding-top: calc(25vh + 4rem);
  }

  .main-content {
    padding: 2rem;
    height: 25vh;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .masonry-wrapper {
    column-count: 1;
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