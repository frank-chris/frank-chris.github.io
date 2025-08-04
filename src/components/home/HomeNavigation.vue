<template>
  <nav class="nav-links" :class="{ 
    'non-home': isNonHomePage, 
    'mounted': mounted,
    'home-page': isHomePage,
    'home-animate': shouldAnimateHome,
    'home-mounted': homeMounted 
  }">
    <router-link 
      v-for="link in navLinks" 
      :key="link.path"
      :to="link.path" 
      class="nav-item"
      :class="{ 'active': $route.path === link.path }"
    >
      <span class="nav-text">{{ link.text }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface NavLink {
  text: string
  path: string
}

interface Props {
  navLinks?: NavLink[]
}

withDefaults(defineProps<Props>(), {
  navLinks: () => [
    { text: 'HOME', path: '/' },
    { text: 'PROJECTS', path: '/projects' },
    { text: 'ABOUT', path: '/about' },
    { text: 'CONTACT', path: '/contact' }
  ]
})

const route = useRoute()
const router = useRouter()
const isNonHomePage = computed(() => route.path !== '/')
const isHomePage = computed(() => route.path === '/')
const shouldAnimate = ref(false)
const shouldAnimateHome = ref(false)
const mounted = ref(false)
const homeMounted = ref(false)

onBeforeMount(() => {
  // Check if we're coming from home page
  const previousRoute = router.options.history.state.back
  const comingFromHome = previousRoute === '/' || !previousRoute
  const comingFromNonHome = previousRoute && previousRoute !== '/'
  
  // Only animate if we're on a non-home page AND coming from home
  shouldAnimate.value = isNonHomePage.value && comingFromHome
  
  // Animate home page if coming from non-home page
  shouldAnimateHome.value = isHomePage.value && !!comingFromNonHome
})

onMounted(() => {
  if (shouldAnimate.value) {
    // Trigger animation after mount
    requestAnimationFrame(() => {
      mounted.value = true
    })
  } else if (isNonHomePage.value) {
    // If on non-home page but not animating, set mounted immediately
    mounted.value = true
  }
  
  if (shouldAnimateHome.value) {
    // Trigger home page growth animation
    requestAnimationFrame(() => {
      homeMounted.value = true
    })
  } else if (isHomePage.value) {
    // If on home page but not animating, set mounted immediately
    homeMounted.value = true
  }
})
</script>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -2rem;
}

.nav-item {
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.nav-text {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 400;
  color: var(--text-color);
  letter-spacing: -0.03em;
  line-height: 0.85;
  display: block;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
}

/* Initial state for non-home pages - start with home size */
.nav-links.non-home .nav-text {
  font-size: clamp(4rem, 10vw, 8rem);
}

/* Animated text size reduction for non-home pages after mount */
.nav-links.non-home.mounted .nav-text {
  font-size: clamp(2.2rem, 6vw, 5rem);
}

/* Home page growth animation - start with smaller size */
.nav-links.home-page.home-animate .nav-text {
  font-size: clamp(2.5rem, 7vw, 5.5rem);
}

/* Animate to full size when mounted */
.nav-links.home-page.home-animate.home-mounted .nav-text {
  font-size: clamp(4rem, 10vw, 8rem);
}


.nav-item:hover .nav-text {
  transform: translateX(-30px);
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-stroke: 2px var(--text-color);
}

.nav-item.active .nav-text {
  color: transparent;
  -webkit-text-stroke: 2px var(--text-color);
  text-stroke: 2px var(--text-color);
}

@media (max-width: 1200px) {
  .nav-links {
    align-items: center;
  }
  
  .nav-text {
    font-size: clamp(4rem, 10vw, 7rem);
    text-align: center;
  }
  
  .nav-links.non-home .nav-text {
    font-size: clamp(4rem, 10vw, 7rem);
  }
  
  .nav-links.non-home.mounted .nav-text {
    font-size: clamp(2.5rem, 7vw, 5rem);
  }
  
  .nav-links.home-page.home-animate .nav-text {
    font-size: clamp(3rem, 8vw, 5.5rem);
  }
  
  .nav-links.home-page.home-animate.home-mounted .nav-text {
    font-size: clamp(4rem, 10vw, 7rem);
  }
}

@media (max-width: 768px) {
  .nav-text {
    font-size: clamp(3rem, 15vw, 5rem);
  }
  
  .nav-links.non-home .nav-text {
    font-size: clamp(3rem, 15vw, 5rem);
  }
  
  .nav-links.non-home.mounted .nav-text {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
  
  .nav-links.home-page.home-animate .nav-text {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
  
  .nav-links.home-page.home-animate.home-mounted .nav-text {
    font-size: clamp(3rem, 15vw, 5rem);
  }
}
</style>