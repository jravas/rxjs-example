import { BehaviorSubject } from 'rxjs'

import { Todo } from '../../models'

/* BehaviorSubject */
const behaviorSubject$ = new BehaviorSubject<number>(0)

behaviorSubject$.subscribe(observer => console.log('A: ', observer))

behaviorSubject$.next(1)
behaviorSubject$.next(2)
behaviorSubject$.next(3)

behaviorSubject$.subscribe(observer => console.log('B: ', observer))

behaviorSubject$.next(4)

// interface State {
//   todos: Todo[]
//   isLoading: boolean
// }

// const initalState: State = {
//   todos: [],
//   isLoading: false
// }

// const state$ = new BehaviorSubject<State>(initalState)

// state$.subscribe(val => console.log(val))
