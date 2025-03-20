export interface JudgingCriteria {
    id: string;
    year: number;
    event: string;
    criteriaList: Record<string, any>; // JSON data typed more specifically
    createdAt: Date;
    updatedAt: Date;
}