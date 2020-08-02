import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeseccionesComponentComponent } from './homesecciones-component.component';

describe('HomeseccionesComponentComponent', () => {
  let component: HomeseccionesComponentComponent;
  let fixture: ComponentFixture<HomeseccionesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeseccionesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeseccionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
