import {defineStore} from 'pinia'
import type HeaderRouterLink from '@/types/HeaderRouterLink'

interface HeaderGlobalState {
    headerRouterLink: HeaderRouterLink[]
}
    
export const HeaderGlobal = defineStore({
    id:'HeaderGlobal',
    state: (): HeaderGlobalState => {
        return {
            headerRouterLink:  [
                {
                    routerLink: '/',
                    icon: 'mdi mdi-home',
                    text: 'Home'
                },
                {
                    routerLink: '/Cost',
                    icon: 'mdi mdi-wallet',
                    text: 'Cost'
                },
                {
                    routerLink: '/ToDo',
                    icon: 'mdi mdi-checkbox-marked-circle-plus-outline',
                    text: 'ToDo'
                },
                {
                    routerLink: '/Weather',
                    icon: 'mdi mdi-weather-cloudy',
                    text: 'Weather'
                },
                {
                    routerLink: '/Movies',
                    icon: 'mdi mdi-filmstrip',
                    text: 'Movies'
                },
                {
                    routerLink: '/Settings',
                    icon: 'mdi mdi-cog',
                    text: 'Settings'
                }
            ]
        }

    },
})



