import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitParentComponent } from './pit-parent.component';

describe('PitParentComponent', () => {
  let component: PitParentComponent;
  let fixture: ComponentFixture<PitParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PitParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
