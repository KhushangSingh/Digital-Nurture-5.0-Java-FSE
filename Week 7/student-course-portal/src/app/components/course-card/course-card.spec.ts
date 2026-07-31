import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCardComponent', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let mockEnrollmentService: any;
  let enrolledCourseId: number | null = null;

  beforeEach(async () => {
    enrolledCourseId = null;
    mockEnrollmentService = {
      isEnrolled: (id: number) => false,
      enroll: (id: number) => { enrolledCourseId = id; },
      unenroll: (id: number) => {}
    };

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        { provide: EnrollmentService, useValue: mockEnrollmentService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = { id: 1, name: 'Test', code: 'TEST1', credits: 3, gradeStatus: 'pending' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course name and code correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Test (TEST1)');
  });

  it('should emit enrollRequested event and call enroll when Enroll button is clicked', () => {
    let emittedId: number | null = null;
    component.enrollRequested.subscribe(id => emittedId = id);
    
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    
    expect(enrolledCourseId).toBe(1);
    expect(emittedId).toBe(1);
  });
});
