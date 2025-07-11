import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudMycoursesComponent } from './stud-mycourses.component';

describe('StudMycoursesComponent', () => {
  let component: StudMycoursesComponent;
  let fixture: ComponentFixture<StudMycoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudMycoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudMycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
