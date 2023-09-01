<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import InputText from '@/components/UI/inputText.vue';
import InputTextValidate from '@/components/UI/inputTextValidate.vue';
import MySelect from '@/components/UI/select/MySelect.vue';
import router from '@/router';
import { AuthStore } from '@/stores/Auth';
import { MoviesStore } from '@/stores/Movies';
import { SettingsStore } from '@/stores/Settings';
import { WeatherStore } from '@/stores/Weather';
import { watch } from 'vue';
import { ref } from 'vue';

const settingsStore = SettingsStore()
const moviesStore = MoviesStore()
const weatherStore = WeatherStore()
const authStore = AuthStore()

settingsStore.getUserData()
moviesStore.getAllFilters()


const rulesCity = async (value:string) => {
   weatherStore.queryCity = value
   await weatherStore.getWeatherData()
   if(weatherStore.weather) return weatherStore.weather = null
   return weatherStore.weatherEror
}

const saveData = () => {
    if(weatherStore.weatherEror.length == 0) {
        moviesStore.moviesList = []
        settingsStore.patchUser()
        isSuccessSave.value = true
    } 
}

const isSuccessSave = ref<boolean>(false)

watch(settingsStore, () => isSuccessSave.value = false)

const logout = () => {
    localStorage.removeItem('auth')
    authStore.isAuth = false
    router.push('Authorization')
}

</script>

<template>
    <div class="container">
        <div class="userdata">
            <header class="userdata__header">
                <h1 class="userdata__title">Data Settings</h1>
                <MyBtnSearchPush @click="logout" :background="'#502425'">LOGOUT</MyBtnSearchPush>
            </header>
            <form @submit.prevent="saveData">
                <div class="userdata__blocks">
                    <div class="userdata__block userdata__name">
                        <p class="userdata__label">Name</p>
                        <InputText v-model="settingsStore.user.username"  />
                    </div>
                    <div class="userdata__block userdata__city">
                        <p class="userdata__label">City</p>
                        <InputTextValidate :rules="rulesCity" v-model="settingsStore.user.city" :placeholder="'Enter your City'"  />
                    </div>
                    <div class="userdata__block userdata__movies">
                        <MySelect :options="moviesStore.filters.genres" v-model:selected="settingsStore.user.genreMovies"  :name="`Genre`" />
                    </div>
                    <div class="userdata__save">
                        <transition name="success">
                            <p class="isSuccessSave" v-if="isSuccessSave">Saved Successfully</p>
                        </transition>
                        <MyBtnSearchPush>Save Settings</MyBtnSearchPush>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.userdata {
&__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

&__title {
    font-size: 20px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid;
}

// .userdata__blocks

&__blocks {
    display: flex;
    flex-direction: column;
}

// .userdata__block

&__block {

    &:not(:last-child) {
        margin-bottom: 13px;
    }
}

&__label {
    margin: 0px 0px 3px 5px;
}


&__movies {
    display: flex;
    gap: 5px;
}
&__save {
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 5px;
}
}

@media (max-width: 420px) {
    .userdata__news{
        display: flex;
        flex-direction: column;
    }
}
.isSuccessSave{
    color: green;
}

//success
.success-leave-active,
.success-enter-active {
  transition: all .3s ease-in;
}


.success-enter-from,
.success-leave-to {
    opacity: 0;
    transform: translate(20px);
}
</style>
