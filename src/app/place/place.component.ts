import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../services/place.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private location: Location,
    private router: Router
  ) {}

 
  ngOnInit(): void {
    this.getPlace();
  }
  place: Place
 
  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(place => this.place = place);
  }

  goto_photo(){
    this.router.navigate(["place/photo/" + this.place.id]);
  }
 
  goBack(): void {
    this.router.navigate([""]);
  }

}
