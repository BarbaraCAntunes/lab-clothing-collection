import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDeleteButtonComponent } from './red-delete-button.component';

describe('RedDeleteButtonComponent', () => {
  let component: RedDeleteButtonComponent;
  let fixture: ComponentFixture<RedDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedDeleteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
