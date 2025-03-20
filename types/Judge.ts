import type { User } from './User';
import type { Score } from './Score';

export interface Judge {
    id: string;
    user: User;
    userId: string;
    accessCode: string;
    tracks: string[];
    scores: Score[];
    createdAt: Date;
    updatedAt: Date;
}