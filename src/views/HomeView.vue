<template>
  <div class="home-container">
    <!-- Loading Screen -->
    <LoadingScreen 
      v-if="showLoading" 
      @complete="handleLoadingComplete"
    />
    
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <HomeSidebar :class="{ 
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
import HomeSidebar from '@/components/home/HomeSidebar.vue'
import HomeNavigation from '@/components/home/HomeNavigation.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const router = useRouter()
const showLoading = ref(false)
const shouldAnimateLayout = ref(false)
const layoutMounted = ref(false)

const handleLoadingComplete = () => {
  showLoading.value = false
}

onBeforeMount(() => {
  // Check if we're coming from a non-home page
  const previousRoute = router.options.history.state.back
  const comingFromNonHome = previousRoute && previousRoute !== '/'
  
  // Animate layout if coming from non-home page
  shouldAnimateLayout.value = !!comingFromNonHome
})

onMounted(() => {
  // Only show loading if this is the very first page load (not SPA navigation)
  const hasNavigated = sessionStorage.getItem('hasNavigated')
  
  if (!hasNavigated) {
    // This is the first page load in this session
    showLoading.value = true
  }
  
  // Mark that user has navigated within the app
  sessionStorage.setItem('hasNavigated', 'true')
  
  // Handle layout animation
  if (shouldAnimateLayout.value) {
    // Trigger layout expansion animation
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
.home-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  position: relative;
}

.main-content {
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 4rem 4rem 1rem;
  transition: flex-basis 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Layout animation - start with non-home size when animating */
.main-content.layout-animate {
  flex: 0 0 40%;
}

/* Animate to home size when mounted */
.main-content.layout-animate.layout-mounted {
  flex: 0 0 45%;
}

@media (max-width: 1200px) {
  .home-container {
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
}
</style>