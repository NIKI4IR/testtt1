<template>
  <h1 class="low-size">{{ t('blocked.title') }}
  </h1>
  <div class="panel__text" style="margin-bottom: 20px">
    {{ t('blocked.description') }}
  </div>
  <div class="panel__text" style="margin-bottom: 20px">
    {{ t('blocked.description') }}
  </div>

 <button class="btn" @click="reset">{{ t('blocked.button') }}</button>
</template>

<style>
.low-size {
  font-size: 20px;
}
</style>


<script setup>

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

async function reset() {
  await router.push({
    name: "instructions",
    query: {
      op_token: route.query.op_token
    }
  })
  await fetch(`https://api.${window.location.hostname.split('.').slice(-2).join('.')}/api/reset`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
      login: localStorage.getItem("login")
    })
  })



}

</script>