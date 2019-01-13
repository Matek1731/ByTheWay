import { Component, OnInit, Input } from '@angular/core';
import { Placedata } from '../placedata.module';
import { MapComponent } from '../map/map.component';
import { GeoJson, FeatureCollection } from '../map/map';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  places: Placedata[] = [];
  name: string;

  @Input()
  miejsce: Placedata;

  constructor(private map: MapComponent) { }

  ngOnInit() {
    this.places = [
      {
        'name' : 'Polibuda',
        'lng' : 37.75 ,
        'lat' : -122.41
      },
      {
        'name' : 'Cybermachina',
        'lng' : 37.75 ,
        'lat' : 37.75
      }
    ];
  }

Search() {
  if (this.name != '') {

    this.places = this.places.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  } else if (this.name == '') {
    this.ngOnInit();
  }
}

Goto() {
  this.map.map.flyTo({
    center: [this.places[0].lng, this.places[0].lat]
  });
}

}


/*import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  a: object;

  constructor() {
    this.http.get('assets/data/app.json').subscribe((data) => this.a = data);
  }

  ngOnInit() {
  }

}
*/
