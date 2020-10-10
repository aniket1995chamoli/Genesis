import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitChildComponent } from './pit-child.component';

describe('PitChildComponent', () => {
  let component: PitChildComponent;
  let fixture: ComponentFixture<PitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
