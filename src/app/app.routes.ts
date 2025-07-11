import { Routes } from '@angular/router';
const landingPage = () => import('./Pages/landing-page/landing-page.component').then(c=>c.LandingPageComponent);
const loginPage = () => import('./Pages/login-page/login-page.component').then(c=>c.LoginPageComponent);
const studentPage = () => import('./Pages/student/student.component').then(c=>c.StudentComponent);
const adminPage = () => import('./Pages/admin/admin.component').then(c=>c.AdminComponent);
const instructorPage = () => import('./Pages/instructor/instructor.component').then(c=>c.InstructorComponent);

const studentChildren = () => import('./Pages/student/student.routes').then(c=>c.routes);

export const routes: Routes = [
    {
        path: '',
        loadComponent: landingPage
    },
    {
        path: 'login',
        loadComponent: loginPage
    },
    {
        path: 'admin',
        loadComponent: adminPage
    },
    {
        path: 'student',
        loadComponent: studentPage,
        loadChildren: studentChildren
    },
    {
        path: 'instructor',
        loadComponent: instructorPage
    },
];
