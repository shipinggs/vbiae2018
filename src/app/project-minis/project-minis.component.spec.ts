import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMinisComponent } from './project-minis.component';

describe('ProjectMinisComponent', () => {
  let component: ProjectMinisComponent;
  let fixture: ComponentFixture<ProjectMinisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMinisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
