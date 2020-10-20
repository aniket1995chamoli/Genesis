import { ComponentFixture, TestBed } from '@angular/core/testing';
import { by, element } from 'protractor';

import { ComponentInteractionComponent } from './component-interaction.component';

fdescribe('ComponentInteractionComponent', () => {
  let component: ComponentInteractionComponent;
  let fixture: ComponentFixture<ComponentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const heroNames = ["Hawkeye","Hulk","Fury"];
  const masterName = 'Loki';

  it('should pass properties to children properly', () => {
  const parent = element(by.tagName('app-component-interaction'));
  const heroes = parent.all(by.tagName('app-child-one'));

  for (let i = 0; i < heroNames.length; i++) {
    const masterText = parent.element(by.tagName('p')).getText();
    const childDetail = heroes.get(i).element(by.tagName('p')).getText();
    expect(masterText).toContain(masterName);
    //expect(childDetail).toEqual(heroNames[i] + ' reporting! All hail ' + masterName);
  }
  
});

});
