import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eb2FormComponent } from './eb2-form.component';

describe('Eb2FormComponent', () => {
  let component: Eb2FormComponent;
  let fixture: ComponentFixture<Eb2FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eb2FormComponent]
    });
    fixture = TestBed.createComponent(Eb2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
