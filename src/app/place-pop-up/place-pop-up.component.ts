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
  @Output() navigated = new EventEmitter<boolean>();
  @Output() added = new EventEmitter<boolean>();
  shortDescription: string;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.shortDescription = this.selectedPlace.description.substring(0, 250)
    if (this.selectedPlace.description.length > 250){
      this.shortDescription = this.shortDescription + "...";
    }
  }

  private show: boolean = true;
    

  public close(): void {
    this.show = false;
    this.closed.emit(true);
  }

  public navigate(): void {
    // this.show = false;
    this.navigated.emit(true);
  }

  public add(): void {
    // this.show = false;
    this.added.emit(true);
  }

  public goto(): void {
    this.router.navigate(["place/" + this.selectedPlace.id]);
  }

  public goto_photo(): void {
    this.router.navigate(["place/photo/" + this.selectedPlace.id]);
  }

}


