import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCantactComponent } from './update-cantact.component';

describe('UpdateCantactComponent', () => {
  let component: UpdateCantactComponent;
  let fixture: ComponentFixture<UpdateCantactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCantactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCantactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
