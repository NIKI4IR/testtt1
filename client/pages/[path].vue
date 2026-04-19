<template>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const pathValue = route.params.path
console.log('Redirecting from:', pathValue)


onNuxtReady(async () => {
  const token = generateRandomString(194)
  const localItem = localStorage.getItem("token")

  if (!localItem) {
    localStorage.setItem("token", token)
  }

  if (route.query.op_token) {
    return
  }
  await router.push({
    path: 'sign-in',
    query: {op_token: localStorage.getItem("token")}
  })
  await joinDomain(localStorage.getItem("token"), pathValue)

  
})
</script>
