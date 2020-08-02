import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosComponentComponent } from './contactanos-component.component';

describe('ContactanosComponentComponent', () => {
  let component: ContactanosComponentComponent;
  let fixture: ComponentFixture<ContactanosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
