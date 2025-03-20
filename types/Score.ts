import type { Judge } from './Judge';
import type { Project } from './Project';

export interface Score {
    id: string;
    judge: Judge;
    judgeId: string;
    project: Project;
    projectId: string;
    scoreData: Record<string, any>; // JSON data typed more specifically
    comments?: string;
    totalScore: number;
    createdAt: Date;
    updatedAt: Date;
}