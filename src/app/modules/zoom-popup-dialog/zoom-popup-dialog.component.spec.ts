import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPopupDialogComponent } from './zoom-popup-dialog.component';

describe('ZoomPopupDialogComponent', () => {
  let component: ZoomPopupDialogComponent;
  let fixture: ComponentFixture<ZoomPopupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPopupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
