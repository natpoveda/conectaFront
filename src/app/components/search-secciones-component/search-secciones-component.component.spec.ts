import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSeccionesComponentComponent } from './search-secciones-component.component';

describe('SearchSeccionesComponentComponent', () => {
  let component: SearchSeccionesComponentComponent;
  let fixture: ComponentFixture<SearchSeccionesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSeccionesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeccionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
