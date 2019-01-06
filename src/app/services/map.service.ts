import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { GeoJson } from '../map/map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
   }

  getMarkers(): AngularFireList<any> { // AngularFireList<any> {
    return this.db.list('/markers');
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers').push(data);
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove();
  }


}
