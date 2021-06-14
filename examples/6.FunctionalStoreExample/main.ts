import { store } from '../../store/functional-store'
import { Todo } from '../../models'
import { fromEvent } from 'rxjs'
import { tap } from 'rxjs/operators'

interface State {
  todos: Todo[]
  isLoading: boolean
}

const initialState: State = {
  todos: [],
  isLoading: false
}

/* Using store service in todo service */
export const TodoService = (() => {
  const { getCurrentState, setState, select } = store(initialState)

  const todos$ = select(state => state.todos)

  const add = (name: string) => {
    setState({
      ...getCurrentState(),
      todos: [...getCurrentState().todos, new Todo(name)]
    })
  }

  return { todos$, add }
})()

/* View implementation */
const { todos$, add } = TodoService

const addButton = document.getElementById('add')
const input = document.getElementById('input')

const addEvent$ = fromEvent(addButton, 'click')

const addTodo$ = addEvent$.pipe(
  tap(() => add((<HTMLInputElement>input).value)),
  /* reseting form would be better but there is no form :) */
  tap(() => ((<HTMLInputElement>input).value = ''))
)

todos$.subscribe(val => {
  console.log('todos from the store: ', val)
})

addTodo$.subscribe()
