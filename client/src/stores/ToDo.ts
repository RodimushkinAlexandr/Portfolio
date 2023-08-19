import {defineStore} from 'pinia'
import api from '../api/axiosClient'
import type Task from '@/types/ToDoTypes'
import refreshTokenUser from '@/api/axiosRefreshToken'

interface ToDoState {
    tasks: Task[]
    task: Task
}

export const ToDoStore = defineStore({
    id:'ToDo',
    state: (): ToDoState => ({
        tasks: [],
        task: {
            text: '',
            complited: false,
            selected: false,
            _id: undefined,
        },
    }),
    getters: {
        sizeComplited(state) {
            return (state.tasks.filter(item => { return item.complited === true })).length;
        },
        sizeSelected(state) {
            return (state.tasks.filter(item => { return item.selected === true })).length;
        },
        sizeAll(state) {
            return state.tasks.length
        },
    },
    actions: {
        async createToDo(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const task = await api.post('/todo/', this.task, {headers: {'Authorization' : `Bearer ${token}`}})

                if (task.status == 200) {
                    this.tasks.unshift(task.data)   
                    this.sortTasksSelected() 
                }
                this.task.text = ''
            } catch(e) {
                console.log(e)
            }
        },
        async getAllToDo(): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const tasks = await api.get('/todo/', {headers: {'Authorization' : `Bearer ${token}`}})

                this.tasks = tasks.data.reverse()
                this.sortTasksSelected()

            } catch(e) {
                console.log(e)
            }
        },
        async deleteTask(id:string | undefined): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const task = await api.delete(`/todo/${id}`, {headers: {'Authorization' : `Bearer ${token}`} })
                
                this.tasks = this.tasks.filter(t => t._id !== id);
            } catch(e) {
                console.log(e)
            }
        },
        async complitedAndSelectedTask(task: Task): Promise<void> {
            try {
                const token = await refreshTokenUser()
                const taskChange = await api.patch(`/todo/${task._id}`, task, {headers: {'Authorization' : `Bearer ${token}`} })
                
            } catch(e) {
                console.log(e)
            }
        },
        sortTasksSelected() {
            const notComplited = this.tasks.filter(item => item.complited == true)
            const complited = this.tasks.filter(item => item.complited == false).sort((a:Task, b:Task) => Number(b.selected) - Number(a.selected))
            return this.tasks = [...complited, ...notComplited]
        },
    }
})
