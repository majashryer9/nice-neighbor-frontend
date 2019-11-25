import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceNeighborServicesComponent } from './nice-neighbor-services.component';

describe('NiceNeighborServicesComponent', () => {
  let component: NiceNeighborServicesComponent;
  let fixture: ComponentFixture<NiceNeighborServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceNeighborServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceNeighborServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
