<script setup lang="ts">
import { ref } from 'vue';
import { AuthStore } from '@/stores/Auth'
import inputTextValidate from '@/components/UI/inputTextValidate.vue';
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import Icon from '@/components/UI/icon.vue';

const authStore = AuthStore()
const loading = ref<boolean>(false)
const isLoginForm = ref<boolean>(false)

const rules =  (value: string) => {  
          if (!value) return 'This field is required'
          if (value.length < 2) return 'Minimum number of characters 4'
          return ''
        }

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
                    class="form__item"
                ></inputTextValidate>
                <inputTextValidate
                    v-model="authStore.authUser.password"
                    :rules="rules"
                    :placeholder="'Password'"
                    type="password"
                    class="form__item"
                ></inputTextValidate>
                <MyBtnSearchPush
                    @click="auth"
                    type="submit" 
                    class="auth__btn">{{ isLoginForm ?  'LOGIN' : 'REGISTRATION' }}

                </MyBtnSearchPush>
            </form> 
            <footer class="footer">
                <section v-if="isLoginForm" class="footer__login footer__section" >
                    <h4>Don't have an account?</h4>
                    <div class="footer__link" @click="isLoginForm = false">
                        <p class="header__item-name">Registration</p>
                        <Icon :icon="'mdi mdi-account-edit-outline'" :size="'25px'"></Icon>
                    </div>
                </section>
                <section v-else class="footer__registration footer__section">
                    <h4>Do you have an account?</h4>
                    <div class="footer__link" @click="isLoginForm = true">
                        <p class="header__item-name">Login</p>
                        <Icon :icon="'mdi mdi-account-key'" :size="'25px'" ></Icon>
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
        border: 2px solid #9f9fa1;
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

        .form{
            .form__item{
                margin-bottom:10px;
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
                cursor: pointer;
                :last-child{
                    margin-left: 5px;
                }
            }
        }
        .auth__btn{
            width: 100%;
        }
    }
</style>