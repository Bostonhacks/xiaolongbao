import { Status } from './Enums';
import type { User } from './User';

export interface Application {
    id: string;
    gender: string;
    pronous: string; // Note: Possible typo in your schema, should be "pronouns"
    age: number;
    ethnicity: string;
    gradYear: number;
    phoneNumber: string;
    school: string;
    city: string;
    state: string;
    country: string;
    educationLevel: string;
    major: string;
    diet: string;
    shirtSize: string;
    sleep: boolean;
    github: string;
    linkedin: string;
    portfolio: string;
    whyBostonhacks: string;
    applicationYear: number;
    user: User;
    userId: string;
    status: Status;
}