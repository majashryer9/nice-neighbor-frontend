import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNiceNeighborComponent } from './register-nice-neighbor.component';

describe('RegisterNiceNeighborComponent', () => {
  let component: RegisterNiceNeighborComponent;
  let fixture: ComponentFixture<RegisterNiceNeighborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNiceNeighborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNiceNeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
