import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectobyidComponentComponent } from './proyectobyid-component.component';

describe('ProyectobyidComponentComponent', () => {
  let component: ProyectobyidComponentComponent;
  let fixture: ComponentFixture<ProyectobyidComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectobyidComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectobyidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
