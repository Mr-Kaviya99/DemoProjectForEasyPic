import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesContextComponent } from './vehicles-context.component';

describe('VehiclesContextComponent', () => {
  let component: VehiclesContextComponent;
  let fixture: ComponentFixture<VehiclesContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
