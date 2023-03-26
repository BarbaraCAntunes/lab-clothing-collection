import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingModelComponent } from './clothing-model.component';

describe('ClothingModelComponent', () => {
  let component: ClothingModelComponent;
  let fixture: ComponentFixture<ClothingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
