import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConceptComponent } from './main-concept.component';

describe('MainConceptComponent', () => {
  let component: MainConceptComponent;
  let fixture: ComponentFixture<MainConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
