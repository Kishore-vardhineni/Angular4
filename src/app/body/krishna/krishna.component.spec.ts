import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnaComponent } from './krishna.component';

describe('KrishnaComponent', () => {
  let component: KrishnaComponent;
  let fixture: ComponentFixture<KrishnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrishnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
