<template>
  <div ref="turnstile"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  siteKey: {
    type: String,
    required: true
  },
  onVerify: {
    type: Function,
    required: true
  }
})

const turnstile = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
  script.async = true
  script.defer = true
  document.head.appendChild(script)

  script.onload = () => {
    window.turnstile.render(turnstile.value, {
      sitekey: props.siteKey,
      callback: (token) => {
        props.onVerify(token)
      },
      'refresh-expired': 'auto'
    })
  }
})
</script>
