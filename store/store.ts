import { Observable, BehaviorSubject } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

export class Store<T> {
  private state$: BehaviorSubject<T>

  protected get state (): T {
    return this.state$.getValue()
  }

  protected constructor (initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState)
  }

  protected setState (newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState
    })
  }

  protected select<K> (mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    )
  }

  getState (): Observable<T> {
    return this.state$.asObservable()
  }
}
