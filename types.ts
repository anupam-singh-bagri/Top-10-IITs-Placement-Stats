
import { ALL_IITS, YEARS, METRICS, CHART_TYPES } from './constants';

export type IITName = typeof ALL_IITS[number];
export type Year = typeof YEARS[number];
export type Metric = typeof METRICS[number];
export type ChartType = typeof CHART_TYPES[number];

export interface PlacementRecord {
    iitName: IITName;
    year: Year;
    averagePackageLPA: number;
    highestPackageLPA: number;
    placementPercentage: number;
}

export interface MetricInfo {
    key: 'averagePackageLPA' | 'highestPackageLPA' | 'placementPercentage';
    label: string;
    unit: string;
}
