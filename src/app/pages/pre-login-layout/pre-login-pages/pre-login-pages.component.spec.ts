import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginPagesComponent } from './pre-login-pages.component';

describe('PreLoginPagesComponent', () => {
  let component: PreLoginPagesComponent;
  let fixture: ComponentFixture<PreLoginPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoginPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreLoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
