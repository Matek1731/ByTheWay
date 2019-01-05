import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-place-pop-up',
  templateUrl: './place-pop-up.component.html',
  styleUrls: ['./place-pop-up.component.css']
})
export class PlacePopUpComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor() { }

  ngOnInit() {
  }

}
