import type Task from './ToDo'

export default interface TaskRes extends Task {
  _id: string
}
