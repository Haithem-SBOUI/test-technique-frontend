import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eb3FormComponent } from './eb3-form.component';

describe('Eb3FormComponent', () => {
  let component: Eb3FormComponent;
  let fixture: ComponentFixture<Eb3FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eb3FormComponent]
    });
    fixture = TestBed.createComponent(Eb3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
