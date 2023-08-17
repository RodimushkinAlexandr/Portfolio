import {defineStore} from 'pinia'
import axios from 'axios'
import api from '../api/axiosClient'
import type Task from '@/types/ToDoTypes'

interface ToDoState {
    tasks: Task[]
    task: Task
}

export const useToDoTore = defineStore({
    id:'ToDo',
    state: (): ToDoState => ({
        tasks: [],
        task: {
            _id: '',
            title: '',
            description: '',
            completed: false,
            userId: ''
        },
    }),
    getters: {

    },
    actions: {
        async CreateToDo(): Promise<void> {
            try {
                const todo = await api.post('/auth/todo/', this.task)
                if(todo.status == 201) {
                    console.log(todo)
                }
            } catch(e) {
                console.log(e)
            }
            
        }
    }
})
