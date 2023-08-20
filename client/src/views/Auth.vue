<script setup lang="ts">
import { ref } from 'vue';
import { AuthStore } from '@/stores/Auth'

const authStore = AuthStore()
const loading = ref<boolean>(false)
const isLoginForm = ref<boolean>(false)

const rules = [
        (value: string) => {  
          if (!value) return 'This field is required'
          if (value.length < 2) return 'Minimum number of characters 4'
          return true
        },
      ]

const auth = () => {
    if(authStore.authUser.username && authStore.authUser.password) {
       
        loading.value = true
        setTimeout(() => (loading.value = false), 1000)
        
        if (isLoginForm.value) {
            setTimeout(() => {
                console.log('login')
                authStore.login() 
            }, 1000)

        } 
        
        if(!isLoginForm.value) {
            setTimeout(() => {
                console.log('registr')

                authStore.registration() 
            }, 1000)
        }
    } else {
        console.log('Заполните данные')
    }
}

</script>

<template>
    <div class="auth">
        <div class="auth__container">
            <header class="header">
                <section v-if="isLoginForm" class="header__login header__section">
                    <h2>LOGIN</h2>
                    <v-icon icon="mdi mdi-account-key" size="25"></v-icon>
                </section>
                <section v-else class="header__registration header__section">
                    <h2>REGISTRATION</h2>
                    <v-icon icon="mdi mdi-account-edit-outline" size="25"></v-icon>
                </section>
            </header>
            <form @submit.prevent class="form">
                <v-text-field
                    v-model="authStore.authUser.username"
                    :rules="rules"
                    label="Name"
                    elevation="24"
                ></v-text-field>
                <v-text-field
                    v-model="authStore.authUser.password"
                    :rules="rules"
                    label="Password"
                    elevation="24"
                    type="password"
                ></v-text-field>
                <v-btn 
                    :loading="loading"
                    class="flex-grow-1"
                    height="48"
                    @click="auth"
                    block
                    type="submit" 
                    elevation="24"
                    color="indigo-darken-3">{{ isLoginForm ?  'LOGIN' : 'Registration' }}</v-btn>
            </form>
            <footer class="footer">
                <section v-if="isLoginForm" class="footer__login footer__section" >
                    <h4>Don't have an account?</h4>
                    <div class="footer__link" @click="isLoginForm = false">
                        <p class="header__item-name">Registration</p>
                        <v-icon  icon="mdi mdi-account-edit-outline" size="25" color="white"></v-icon>
                    </div>
                </section>
                <section v-else class="footer__registration footer__section">
                    <h4>Do you have an account?</h4>
                    <div class="footer__link" @click="isLoginForm = true">
                        <p class="header__item-name">Login</p>
                        <v-icon  icon="mdi mdi-account-key" size="25" color="white"></v-icon>
                    </div>
                </section>
            </footer>
        </div>
    </div>
</template>

<style lang="scss">
    .auth{
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

    .auth__container{
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        width: 100%;
        padding: 30px;
        border: 2px solid #FFF;
        border-radius: 10px;

        .header{

            &__section {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 15px;
                font-size: 20px;

                :last-child{
                    margin-left: 10px;
                }
            }
        }

        .footer{

            &__section {
                display: flex;
                justify-content: space-between;
                align-items: center;

                margin-top: 25px;
            }

            &__link{
                display: flex;
                align-items: center;
                color: #FFF;
                cursor: pointer;
                :last-child{
                    margin-left: 5px;
                }
            }
        }
    }
</style>