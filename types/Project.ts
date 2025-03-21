import type { User } from './User';
import type { Score } from './Score';

export interface Project {
    id: string;
    name: string;
    description: string;
    repositoryUrl: string;
    technologies: string[];
    year: number;
    members: User[];
    track?: string;
    demoUrl?: string;
    devpostUrl?: string;
    teamName: string;
    isWinner: boolean;
    prizeWon?: string;
    placement?: number;
    scores?: Score[];
}

