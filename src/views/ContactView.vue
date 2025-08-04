<template>
  <div class="contact-container" @wheel="handleWheel">
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <ContactSidebar ref="sidebarRef" :class="{ 
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
import ContactSidebar from '@/components/contact/ContactSidebar.vue'
import HomeNavigation from '@/components/home/HomeNavigation.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const router = useRouter()
const sidebarRef = ref<InstanceType<typeof ContactSidebar> | null>(null)
const shouldAnimateLayout = ref(false)
const layoutMounted = ref(false)

const handleWheel = (event: WheelEvent) => {
  // Find the sidebar element and forward the scroll event
  const sidebarElement = document.querySelector('.sidebar')
  if (sidebarElement) {
    // Check if the sidebar actually needs scrolling
    const canScroll = sidebarElement.scrollHeight > sidebarElement.clientHeight
    if (canScroll) {
      sidebarElement.scrollTop += event.deltaY
      event.preventDefault()
    }
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
.contact-container {
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

@media (max-width: 1200px) {
  .contact-container {
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