import { Role, AuthProvider } from './Enums';
import type { Application } from './Application';
import type { Project } from './Project';
import type { Judge } from './Judge';

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: Role;
    applications: Application[];
    projects: Project[];
    authProvider: AuthProvider;
    password?: string;
    judge?: Judge;
}