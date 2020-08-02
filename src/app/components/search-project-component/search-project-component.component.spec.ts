import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectComponentComponent } from './search-project-component.component';

describe('SearchProjectComponentComponent', () => {
  let component: SearchProjectComponentComponent;
  let fixture: ComponentFixture<SearchProjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
