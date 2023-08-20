<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import InputTextValidate from '@/components/UI/inputTextValidate.vue';
import MySelect from '@/components/UI/select/MySelect.vue';
import { SettingsStore } from '@/stores/Settings';

const settingsStore = SettingsStore()

settingsStore.getUserData()

const rulesCity = (value:string) => {
    if(value.length < 2) return 'need symbol two'
    return ''
}

</script>

<template>
    <div class="settings container">
        <h2>SETTINGS</h2>
        <InputTextValidate :rules="rulesCity" v-model="settingsStore.user.city"  :placeholder="'My City'" />
        <MyBtnSearchPush @click="settingsStore.patchUser()">Patch</MyBtnSearchPush>
    </div>
</template>

<style lang="scss">
    
</style>