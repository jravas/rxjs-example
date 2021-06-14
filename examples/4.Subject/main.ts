import { Subject } from 'rxjs'

/* Subject */
const subject$ = new Subject<number>()

subject$.subscribe(observer => {
  console.log('A: ', observer)
})

subject$.next(1)
subject$.next(2)

subject$.subscribe(observer => {
  console.log('B: ', observer)
})

subject$.next(3)
