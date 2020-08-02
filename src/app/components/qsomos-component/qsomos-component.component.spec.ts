import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsomosComponentComponent } from './qsomos-component.component';

describe('QsomosComponentComponent', () => {
  let component: QsomosComponentComponent;
  let fixture: ComponentFixture<QsomosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsomosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsomosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
