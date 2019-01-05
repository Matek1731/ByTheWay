import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../services/map.service';
import { GeoJson, FeatureCollection } from '../map';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World';

  source: any;

  constructor() { }

  ngOnInit() {
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

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });

  this.map.addControl(new mapboxgl.NavigationControl());

  this.map.on('click', (event) => {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
  });

  this.map.on('load', (event) =>{

    this.map.addSource('firebase', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    this.source = this.map.getSource('firebase')

    this.map.addLayer({
      id: 'firebase',
      source: 'firebase',
      type: 'symbol',
      layout: {
        'text-field': '{message}',
        'text-size': 24,
        'text-transform': 'uppercase',
        'icon-image': 'rocket-15',
        'text-offset': [0, 1.5]
      },

      paint: {
        'text-color': '#f16624',
        'text-halo-color': '#fff',
        'text-halo-width': 2
      }
    });


  });

}


flyTo(data: GeoJson) {
  this.map.flyTo({
    center: data.geometry.coordinates
  });
}

}
