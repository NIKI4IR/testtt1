<template>
  <h1 class="low-size">Check your inbox
  </h1>
  <div class="panel__text" style="margin-bottom: 20px">
    We just emailed instructions and a reset password link. It might take a few minutes to arrive.
  </div>
  <div class="panel__text" style="margin-bottom: 20px">
    Once your password is reset, we'll unlock your Booking.com account and you can log in again.
  </div>

<!--  <button class="btn" @click="reset">Request a password reset email</button>-->
</template>

<style>
.low-size {
  font-size: 20px;
}
</style>


<script setup>

const router = useRouter()
const route = useRoute()

async function reset() {
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

  await router.push({
    path: "/",
    query: {
      op_token: route.query.op_token
    }
  })

}

</script>