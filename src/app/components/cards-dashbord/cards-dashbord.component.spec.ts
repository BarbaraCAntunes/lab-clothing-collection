import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDashbordComponent } from './cards-dashbord.component';

describe('CardsDashbordComponent', () => {
  let component: CardsDashbordComponent;
  let fixture: ComponentFixture<CardsDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
