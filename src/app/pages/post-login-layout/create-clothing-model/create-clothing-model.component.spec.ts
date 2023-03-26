import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClothingModelComponent } from './create-clothing-model.component';

describe('CreateClothingModelComponent', () => {
  let component: CreateClothingModelComponent;
  let fixture: ComponentFixture<CreateClothingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClothingModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClothingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
