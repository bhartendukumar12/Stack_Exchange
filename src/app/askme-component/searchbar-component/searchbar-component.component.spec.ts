import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponentComponent } from './searchbar-component.component';

describe('SearchbarComponentComponent', () => {
  let component: SearchbarComponentComponent;
  let fixture: ComponentFixture<SearchbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
