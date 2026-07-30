import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;
  courses = [
    { id: 1, name: 'Angular Basics', code: 'CS101', credits: 3, gradeStatus: 'passed', enrolled: false },
    { id: 2, name: 'Advanced React', code: 'CS201', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 3, name: 'Node.js Backend', code: 'CS301', credits: 4, gradeStatus: 'failed', enrolled: false },
    { id: 4, name: 'Cloud Native', code: 'CS401', credits: 2, gradeStatus: 'pending', enrolled: false },
    { id: 5, name: 'Machine Learning', code: 'CS501', credits: 5, gradeStatus: 'passed', enrolled: false },
  ];
  selectedCourseId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
    const course = this.courses.find(c => c.id === courseId);
    if (course) course.enrolled = true;
  }

  // trackBy improves performance by only updating changed items in DOM
  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}
