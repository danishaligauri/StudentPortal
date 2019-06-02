import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAppComponent } from './header-app.component';

describe('HeaderAppComponent', () => {
  let component: HeaderAppComponent;
  let fixture: ComponentFixture<HeaderAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
