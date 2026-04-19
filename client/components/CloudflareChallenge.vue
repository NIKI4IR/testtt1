<template>
  <div class="cf-challenge">
    <div ref="turnstileContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['verified'])
const turnstileContainer = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
  script.async = true
  document.head.appendChild(script)

  window.onloadTurnstileCallback = () => {
    window.turnstile.render(turnstileContainer.value, {
      sitekey: '0x4AAAAAAAQnPB4Kk2GVMxxx', // Замените на ваш sitekey
      theme: 'light',
      callback: function(token) {
        emit('verified', token)
      },
    })
  }
})
</script>

<style scoped>
.cf-challenge {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
</style>
