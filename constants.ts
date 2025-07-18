
import { MetricInfo } from "./types";

export const ALL_IITS = [
    'IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur',
    'IIT Roorkee', 'IIT Guwahati', 'IIT Hyderabad', 'IIT (BHU) Varanasi',
    'IIT Gandhinagar', 'IIT Ropar', 'IIT Patna', 'IIT Jodhpur',
    'IIT Indore', 'IIT Mandi'
] as const;

export const YEARS = [2020, 2021, 2022, 2023, 2024] as const;

export const METRICS_MAP: Record<string, MetricInfo> = {
    'Average Package (LPA)': { key: 'averagePackageLPA', label: 'Average Package', unit: 'LPA' },
    'Highest Package (LPA)': { key: 'highestPackageLPA', label: 'Highest Package', unit: 'LPA' },
    'Placement Percentage': { key: 'placementPercentage', label: 'Placement Rate', unit: '%' },
};

export const METRICS = Object.keys(METRICS_MAP) as (keyof typeof METRICS_MAP)[];

export const CHART_TYPES = ['Bar Chart', 'Line Chart'] as const;

export const CHART_COLORS = [
  '#3b82f6', '#84cc16', '#ef4444', '#f97316', '#14b8a6', '#a855f7', '#ec4899', '#eab308'
];
