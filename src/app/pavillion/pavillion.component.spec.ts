import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavillionComponent } from './pavillion.component';

describe('PavillionComponent', () => {
  let component: PavillionComponent;
  let fixture: ComponentFixture<PavillionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavillionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavillionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
