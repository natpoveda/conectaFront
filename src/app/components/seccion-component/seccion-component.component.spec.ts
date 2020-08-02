import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComponentComponent } from './seccion-component.component';

describe('SeccionComponentComponent', () => {
  let component: SeccionComponentComponent;
  let fixture: ComponentFixture<SeccionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
