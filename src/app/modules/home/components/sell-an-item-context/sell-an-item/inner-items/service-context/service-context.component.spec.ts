import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContextComponent } from './service-context.component';

describe('ServiceContextComponent', () => {
  let component: ServiceContextComponent;
  let fixture: ComponentFixture<ServiceContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
