import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyCancelButtonComponent } from './grey-cancel-button.component';

describe('GreyCancelButtonComponent', () => {
  let component: GreyCancelButtonComponent;
  let fixture: ComponentFixture<GreyCancelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreyCancelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreyCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
