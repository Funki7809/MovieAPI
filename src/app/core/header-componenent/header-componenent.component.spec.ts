import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenentComponent } from './header-componenent.component';

describe('HeaderComponenentComponent', () => {
  let component: HeaderComponenentComponent;
  let fixture: ComponentFixture<HeaderComponenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
