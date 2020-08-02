import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagementComponentComponent } from './admin-management-component.component';

describe('AdminManagementComponentComponent', () => {
  let component: AdminManagementComponentComponent;
  let fixture: ComponentFixture<AdminManagementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
