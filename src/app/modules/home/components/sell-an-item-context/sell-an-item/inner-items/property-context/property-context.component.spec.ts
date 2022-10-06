import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContextComponent } from './property-context.component';

describe('PropertyContextComponent', () => {
  let component: PropertyContextComponent;
  let fixture: ComponentFixture<PropertyContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
