<script setup lang="ts">
import { ref } from 'vue'
import { AuthStore } from '@/stores/Auth'
import inputTextValidate from '@/components/UI/inputTextValidate.vue'
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue'
import Icon from '@/components/UI/icon.vue'
import { watch } from 'vue'
import router from '@/router'
import LoaderSpinner from '@/components/UI/LoaderSpinner.vue'

const authStore = AuthStore()
const isLoginForm = ref<boolean>(false)
const isloader = ref<boolean>(false)

watch(isLoginForm, () => {
  authStore.errorAuth = ''
})

const rules = (value: string) => {
  if (!value) return 'This field is required'
  if (value.length < 4) return 'Minimum number of characters 4'
  return ''
}

const auth = () => {
  isloader.value = true
  try {
    if (authStore.authUser.username && authStore.authUser.password) {
      isLoginForm.value ? authStore.login() : authStore.registration()
    }
  } catch (e) {
  } finally {
    setTimeout(() => (isloader.value = false), 1000)
  }
}

watch(authStore, () => {
  if (authStore.isAuth) {
    router.push({ path: '/' })
  }
})
</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <header class="auth__header">
        <section v-if="isLoginForm" class="header__login header__section">
          <h2>LOGIN</h2>
          <Icon :icon="'mdi mdi-account-key'" :size="'25px'"></Icon>
        </section>
        <section v-else class="header__registration header__section">
          <h2>REGISTRATION</h2>
          <Icon :icon="'mdi mdi-account-edit-outline'" :size="'25px'"></Icon>
        </section>
      </header>
      <form @submit.prevent class="form">
        <inputTextValidate
          v-model="authStore.authUser.username"
          :rules="rules"
          :placeholder="'Name'"
          :name="'usernameAuth'"
          class="form__item"
        ></inputTextValidate>
        <inputTextValidate
          v-model="authStore.authUser.password"
          :rules="rules"
          :name="'passwordAuth'"
          :placeholder="'Password'"
          type="password"
          class="form__item"
        ></inputTextValidate>
        <MyBtnSearchPush @click="auth" type="submit" class="auth__btn"
          >{{ isLoginForm ? 'LOGIN' : 'REGISTRATION' }}
          <LoaderSpinner v-if="isloader" :size="'18px'" />
        </MyBtnSearchPush>
      </form>
      <footer class="auth__footer">
        <div class="auth__login">
          <h4>{{ isLoginForm ? "Don't have an account?" : 'Do you have an account?' }}</h4>
          <div class="footer__link" @click="isLoginForm = !isLoginForm">
            <p class="header__item-name">{{ isLoginForm ? 'Registration' : 'Login' }}</p>
            <Icon
              :icon="isLoginForm ? 'mdi mdi-account-edit-outline' : 'mdi mdi-account-key'"
              :size="'25px'"
            ></Icon>
          </div>
        </div>
        <transition name="appearance">
          <p v-if="authStore.errorAuth" class="auth__error">
            {{ authStore.errorAuth }}
          </p>
        </transition>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.auth {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 105;
  background-color: #121416;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.auth__container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  padding: 30px;
  border: 2px solid #9f9fa1;
  border-radius: 10px;

  .header {
    &__section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      font-size: 20px;

      :last-child {
        margin-left: 10px;
      }
    }
  }

  .form {
    .form__item {
      margin-bottom: 10px;
    }
  }

  .auth__footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    position: relative;
  }

  .auth__error {
    color: #c23131;
    position: absolute;
    top: -25px;
  }

  .auth__login {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__link {
      display: flex;
      align-items: center;
      cursor: pointer;
      :last-child {
        margin-left: 5px;
      }
    }
  }
  .auth__btn {
    width: 100%;
  }
}
.appearance-enter-from,
.appearance-leave-to {
  opacity: 0;
}

.appearance-enter-active,
.appearance-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
