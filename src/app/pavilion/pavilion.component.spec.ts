import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavilionComponent } from './pavilion.component';

describe('PavilionComponent', () => {
  let component: PavilionComponent;
  let fixture: ComponentFixture<PavilionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavilionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavilionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
