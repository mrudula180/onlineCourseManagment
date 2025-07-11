import { Routes } from "@angular/router";
const studDashboard = () => import('./../../components/stud-mycourses/stud-mycourses.component').then(c=>c.StudMycoursesComponent);
const exploreCourse = () => import('./../../components/stud-mycourses/stud-mycourses.component').then(c=>c.StudMycoursesComponent);

export const routes: Routes = [
    {
        path: 'mycourse',
        loadComponent: studDashboard
    }
]