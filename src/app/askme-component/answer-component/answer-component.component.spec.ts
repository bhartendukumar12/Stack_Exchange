import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponentComponent } from './answer-component.component';

describe('AnswerComponentComponent', () => {
  let component: AnswerComponentComponent;
  let fixture: ComponentFixture<AnswerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
