import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciontemplateComponentComponent } from './secciontemplate-component.component';

describe('SecciontemplateComponentComponent', () => {
  let component: SecciontemplateComponentComponent;
  let fixture: ComponentFixture<SecciontemplateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecciontemplateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecciontemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
