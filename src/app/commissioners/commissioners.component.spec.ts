import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionersComponent } from './commissioners.component';

describe('CommissionersComponent', () => {
  let component: CommissionersComponent;
  let fixture: ComponentFixture<CommissionersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
