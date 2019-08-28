import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdeleteComponent } from './studentdelete.component';

describe('StudentdeleteComponent', () => {
  let component: StudentdeleteComponent;
  let fixture: ComponentFixture<StudentdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
