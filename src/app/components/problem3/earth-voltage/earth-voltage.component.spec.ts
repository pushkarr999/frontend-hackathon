import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthVoltageComponent } from './earth-voltage.component';

describe('EarthVoltageComponent', () => {
  let component: EarthVoltageComponent;
  let fixture: ComponentFixture<EarthVoltageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthVoltageComponent]
    });
    fixture = TestBed.createComponent(EarthVoltageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
