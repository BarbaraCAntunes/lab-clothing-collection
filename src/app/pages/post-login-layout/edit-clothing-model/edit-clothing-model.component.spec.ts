import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClothingModelComponent } from './edit-clothing-model.component';

describe('EditClothingModelComponent', () => {
  let component: EditClothingModelComponent;
  let fixture: ComponentFixture<EditClothingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClothingModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClothingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
