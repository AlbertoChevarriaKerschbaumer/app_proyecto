import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApstiPage } from './apsti.page';

describe('ApstiPage', () => {
  let component: ApstiPage;
  let fixture: ComponentFixture<ApstiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApstiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
