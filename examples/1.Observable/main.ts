/* Creating observables */
import { Observable } from 'rxjs'

const myFirstObservable = new Observable(observer => {
  observer.next('hi')
  observer.next('from')
})

/* Creating observer */
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
}

/* Using observer */
myFirstObservable.subscribe(observer)
