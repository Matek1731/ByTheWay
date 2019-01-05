import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePopUpComponent } from './place-pop-up.component';

describe('PlacePopUpComponent', () => {
  let component: PlacePopUpComponent;
  let fixture: ComponentFixture<PlacePopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacePopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
