import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsContextComponent } from './electronics-context.component';

describe('ElectronicsContextComponent', () => {
  let component: ElectronicsContextComponent;
  let fixture: ComponentFixture<ElectronicsContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
