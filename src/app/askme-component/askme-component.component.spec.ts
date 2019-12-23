import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskmeComponentComponent } from './askme-component.component';

describe('AskmeComponentComponent', () => {
  let component: AskmeComponentComponent;
  let fixture: ComponentFixture<AskmeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskmeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskmeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
