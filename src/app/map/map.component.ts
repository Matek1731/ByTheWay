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

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World';

  source: any;
  markers: any;
  

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
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
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
                iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
                className: 'dot'
              }
            }
          },
          // {
          //   type: 'Feature',
          //   geometry: {
          //     type: 'Point',
          //     coordinates: [5, 5]
          //   },
          //   properties: {
          //     icon: {
          //       iconUrl: '/mapbox.js/assets/images/astronaut2.png',
          //       iconSize: [50, 50], // size of the icon
          //       iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
          //       popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          //       className: 'dot'
          //     }
          //   }
          // }
        );

        this._controls[3].add({
        
          "type": "Feature",
          "properties": {
            "name": "Bermuda Triangle",
            "area": 1150180
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-64.73, 32.31],
                [-80.19, 25.76],
                [place.lng, place.lat],
                [-64.73, 32.31]
              ]
            ]
          }
        }
      );
    }
  });
  // this.map.addControl(new mapboxgl.FullscreenControl());

  this.map.on('click', (event) => {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
    console.log("clicked kurła " , coordinates)
    // const newMarker = new GeoJson(coordinates, { message: this.message });
    // this.mapservice.createMarker(newMarker);
  });

  this.map.on('load', (event) => {

  

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
}
