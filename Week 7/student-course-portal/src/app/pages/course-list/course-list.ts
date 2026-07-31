import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';
import * as CourseActions from '../../store/course.actions';
import { selectAllCourses, selectCourseLoadingStatus, selectCourseError } from '../../store/course.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses$!: Observable<Course[]>;
  isLoading$!: Observable<string>;
  errorMessage$!: Observable<string | null>;
  
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCourseLoadingStatus);
    this.errorMessage$ = this.store.select(selectCourseError);
  }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';
    this.store.dispatch(CourseActions.loadCourses());
  }

  onSearchChange() {
    if (this.searchTerm) {
      this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
    } else {
      this.router.navigate(['courses']);
    }
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  viewDetails(courseId: number) {
    this.router.navigate(['courses', courseId]);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}
