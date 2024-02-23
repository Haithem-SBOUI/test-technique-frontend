import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eb2TableComponent } from './eb2-table.component';

describe('Eb2TableComponent', () => {
  let component: Eb2TableComponent;
  let fixture: ComponentFixture<Eb2TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eb2TableComponent]
    });
    fixture = TestBed.createComponent(Eb2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
