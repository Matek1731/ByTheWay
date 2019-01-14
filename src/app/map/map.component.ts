import { Component, OnInit } from '@angular/core';
import { PLACES } from '../list-of-places';
import { Place } from '../place';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from 'mapbox-gl-draw';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import { MapService } from '../services/map.service';
import { GeoJson, FeatureCollection } from './map';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  places = PLACES;  // nasza wspaniala baza danych z pliku list-of-places XD
  selectedPlace: Place; // wybrane miejsce, dla ktorego bedzie wyswietlal sie pop-up
  ListaMiejsc: Place[] = [];

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World';

  source: any;
  markers: any;
  
  name: string;

  constructor(private mapservice: MapService) {
  }

  
  static t;
  ngOnInit() {
  //  this.markers = this.mapservice.getMarkers();
   this.initializeMap();
  }

  private initializeMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        });
      });
    }

    this.buildMap();

  }

  draw = new MapboxDraw({
    displayControlsDefault: false
  });

  directions = new MapboxDirections({
    accessToken: environment.mapbox.accessToken,
    unit: 'metric',
    profile: 'mapbox/walking',
    interactive: false,
    controls: {
      inputs: false,
      instructions: false,
      profileSwitcher: false
    }
  });

  

navigateToPlace(place: Place){
  this.directions.setOrigin([this.lng, this.lat]);
  this.directions.setDestination([place.lng, place.lat]);
}

navigateToPlaceFromPopup(){
    this.navigateToPlace(this.selectedPlace);
    // this.selectedPlace = null;
}




buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });


  this.map.addControl(new mapboxgl.NavigationControl());
  this.map.addControl(this.draw);
  this.map.addControl(this.directions, 'top-left');
  this.map.on('load', function() {
      for (let place of PLACES) {
        this._controls[3].add({
          type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [place.lng, place.lat]
            },
            properties: {
              icon: {
                iconUrl: '../../assets/home.png',
                iconSize: [100, 100], // size of the icon
                iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -50], // point from which the popup should open relative to the iconAnchor
                className: 'not-a-dot'
              }
            }
          }
        );
    }
  });
  // this.map.addControl(new mapboxgl.FullscreenControl());

  this.map.on('click', (event) => {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
    console.log("clicked " , coordinates)
    for (let place of PLACES) {
      if (Math.abs(coordinates[0] - place.lng) < 0.0025 && Math.abs(coordinates[1] - place.lat) < 0.0025){
        this.onSelect(place);
      }
    }
    // const newMarker = new GeoJson(coordinates, { message: this.message });
    // this.mapservice.createMarker(newMarker);
  });
}

removeMarker(marker) {
  this.mapservice.removeMarker(marker.$key);
}


flyTo(data: GeoJson) {
  this.map.flyTo({
    center: data.geometry.coordinates
  });
}

  onSelect(place: Place): void {
    this.selectedPlace = place;
  }

  onClosed($closed: boolean) {
    this.selectedPlace = null;
  }
  
    
  Goto(nazwa: string) {

    let item = PLACES.find(i => i.name === nazwa);
    let itemLng = item.lng
    let itemLat = item.lat
    this.map.flyTo({
      center: [itemLng, itemLat],
      zoom: 16
    });
  }

  onSearchChange(e) {
    this.Goto(e.target.value);
 }

 addToListFromPopup($event){
  this.addToList(this.selectedPlace.name);
 }

  addToList(nazwa: string) {
  let item = PLACES.find(i => i.name === nazwa);
  if (this.ListaMiejsc.some(e => e.id === item.id)) {
  } else {
    this.ListaMiejsc.push(item);
  }
 }

}
