import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterComponent } from './winter.component';

describe('WinterComponent', () => {
  let component: WinterComponent;
  let fixture: ComponentFixture<WinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
