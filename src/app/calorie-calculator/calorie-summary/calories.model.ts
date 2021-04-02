export interface CaloriesSummary {
    protein: number;
    carbohydrate: number;
    fat: number;
}

export type CalorieKeys = keyof CaloriesSummary;