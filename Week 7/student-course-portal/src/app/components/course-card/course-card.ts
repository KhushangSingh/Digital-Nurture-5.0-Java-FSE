import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed:', changes['course']?.previousValue, changes['course']?.currentValue);
  }

  toggleEnroll() {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
      this.enrollRequested.emit(this.course.id);
    }
  }

  // Getters keep templates clean
  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderStyle() {
    switch(this.course.gradeStatus) {
      case 'passed': return { 'border-left-color': 'green', 'border-left-width': '5px', 'border-left-style': 'solid' };
      case 'failed': return { 'border-left-color': 'red', 'border-left-width': '5px', 'border-left-style': 'solid' };
      default: return { 'border-left-color': 'grey', 'border-left-width': '5px', 'border-left-style': 'solid' };
    }
  }
}
