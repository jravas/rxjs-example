import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

export const store = <T>(initialState: T) => {
  const state$ = new BehaviorSubject(initialState)
  const getCurrentState = () => state$.getValue()

  const setState = (newState: Partial<T>) => {
    state$.next({
      ...getCurrentState(),
      ...newState
    })
  }

  const select = <K>(mapFn: (state: T) => K): Observable<K> => {
    return state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    )
  }

  return { state$, getCurrentState, setState, select }
}
