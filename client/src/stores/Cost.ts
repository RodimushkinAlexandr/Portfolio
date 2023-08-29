import {defineStore } from 'pinia'
import api from '../api/axiosClient'
import refreshTokenUser from '@/api/axiosRefreshToken'
import type Cost from '@/types/CostTypes'
import type NewCost from '@/types/CostNewTypes'
import type Categories from '@/types/CategoryTypes'


interface CostStore {
    cost: NewCost,
    costs: Cost[],
    categories: Categories[]
}
    
export const CostStore = defineStore({
    id: 'Cost',
    state: (): CostStore => {
        return {
            cost: {
                comment: '',
                price: null,
                category: null,
                date: new Date(),
                _id: undefined
            },
            costs: [],
            categories: [ {value: 'Food', icon: 'mdi mdi-food-outline', color: 'A8D9B'},
                          {value: 'Health', icon: 'mdi mdi-bottle-tonic-plus-outline', color: 'E3D4D0'},
                          {value: "Car", icon: "mdi mdi-car", color: 'A6A9C8'},
                          {value: "Sport", icon: "mdi mdi-basketball", color: 'DABEB6'},
                          {value: "Gift", icon: "mdi mdi-gift-outline", color: 'd46a92'},
                          {value: "Education", icon: "mdi mdi-school", color: 'a5297ac'},
                          {value: "Cafe", icon: 'mdi mdi-coffee-outline', color: 'a6c6c1'},
                          {value: "Family", icon: 'mdi mdi-human-male-female-child', color: 'debfb5'},
                          {value: "Home", icon: 'mdi mdi-home-city-outline', color: 'baa6a5'},
                          {value: "Credit", icon: 'mdi mdi-credit-card-check-outline', color: 'BFB9CF'},
                          {value: "Game", icon: 'mdi mdi-gamepad-variant-outline', color: 'c715f65'},
                          {value: "Other", icon: 'mdi mdi-arrow-all', color: 'f5a3b7'},
                        ],
        }
    },
    getters: {
        totalCost(state) {
            return state.costs.reduce((acuum, item) => acuum + item.price, 0)
        },
    },
    actions: {
        async createNewCost(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                await api.post('/cost/', this.cost, {headers: {'Authorization' : `Bearer ${token}`}})
                this.resetCost()
            } catch (e) {
                console.log(e)
            }
        },
        async getAllCosts(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const costs = await api.get('/cost/', {headers: {'Authorization' : `Bearer ${token}`}})

                this.costs = costs.data
            } catch(e) {
                console.log(e)
            }
        },
        async deleteCost(id:string): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const costs = await api.delete(`/cost/${id}`, {headers: {'Authorization' : `Bearer ${token}`} })
            } catch(e) {
                console.log(e)
            }
        },
        // async updateCost(): Promise<void> {
        //     try {
        //         await refreshTokenUser()
        //         const token = (JSON.parse(localStorage.getItem('auth') || '{}')).access_token
        //         await api.post('/cost/', this.cost, {headers: {'Authorization' : `Bearer ${token}`}})
        //     } catch (e) {
        //         console.log(e)
        //     }
        // }, 
        async resetCost(): Promise<void>  {
            this.cost.comment = ''
            this.cost.price = null
            this.cost.category = null
            this.cost.date = new Date();
        }
    }
})

// interface Cost {
//     comment: string
//     price: string
//     category: string | null
//     date: Date
//     _id: string | undefined
// }
