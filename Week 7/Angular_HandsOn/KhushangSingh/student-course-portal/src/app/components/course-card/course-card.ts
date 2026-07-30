import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number, gradeStatus: string, enrolled?: boolean };
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed:', changes['course']?.previousValue, changes['course']?.currentValue);
  }

  // Getters keep templates clean
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
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
