import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoComponentComponent } from './proyecto-component.component';

describe('ProyectoComponentComponent', () => {
  let component: ProyectoComponentComponent;
  let fixture: ComponentFixture<ProyectoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
