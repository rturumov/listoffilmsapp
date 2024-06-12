import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonsDetailsComponent } from './cartoons-details.component';

describe('CartoonsDetailsComponent', () => {
  let component: CartoonsDetailsComponent;
  let fixture: ComponentFixture<CartoonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartoonsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartoonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
