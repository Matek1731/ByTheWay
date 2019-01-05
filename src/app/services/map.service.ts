import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase} from 'angularfire2/database';

import { GeoJson } from '../map/map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
   }



}
