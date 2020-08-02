import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDonacionComponentComponent } from './reportes-donacion-component.component';

describe('ReportesDonacionComponentComponent', () => {
  let component: ReportesDonacionComponentComponent;
  let fixture: ComponentFixture<ReportesDonacionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesDonacionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesDonacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
