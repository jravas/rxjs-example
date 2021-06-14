import { from, fromEvent, interval, timer } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { Response } from '../../models'

/* Creation operators */

/* ajax operator */
const http$ = ajax.getJSON<Response>('https://rickandmortyapi.com/api/episode')

/* fromEvent operator */
const documentClick$ = fromEvent(document, 'click')

/* convert promise to observable */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am resolved')
  }, 2000)
})

const observable$ = from(promise)

const timer$ = timer(1000)

const interval$ = interval(1000)
