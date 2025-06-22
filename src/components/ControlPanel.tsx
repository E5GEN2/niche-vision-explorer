
import React from 'react';
import { Download, RotateCcw, Save, Rocket, Play, Network, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ControlPanelProps {
  onResetTable: () => void;
  onDownloadCSV: () => void;
  onSaveDataset: () => void;
  onTrainClassifier: () => void;
  onStartAutoCollect: () => void;
  onRunClustering: () => void;
  onCollectStats: () => void;
  isLoading?: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onResetTable,
  onDownloadCSV,
  onSaveDataset,
  onTrainClassifier,
  onStartAutoCollect,
  onRunClustering,
  onCollectStats,
  isLoading = false
}) => {
  return (
    <div className="space-y-4">
      {/* Dataset Controls Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Dataset Controls</h3>
        <div className="space-y-2">
          <Button
            onClick={onResetTable}
            variant="outline"
            className="w-full flex items-center space-x-2"
            disabled={isLoading}
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Table</span>
          </Button>
          <Button
            onClick={onDownloadCSV}
            variant="outline"
            className="w-full flex items-center space-x-2"
            disabled={isLoading}
          >
            <Download className="h-4 w-4" />
            <span>Download CSV</span>
          </Button>
          <Button
            onClick={onSaveDataset}
            className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <Save className="h-4 w-4" />
            <span>Save Dataset</span>
          </Button>
        </div>
      </div>

      {/* Workflow Controls Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Workflow Controls</h3>
        <div className="space-y-2">
          <Button
            onClick={onCollectStats}
            className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Collect Stats</span>
          </Button>
          <Button
            onClick={onTrainClassifier}
            className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <Rocket className="h-4 w-4" />
            <span>Train Classifier</span>
          </Button>
          <Button
            onClick={onStartAutoCollect}
            className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <Play className="h-4 w-4" />
            <span>Start Auto-Collect</span>
          </Button>
          <Button
            onClick={onRunClustering}
            className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            <Network className="h-4 w-4" />
            <span>Run Clustering</span>
          </Button>
        </div>
      </div>

      {/* Status & Logs Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-2">Status</h3>
        <div className="text-sm text-gray-600">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <span>Ready</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
