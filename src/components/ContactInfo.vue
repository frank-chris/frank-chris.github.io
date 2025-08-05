<template>
  <div class="contact-info">
    <div class="contact-item">
      <div class="contact-icon">
        <MapPin fill="currentColor" stroke-width="0" />
      </div>
      <div class="contact-details">
        <h3 class="contact-label">
          <MapPin class="contact-label-icon" fill="currentColor" stroke-width="0" />
          Location
        </h3>
        <p class="contact-value">
          San Diego, CA 92130<br />
          United States
        </p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Send fill="currentColor" stroke-width="0" />
      </div>
      <div class="contact-details">
        <h3 class="contact-label">
          <Send class="contact-label-icon" fill="currentColor" stroke-width="0" />
          Email
        </h3>
        <a
          href="mailto:chrisfrancischris@gmail.com"
          class="contact-link"
        >
          chrisfrancischris@gmail.com
        </a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">
        <Phone fill="currentColor" stroke-width="0" />
      </div>
      <div class="contact-details">
        <h3 class="contact-label">
          <Phone class="contact-label-icon" fill="currentColor" stroke-width="0" />
          Phone
        </h3>
        <a
          href="tel:+18583196485"
          class="contact-link"
        >
          +1 (858) 319-6485
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Send, Phone } from 'lucide-vue-next'
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  color: var(--text-color);
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.contact-icon svg {
  width: 20px;
  height: 20px;
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.contact-label-icon {
  display: none;
}

.contact-value {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--text-tertiary);
  line-height: 1.4;
}

.contact-link {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--text-secondary);
}

@media (max-width: 1200px) {
  .contact-info {
    gap: 1.25rem;
  }
  
  .contact-item {
    gap: 0.75rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .contact-icon {
    display: none;
  }
  
  .contact-label-icon {
    width: 18px;
    height: 18px;
    display: block;
  }
  
  .contact-label,
  .contact-value,
  .contact-link {
    font-size: 1rem;
  }
}
</style>