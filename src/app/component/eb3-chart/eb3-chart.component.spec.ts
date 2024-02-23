import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eb3ChartComponent } from './eb3-chart.component';

describe('Eb3ChartComponent', () => {
  let component: Eb3ChartComponent;
  let fixture: ComponentFixture<Eb3ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eb3ChartComponent]
    });
    fixture = TestBed.createComponent(Eb3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
