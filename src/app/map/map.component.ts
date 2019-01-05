import { Component, OnInit } from '@angular/core';
import { PLACES } from '../list-of-places';
import { Place } from '../place';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  places = PLACES;  //nasza wspaniala baza danych z pliku list-of-places XD
  selectedPlace: Place; //wybrane miejsce, dla ktorego bedzie wyswietlal sie pop-up

  constructor() { }

  ngOnInit() {
  }

  onSelect(place: Place): void {
    this.selectedPlace = place;
  }

}
