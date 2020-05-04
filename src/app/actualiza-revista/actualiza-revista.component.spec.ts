import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaRevistaComponent } from './actualiza-revista.component';

describe('ActualizaRevistaComponent', () => {
    let component: ActualizaRevistaComponent;
    let fixture: ComponentFixture<ActualizaRevistaComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [ ActualizaRevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ActualizaRevistaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });
});
