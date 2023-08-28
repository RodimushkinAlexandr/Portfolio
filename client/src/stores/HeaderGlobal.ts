import {defineStore} from 'pinia'
import type HeaderRouterLink from '@/types/HeaderRouterLink'

interface HeaderGlobalState {
    headerRouterLinkDesktop: HeaderRouterLink[]
    headerRouterLinkPhoneBottom: HeaderRouterLink[]
    headerRouterLinkPhoneTop: HeaderRouterLink[]
}
    
export const HeaderGlobal = defineStore({
    id:'HeaderGlobal',
    state: (): HeaderGlobalState => {
        return {
            headerRouterLinkDesktop:  [
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
                    icon: 'mdi mdi-format-list-checkbox',
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
            ],
            headerRouterLinkPhoneBottom: [
                {
                    routerLink: '/Cost',
                    icon: 'mdi mdi-wallet',
                    text: 'Cost'
                },
                {
                    routerLink: '/ToDo',
                    icon: 'mdi mdi-format-list-checkbox',
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
            ],
            headerRouterLinkPhoneTop: [
                {
                    routerLink: '/',
                    icon: 'mdi mdi-home',
                    text: 'Home'
                },
                {
                    routerLink: '/Settings',
                    icon: 'mdi mdi-cog',
                    text: 'Settings'
                },
            ]
        }

    },
})



