import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleListComponent } from './title-list.component';

describe('TitleComponent', () => {
  let component: TitleListComponent;
  let fixture: ComponentFixture<TitleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
