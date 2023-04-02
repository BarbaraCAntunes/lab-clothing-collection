import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlueGeneralButtonComponent } from './blue-gengeral-button.component';

describe('BlueGeneralButtonComponent', () => {
  let component: BlueGeneralButtonComponent;
  let fixture: ComponentFixture<BlueGeneralButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueGeneralButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueGeneralButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
