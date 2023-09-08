import type Task from './ToDo'

export default interface changeTask extends Task {
  changeText: string
  _id: string
}
