<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <div class="logo__wrapper">
          <span class="logo__body">

            <NuxtLink :to="{ path: 'sign-in', query: { op_token: route.query.op_token } }" class="logo__link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 30" width="110"
                height="24" class="icon-logo">
                <path fill="#fff"
                  d="M70.6 2.74a2.74 2.74 0 1 1 5.48.02 2.74 2.74 0 0 1-5.48-.02zm45.9 21.03a2.753 2.753 0 0 0
                  2.548-1.69 2.755 2.755 0 0 0-.59-3.001 2.748 2.748 0 0 0-4.234.412 2.755 2.755 0 0 0 .338
                  3.47c.513.515 1.21.806 1.938.809zM25.7 6.73a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0
                  13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4
                  4.55zm39.6-4.12a3.661 3.661 0 0
                  0-.65-.92l-.15-.16.16-.15c.252-.272.482-.563.69-.87l4.39-6.55h-5.33l-3.31 5.13a1.299 1.299 0 0
                  1-1.13.41h-.75V2.91c0-1.93-1.21-2.2-2.51-2.2h-2.23v22.87h4.73v-6.86h.44c.54 0 .91.06 1.08.36l2.62
                  4.89a2.62 2.62 0 0 0 2.82 1.57h3.63l-2.71-4.47-1.79-3.36zm22.97-9.02a6.42 6.42 0 0 0-4.8
                  2l-.29.29-.1-.4a2.17 2.17 0 0 0-2.38-1.5h-2.13v16.49h4.72v-7.6a6.11 6.11 0 0 1 .29-2 3.86 3.86 0 0 1
                  3.81-2.89c1.46 0 2 .77 2 2.78v7.19a2.19 2.19 0 0 0 2.51
                  2.51h2.22V13.07c.03-4.17-2-6.38-5.85-6.38zm-14.88.37h-2.22v16.52h4.7v-14a2.2 2.2 0 0
                  0-2.48-2.52zm-29.23-.33a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0 13.1c-2.35
                  0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4
                  4.55zm100.73-13.1a8.549 8.549 0 0 0-1.545 16.942 8.548 8.548 0 0 0 10.185-8.392 8.277 8.277 0 0
                  0-.585-3.336 8.291 8.291 0 0 0-8.055-5.214zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36
                  0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zM109.74 7.02a2.002 2.002 0 0 0-1.93 1l-.12.25-.22-.19a6.39
                  6.39 0 0 0-4.33-1.44c-4.39 0-7.36 3.31-7.36 8.23s3.07 8.35 7.45 8.35a5.81 5.81 0 0 0
                  3.62-1.06l.36-.28v.46c0 2.21-1.43 3.43-4 3.43a9.463 9.463 0 0 1-3.16-.59 1.39 1.39 0 0 0-2 1l-.91
                  2.28.33.17a12.82 12.82 0 0 0 5.76 1.34c4 0 8.67-2.06 8.67-7.83V7.02h-2.16zm-5.68 12.09c-2.56
                  0-3.48-2.25-3.48-4.35 0-.93.23-4 3.23-4 1.49 0 3.49.42 3.49 4.1 0 3.52-1.76 4.25-3.24
                  4.25zm-90.97-7.26l-.69-.38.6-.5a5.54 5.54 0 0 0 1.88-4.31c0-3.6-2.79-5.92-7.09-5.92H2.31A2.4 2.4 0 0 0
                  0 3.1v20.4h7.88c4.79 0 7.89-2.61 7.89-6.66a5.57 5.57 0 0 0-2.68-4.99zM4.37 6.08c0-1.06.45-1.56
                  1.43-1.62h2a2.47 2.47 0 0 1 2.68 2.69 2.55 2.55 0 0 1-2.66 2.82H4.37V6.08zM8.2 19.64H4.37v-4.58c0-1
                  .39-1.49 1.22-1.61H8.2a3.1 3.1 0 0 1 0 6.19zm166.33-12.9a6.478 6.478 0 0 0-5.05
                  2.45l-.34.44-.27-.49a4.67 4.67 0 0 0-4.45-2.4 6 6 0 0 0-4.33 1.95l-.44.48-.17-.63a2.11 2.11 0 0
                  0-2.3-1.42h-2v16.45h4.46v-7.26a8.452 8.452 0 0 1 .24-1.92c.43-1.76 1.61-3.65 3.59-3.46 1.22.12 1.82
                  1.06 1.82 2.89v9.75h4.52v-7.26a6.626 6.626 0 0 1 .25-2c.36-1.67 1.59-3.39 3.5-3.39 1.38 0 1.89.78 1.89
                  2.89v7.36c0 1.66.74 2.4 2.4 2.4H180v-10.5c0-4.2-1.85-6.33-5.47-6.33zm-40.84 11.12a6.882 6.882 0 0
                  1-4.48 2.11 4.403 4.403 0 0 1-4.367-2.798 4.394 4.394 0 0 1-.293-1.812 4.35 4.35 0 0 1
                  2.665-4.382A4.334 4.334 0 0 1 129 10.65c.84 0 1.8.3 1.95.81v.09a1.659 1.659 0 0 0 1.6
                  1.21H135v-2.15c0-2.84-3.61-3.87-6-3.87-5.19 0-9 3.63-9 8.61 0 4.98 3.73 8.62 8.86 8.62a9.637 9.637 0 0
                  0 7-3.12L134 17.58l-.31.28z"></path>
              </svg>
            </NuxtLink>
          </span>
        </div>
      </div>
      <div class="actions">
        <div id="mobile" class="lang">
          <button class="lang__btn hover-gray" style="margin-bottom: 5px" @click="openModal">
            <span>
              <div class="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M2.25 18.753h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5m0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5m0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5">
                  </path>
                </svg>
              </div>
            </span>
          </button>
        </div>
        <div id="computer" class="lang">
          <button class="lang__btn hover-gray" style="margin-bottom: 5px" @click="openModal">
            <span>
              <div>
                <img :src="`${currentPath || 'https://i.ibb.co/JqvDpSR/us.png'}`" alt="">
              </div>
            </span>
          </button>
        </div>
        <div class="quest">
          <a href="https://partner.booking.com/node/2170?utm_source=account&utm_medium=support_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
              <path
                d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
    <transition name="fade">
      <div v-if="isModalVisible && screenWidth > 1024 || isModalFadingOut && screenWidth > 1024" @click="closeModal"
        class="large-modal-wrapper">
        <div class="modal-minsize-wrapper">
          <div :class="{ 'computer-slide-in': isModalVisible, 'computer-slide-out': !isModalVisible }"
            @animationend="onAnimationEnd" class="large-modal-content">
            <div class="modal-header">
              <h2 class="modal_title">{{ t('header.selectLang') }}</h2>
              <button @click="closeModal" class="hover-gray transparent-button">
                <close-modal-icon style="display: flex;align-content: center" width="16px" height="16px" />
              </button>
            </div>
            <div class="modal-body">
              <div class="lang-wrapper">
                <ul class="lang-list" v-for="(group, groupIndex) in languages" :key="groupIndex">
                  <li v-for="(flag, index) in group" :key="flag.short" class="`list-elem`"
                    @click="changeLocale(flag.short)">

                    <div :class="`lang-btn ${flag.short === locale ? 'selected-lang backround-selected-lang' : ''}`">
                      <NuxtImg :src="flag.flagLink" :alt="flag.long" class="button-icon" />
                      <span class="button-text" :style="{ 'color': flag.short === locale ? '#006ce4' : '' }">{{ flag.long
                        }}</span>
                      <span class="checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#006ce4">>
                          <path
                            d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z">
                          </path>
                        </svg>
                      </span>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div>
      <transition name="fade">
        <div id="mobile-more" v-if="isModalVisible && screenWidth <= 1024 || isModalFadingOut && screenWidth <= 1024"
          :class="{ 'fade-slide-in': isModalVisible, 'fade-slide-out': !isModalVisible }" @animationend="onAnimationEnd"
          class="mobile-large-modal-wrapper">
          <div class="mobile-large-modal-content">
            <div class="mobile-modal-header">
              <div class="mobile-button-wrapper">
                <button @click="closeModal" class="hover-gray mobile-transparent-button">
                  <close-modal-icon style="display: flex;align-content: center" width="16px" height="16px" />
                </button>
              </div>
            </div>
            <div class="mobile-modal-body">
              <h2 class="mobile-modal_title">{{t('header.more')}}</h2>
              <div class="mobile-lang-wrapper">
                <button @click="openMobileModal" class="mobile-lang-btn">
                  <img :src="`${currentPath || 'https://i.ibb.co/JqvDpSR/us.png'}`" alt="image"
                    class="mobile-button-icon">
                  <span class="mobile-button-text">{{ currentMobileLocale }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div id="mobile-lang" v-if="isLangModalVisible || isLangModalFadingOut"
          :class="{ 'background-slide-in': isLangModalVisible, 'background-slide-out': !isLangModalVisible }"
          class="mobile-large-modal-wrapper">
          <div :class="{ 'fade-slide-in': isLangModalVisible, 'fade-slide-out': !isLangModalVisible }"
            @animationend="onMobileLangAnimationEnd" class="mobile-large-modal-content">
            <div class="mobile-modal-header">
              <div class="mobile-button-wrapper">
                <button @click="closeMobileModal" class="hover-gray mobile-transparent-button">
                  <close-modal-icon style="display: flex;align-content: center" width="16px" height="16px" />
                </button>
              </div>
            </div>
            <div class="mobile-modal-body">
              <h2 class="mobile-modal_title">{{t('header.selectLang')}}</h2>
              <div class="mobile-lang-btn" v-for="(flag, index) in languages" :key="index" @click="changeMobileLocale(flag.short)">
                <img :src="flag.flagLink" :alt="flag.short" class="mobile-button-icon">
                <span class="mobile-button-text">{{ flag.long }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script setup>

import { useRoute, useRouter, } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import closeModalIcon from '../assets/img/close-modal.vue'
import { flagNames } from '../utils'

const isModalVisible = ref(false);
const isModalFadingOut = ref(false);
const isLangModalVisible = ref(false);
const isLangModalFadingOut = ref(false);
const { t, locale } = useI18n();

const setLocaleWithCookie = (lang) => {
  const cookie = useCookie('user-locale', {
    maxAge: 365 * 24 * 60 * 60,
    path: '/',
    secure: true,
    sameSite: 'lax'
  });
  locale.value = lang;
  cookie.value = lang;
}

const changeLocale = (lang) => {
  setLocaleWithCookie(lang);
  closeModal();
}

const changeMobileLocale = (lang) => {
  setLocaleWithCookie(lang);
  closeMobileModal();
}
const openMobileModal = () => (isLangModalVisible.value = true)
const closeMobileModal = () => {
  isLangModalFadingOut.value = true;
  isLangModalVisible.value = false;
}
const openModal = () => (isModalVisible.value = true);
const closeModal = () => {
  isModalFadingOut.value = true;
  isModalVisible.value = false;
}
const onAnimationEnd = () => {
  if (!isModalVisible.value) {
    isModalFadingOut.value = false;
  }
}
const onMobileLangAnimationEnd = () => {
  if (!isLangModalVisible.value) {
    isLangModalFadingOut.value = false;
  }
}
const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const languages = ref([])

const screenWidth = ref();
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const currentPath = ref('')
const currentMobileLocale = computed(() => flagNames[locale.value])

watch(() => locale.value, () => {
  currentPath.value = new URL(`../assets/flags/${locale.value}.png`, import.meta.url);
})

onMounted(() => {
  useHead({
    title: 'Sign in | Booking.com',
  })
  if (process.client) {
    screenWidth.value = window.innerWidth;
    let mediaQuery = window.matchMedia("(max-width: 1024px)");

    currentPath.value = new URL(`../assets/flags/${locale.value}.png`, import.meta.url);

    mediaQuery.addEventListener("change", handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
  }
  window.addEventListener("resize", handleResize);
});

onNuxtReady(() => {
  currentPath.value = new URL(`../assets/flags/${locale.value}.png`, import.meta.url);
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

function generateData(flagNames) {
  const result = []
  Object.entries(flagNames).forEach(([short, long]) => {
    const url = new URL(`../assets/flags/${short}.png`, import.meta.url);
    result.push({ 'short': short, 'long': long, 'flagLink': url.href });
  })
  return result
}

function groupedFlags() {
  const grouped = [];
  const data = generateData(flagNames)
  for (let i = 0; i < data.length; i += 4) {
    grouped.push(data.slice(i, i + 4));
  }
  return grouped;
}


function handleScreenSizeChange(event) {
  isModalVisible.value = false
  isLangModalVisible.value = false
  if (event.matches) {
    return languages.value = generateData(flagNames)
  } else {
    return languages.value = groupedFlags()
  }
}

const closeModalOnBackgroundClick = (event) => {
  const element = document.querySelector('');
  if (element) {
    element.classList.add('computer-slide-out');
  }
};

</script>

<style scoped>
header.header {
  z-index: 500;
  /* Уменьшите z-index, чтобы оно не перекрывало модальное окно */
  position: relative;
}

.large-modal-wrapper {
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 15;
}

@keyframes fadeSlideInFromBottom {
  0% {
    opacity: 0;
    /* Элемент полностью прозрачный */
    transform: translate(-50%, -45%)
  }

  25% {
    opacity: 0.45;
  }

  85% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
    /* Элемент становится видимым */
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeSlideOutToBottom {
  0% {
    opacity: 1;
    /* Элемент становится видимым */
    transform: translate(-50%, -50%);
  }

  25% {
    opacity: 0.75;
  }

  85% {
    opacity: 0.45;
  }

  100% {
    opacity: 0;
    /* Элемент полностью прозрачный */
    transform: translate(-50%, -45%)
  }
}

@keyframes backSlideIn {
  0% {
    opacity: 0;
    /* Элемент полностью прозрачный */
  }

  100% {
    opacity: 1;
    /* Элемент становится видимым */
  }
}

@keyframes backSlideOut {
  0% {
    opacity: 1;
    /* Элемент полностью прозрачный */
  }

  100% {
    opacity: 0;
    /* Элемент становится видимым */
  }
}

.computer-slide-in {
  animation: fadeSlideInFromBottom 0.3s ease-out forwards;
}

.computer-slide-out {
  animation: fadeSlideOutToBottom 0.3s ease-in forwards;
}

.background-slide-in {
  animation: backSlideIn 0.3s;
}

.modal-minsize-wrapper {
  min-width: 920px;
}

.large-modal-wrapper {
  display: flex;
  justify-content: center;
  /* Центрирование содержимого по горизонтали */
  align-items: center;
  /* Центрирование содержимого по вертикали */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* Полная ширина экрана */
  height: 100vh;
  /* Полная высота экрана */
  background-color: rgba(0, 0, 0, 0.5);
  /* Полупрозрачный фон для затемнения */
  z-index: 15;
  /* Высокий индекс слоя */
}

.large-modal-content {
  background-color: white;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
  position: fixed;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.lang-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-header {
  padding: 24px 12px 0 24px;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
}

.modal-body {
  padding: 0 24px 0 24px;
  width: 100%;
  height: 100%;
}

.modal_title {
  font-size: 20px;
  left: 0;
  width: 95%;
  text-align: start;
  align-self: flex-start;
  margin: 0
}

.transparent-button {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 4px 8px;
  margin: -8px -8px 0 0;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 1em;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s, background-color 0.3s;
}

.lang-btn {
  display: flex;
  /* Используем flexbox для горизонтального выравнивания */
  align-items: center;
  /* Вертикально выравниваем элементы */
  padding: 12px;
  /* Отступы для кнопки */
  background-color: white;
  /* Цвет фона кнопки */
  border: none;
  /* Убираем стандартную границу */
  cursor: pointer;
  /* Курсор в виде руки при наведении */
  border-radius: 5px;
  /* Скругление углов */
  width: 204px;
  height: 48px;
}

.button-icon {
  border-radius: 50%;
  border: 1px solid #e7e7e7;
}

/* Стили для кнопки при наведении */
.lang-btn:hover {
  background-color: #f2f2f2;
  /* Цвет фона при наведении */
}

/* Стили для изображения внутри кнопки */
.button-icon {
  margin-right: 10px;
  /* Отступ справа от картинки для разделения с текстом */
  width: 20px;
  /* Ширина изображения */
  height: 20px;
  /* Высота изображения */
}

/* Стили для текста внутри кнопки */
.button-text {
  font-size: 14px;
  /* Размер текста */
  width: 100%;
  text-align: left;
}

ul {
  list-style-type: none;
  /* Убирает маркеры (точки) у списка */
  padding: 0;
  /* Убирает внутренние отступы списка */
  margin: -16px -16px 8px 0;
  width: 880px;
  height: 64px;
}

li {
  margin: 10px 0;
  /* Отступы между элементами списка */
}


.mobile-large-modal-content {
  position: absolute;
  /* Абсолютное позиционирование */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  /* Вертикальная прокрутка */
  overflow-x: hidden;
  /* Без горизонтальной прокрутки */
  -webkit-overflow-scrolling: touch;
  /* Плавная прокрутка на iOS */
  display: block;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  /* Сохраняем padding-bottom для контента */
  box-sizing: border-box;
  /* Учитываем padding в размере блока */
}

.nav {
  position: relative;
  /* Для правильной работы с z-index */
  z-index: 1;
  /* Меньший z-index для навигации */
}

.mobile-large-modal-wrapper {
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 110vh;
  color: #1a1a1a;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* Прозрачный фон */
  z-index: 10;
  /* Модальное окно будет поверх навигации */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Дополнительные стили для модального окна */
}

.mobile-modal-header {
  display: flex;
  justify-content: flex-end;
  /* Выровнять содержимое вправо */
  align-items: center;
  /* Центровка по вертикали */
  padding: 8px;
  /* Добавить отступы, если необходимо */
}

.mobile-modal-body {
  padding-bottom: 80px;
}

.mobile-modal_title {
  font-size: 24px;
  margin: 0;
  padding: 24px;
}

.hover-gray:hover {
  background-color: rgba(195, 195, 195, 0.2);
  /* Серый полупрозрачный наложенный цвет */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Тень для дополнительного эффекта */
  border-radius: 2px;
}

.menu-icon {
  background-color: transparent;
  /* Убедимся, что фон прозрачный */
  cursor: pointer;
  /* Указывает, что элемент кликабельный */
  padding-left: 0;
}

.mobile-button-wrapper {
  display: flex;
  /* Убедитесь, что это flex-контейнер */
  align-items: center;
  /* Центровка содержимого по вертикали */
  justify-content: flex-end;
  /* Содержимое перемещено вправо */
  width: auto;
  /* Сброс ширины */
  margin: 0;
  /* Уберите любые отступы, которые могут мешать */
}

.mobile-transparent-button {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 1em;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s, background-color 0.3s;
  margin: 0;
  /* Сброс отступов */
  padding: 4px;
  /* Добавьте небольшой внутренний отступ */
}

.menu-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
  /* Легкий прозрачный фон при наведении */
}

.mobile-lang-btn {
  display: flex;
  /* Используем flexbox для горизонтального выравнивания */
  align-items: center;
  /* Вертикально выравниваем элементы */
  padding: 16px 24px 16px 24px;
  background-color: white;
  /* Цвет фона кнопки */
  border: none;
  /* Убираем стандартную границу */
  cursor: pointer;
  /* Курсор в виде руки при наведении */
  border-radius: 5px;
  /* Скругление углов */
  width: 100%;
  height: 56px;
}

.mobile-lang-btn:hover {
  background-color: #f2f2f2;
  /* Цвет фона при наведении */
}

.mobile-button-icon {
  margin-right: 10px;
  /* Отступ справа от картинки для разделения с текстом */
  width: 24px;
  /* Ширина изображения */
  height: 24px;
  /* Высота изображения */
  border-radius: 50%;
  border: 1px solid #e7e7e7;
}

#mobile {
  display: none;
}

@media (max-width: 1024px) {

  #mobile {
    display: block;
    background-color: transparent;
    border-radius: 10px;
  }

  #computer {
    display: none;
  }

  .quest {
    display: none;
  }

  .large-modal-wrapper {
    display: none;
  }

  .mobile-large-modal-content {
    display: block;
  }
}

/* Анимация для появления (fade-in) */
@keyframes fadeSlideIn {
  0% {
    opacity: 0.35;
    transform: translateY(5%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Анимация для исчезновения (fade-out) */
@keyframes fadeSlideOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0.0;
    transform: translateY(3%);
  }
}

.selected-lang .checkmark {
  width: 30px;
  height: 80%;
  color: #006ce4;
  display: flex;
  justify-content: center;
}

.backround-selected-lang {
  background-color: rgba(0, 108, 228, .06);
}

.fade-slide-in {
  animation: fadeSlideIn 0.3s ease-out forwards;
}

.fade-slide-out {
  animation: fadeSlideOut 0.3s ease-in forwards;
}
</style>