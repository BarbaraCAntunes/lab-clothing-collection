import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAudacesComponent } from './logo-audaces.component';

describe('LogoAudacesComponent', () => {
  let component: LogoAudacesComponent;
  let fixture: ComponentFixture<LogoAudacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAudacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAudacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
