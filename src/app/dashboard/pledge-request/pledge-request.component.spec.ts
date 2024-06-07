import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeRequestComponent } from './pledge-request.component';

describe('PledgeRequestComponent', () => {
  let component: PledgeRequestComponent;
  let fixture: ComponentFixture<PledgeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PledgeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PledgeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
