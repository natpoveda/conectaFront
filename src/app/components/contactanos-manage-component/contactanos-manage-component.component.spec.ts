import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosManageComponentComponent } from './contactanos-manage-component.component';

describe('ContactanosManageComponentComponent', () => {
  let component: ContactanosManageComponentComponent;
  let fixture: ComponentFixture<ContactanosManageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosManageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosManageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
