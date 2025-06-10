import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompteComponent } from './create-compte.component';

describe('CreateCompteComponent', () => {
  let component: CreateCompteComponent;
  let fixture: ComponentFixture<CreateCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
