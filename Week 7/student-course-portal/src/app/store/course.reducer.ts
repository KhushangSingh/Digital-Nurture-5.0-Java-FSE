import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';
import { Course } from '../models/course.model';

export interface CourseState {
  courses: Course[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CourseState = {
  courses: [],
  error: null,
  status: 'pending',
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, (state) => ({ ...state, status: 'loading' as const })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    error: null,
    status: 'success' as const,
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    status: 'error' as const,
  }))
);
