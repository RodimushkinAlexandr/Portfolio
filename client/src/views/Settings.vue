<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import InputText from '@/components/UI/inputText.vue';
import InputTextValidate from '@/components/UI/inputTextValidate.vue';
import MySelect from '@/components/UI/select/MySelect.vue';
import { MoviesStore } from '@/stores/Movies';
import { SettingsStore } from '@/stores/Settings';
import { WeatherStore } from '@/stores/Weather';

const settingsStore = SettingsStore()
const moviesStore = MoviesStore()
const weatherStore = WeatherStore()

settingsStore.getUserData()
moviesStore.getAllFilters()


const rulesCity = async (value:string) => {
   weatherStore.queryCity = value
   await weatherStore.getWeatherData()
   return weatherStore.weatherEror
}

const saveData = () => {
    if(weatherStore.weatherEror.length == 0) settingsStore.patchUser()
}

</script>

<template>
    <div class="container">
        <div class="userdata">
            <h1 class="userdata__title">Data Settings</h1>
            <form @submit.prevent="saveData">
                <div class="userdata__blocks">
                    <div class="userdata__block userdata__name">
                        <p class="userdata__label">Name</p>
                        <InputText v-model="settingsStore.user.username"  />
                    </div>
                    <div class="userdata__block userdata__city">
                        <p class="userdata__label">City</p>
                        <InputTextValidate :rules="rulesCity" v-model="settingsStore.user.city"  />
                    </div>
                    <div class="userdata__block userdata__movies">
                        <MySelect :options="moviesStore.filters.genres" v-model:selected="settingsStore.user.genreMovies"  :name="`Genre`" />
                    </div>
                    <MyBtnSearchPush class="userdata__save">Save Settings</MyBtnSearchPush>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.userdata {

&__title {
    font-size: 20px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid;
    display: inline-block;
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
}
}

@media (max-width: 420px) {
    .userdata__news{
        display: flex;
        flex-direction: column;
    }
}

</style>
