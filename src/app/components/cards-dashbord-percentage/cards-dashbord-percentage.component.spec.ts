import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDashbordPercentageComponent } from './cards-dashbord-percentage.component';

describe('CardsDashbordComponent', () => {
  let component: CardsDashbordPercentageComponent;
  let fixture: ComponentFixture<CardsDashbordPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDashbordPercentageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsDashbordPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
