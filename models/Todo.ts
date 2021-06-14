export interface Todo {
  name: string
  isCompleted: boolean
  dateCreated: number
}

export class Todo {
  isCompleted = false

  constructor (name: string) {
    this.name = name
    this.dateCreated = new Date().getTime()
  }
}
