export type Role = 'admin' | 'instructor' | 'student';

export interface LoginPayload {
    email: string,
    password: string
}

export interface RoutingLinks { 
    lable: string,
    route: string
}