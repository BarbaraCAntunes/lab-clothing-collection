import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginPagesComponent } from './post-login-pages.component';

describe('PostLoginPagesComponent', () => {
  let component: PostLoginPagesComponent;
  let fixture: ComponentFixture<PostLoginPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
