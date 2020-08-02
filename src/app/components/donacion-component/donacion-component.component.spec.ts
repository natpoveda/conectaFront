import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionComponentComponent } from './donacion-component.component';

describe('DonacionComponentComponent', () => {
  let component: DonacionComponentComponent;
  let fixture: ComponentFixture<DonacionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
