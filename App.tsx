
import React, { useState, useMemo } from 'react';
import { ALL_IITS, METRICS, CHART_TYPES } from './constants';
import { ChartType, Metric, PlacementRecord, IITName } from './types';
import { generatePlacementData } from './data/placementData';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import PlacementChart from './components/PlacementChart';
import PlacementTable from './components/PlacementTable';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
    const [selectedIITs, setSelectedIITs] = useState<IITName[]>(ALL_IITS);
    const [selectedMetric, setSelectedMetric] = useState<Metric>(METRICS[0]);
    const [selectedChartType, setSelectedChartType] = useState<ChartType>(CHART_TYPES[0]);

    const placementData: PlacementRecord[] = useMemo(() => generatePlacementData(), []);

    const filteredData = useMemo(() => {
        return placementData.filter(d => selectedIITs.includes(d.iitName));
    }, [placementData, selectedIITs]);

    return (
        <div className="min-h-screen bg-background font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <Header />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-3 bg-surface rounded-xl shadow-lg p-6 border border-border-color">
                        <ControlPanel
                            selectedIITs={selectedIITs}
                            onIITsChange={setSelectedIITs}
                            selectedMetric={selectedMetric}
                            onMetricChange={setSelectedMetric}
                            selectedChartType={selectedChartType}
                            onChartTypeChange={setSelectedChartType}
                        />
                    </div>

                    <div className="lg:col-span-2 bg-surface rounded-xl shadow-lg p-6 border border-border-color min-h-[400px]">
                        <PlacementChart
                            data={filteredData}
                            metric={selectedMetric}
                            chartType={selectedChartType}
                        />
                    </div>
                    
                    <div className="lg:col-span-1 bg-surface rounded-xl shadow-lg p-6 border border-border-color">
                        <AIAssistant data={filteredData} />
                    </div>

                    <div className="lg:col-span-3 bg-surface rounded-xl shadow-lg p-6 border border-border-color">
                       <PlacementTable data={filteredData} />
                    </div>
                </div>

                 <footer className="text-center text-text-secondary text-sm py-4">
                    <p>Designed by a World-Class Senior Frontend React Engineer.</p>
                    <p>Data is synthetically generated for demonstration purposes.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
