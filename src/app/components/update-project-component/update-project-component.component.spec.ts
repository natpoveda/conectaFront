import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectComponentComponent } from './update-project-component.component';

describe('UpdateProjectComponentComponent', () => {
  let component: UpdateProjectComponentComponent;
  let fixture: ComponentFixture<UpdateProjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
