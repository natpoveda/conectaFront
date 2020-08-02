import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersComponentComponent } from './search-users-component.component';

describe('SearchUsersComponentComponent', () => {
  let component: SearchUsersComponentComponent;
  let fixture: ComponentFixture<SearchUsersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUsersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
