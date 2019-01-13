import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Place } from '../place';
import { PLACES } from '../list-of-places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor() { }



  getPlace(id: number): Observable<Place> {
    // TODO: send the message _after_ fetching the hero
    return of(PLACES.find(place => place.id === id));
  }
  
}
