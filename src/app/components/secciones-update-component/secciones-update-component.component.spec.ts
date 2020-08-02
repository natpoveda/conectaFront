import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesUpdateComponentComponent } from './secciones-update-component.component';

describe('SeccionesUpdateComponentComponent', () => {
  let component: SeccionesUpdateComponentComponent;
  let fixture: ComponentFixture<SeccionesUpdateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesUpdateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
