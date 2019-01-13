import { Component, OnInit } from '@angular/core';
import { PLACES } from '../list-of-places';
import { Place } from '../place';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from 'mapbox-gl-draw';
import { MapService } from '../services/map.service';
import { GeoJson, FeatureCollection } from './map';

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
    console.log("initializing map kurła");
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

buildMap() {
  console.log("building map kurła");
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });

  

  this.map.addControl(new mapboxgl.NavigationControl());
  this.map.addControl(this.draw); 
  this.map.on('load', function() {
      console.log("KURŁA tej");
      console.log(this);
      console.log(PLACES)
      for (let place of PLACES) {
        console.log(place);
        this._controls[3].add({
          type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [place.lng, place.lat]
            },
            properties: {
              icon: {
                iconUrl: '/mapbox.js/assets/images/astronaut1.png',
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
    console.log("clicked kurła " , coordinates)
    for (let place of PLACES) {
      if (Math.abs(coordinates[0] - place.lng) < 0.0025 && Math.abs(coordinates[1] - place.lat) < 0.0025){
        console.log(place);
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

 addToList(nazwa:string) {
  let item = PLACES.find(i => i.name === nazwa);
  this.ListaMiejsc.push(item);
  console.log('Dodano do wycieczki kurła');
  console.log(this.ListaMiejsc);
 }
  
}
