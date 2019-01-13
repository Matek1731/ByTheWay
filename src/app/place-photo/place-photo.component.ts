import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-photo',
  templateUrl: './place-photo.component.html',
  styleUrls: ['./place-photo.component.css']
})
export class PlacePhotoComponent implements OnInit {
  place: Place

  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService) { }

  ngOnInit() {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(place => this.place = place);
  }

  goto_photo(){
    this.router.navigate(["place/photo/" + this.place.id]);
  }

  goBack(){
    this.router.navigate(["place/" + this.place.id]);
  }

}
