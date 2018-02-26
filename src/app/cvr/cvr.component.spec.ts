import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvrComponent } from './cvr.component';

describe('CvrComponent', () => {
  let component: CvrComponent;
  let fixture: ComponentFixture<CvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
