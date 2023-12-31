/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TunesComponent } from './tunes.component';

describe('TunesComponent', () => {
  let component: TunesComponent;
  let fixture: ComponentFixture<TunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
