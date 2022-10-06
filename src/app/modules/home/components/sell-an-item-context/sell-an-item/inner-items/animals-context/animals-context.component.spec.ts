import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsContextComponent } from './animals-context.component';

describe('AnimalsContextComponent', () => {
  let component: AnimalsContextComponent;
  let fixture: ComponentFixture<AnimalsContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
