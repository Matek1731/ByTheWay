import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../place';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

let baseURL = environment.baseURL;

@Component({
  selector: 'app-place-pop-up',
  templateUrl: './place-pop-up.component.html',
  styleUrls: ['./place-pop-up.component.css']
})


export class PlacePopUpComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Output() closed = new EventEmitter<boolean>();
  

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.show)
  }

  private show: boolean = true;
    

  public close(): void {
    this.show = false;
    this.closed.emit(true);
  }

  public goto(): void {
    this.router.navigate([baseURL + "place/" + this.selectedPlace.id]);
  }

}


