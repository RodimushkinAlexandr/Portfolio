// import {defineStore} from 'pinia'
// import axios from 'axios'

// interface ToDoState {
//     tasks: Task[];
//     userId: string
// }

// export const useToDoTore = defineStore({
//     id:'ToDo',
//     state: (): ToDoState => ({
//         tasks: [],
//         userId: ''
//     }),
//     getters: {

//     },
//     actions: {
//         async CreateToDo(title:string, description:string): Promise<void> {
//             try {
//                 await axios({
//                     url: 'http://localhost:5000/todo',
//                     method: 'post',
                    
//                     data: {
//                         title: title,
//                         description: description,
//                         userId: this.userId
//                     },
//             })
//             } catch(e) {
//                 console.log(e)
//             }
            
//         }
//     }
// })