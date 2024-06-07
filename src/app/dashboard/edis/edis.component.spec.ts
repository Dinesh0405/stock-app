import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdisComponent } from './edis.component';

describe('EdisComponent', () => {
  let component: EdisComponent;
  let fixture: ComponentFixture<EdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
