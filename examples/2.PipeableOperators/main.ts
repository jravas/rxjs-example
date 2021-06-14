import { fromEvent } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, switchMap } from 'rxjs/operators'
import { Response } from '../../models'

const observable$ = ajax.getJSON<Response>(
  'https://rickandmortyapi.com/api/episode'
)

/* Pipeable Operators */

/* Map operator  example */
observable$.subscribe(val => console.log('without map: ', val))

observable$
  .pipe(map(res => res.results))
  .subscribe(data => console.log('mapped response: ', data))

/* switchMap operator  example */
const select = document.getElementById('episode-select') as HTMLSelectElement

const getEpisodeById$ = (id: string) =>
  ajax.getJSON<Response>(`https://rickandmortyapi.com/api/episode/${id}`)

const selectionChange$ = fromEvent(select, 'change').pipe(
  map(e => (<HTMLSelectElement>e.target).value)
)

const selectedEpisode$ = selectionChange$.pipe(
  switchMap(e => getEpisodeById$(e))
)

selectedEpisode$.subscribe(e => console.log(e))
