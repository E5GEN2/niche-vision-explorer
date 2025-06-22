
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
    <div className="space-y-6">
      {/* Dataset Controls Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Dataset Controls</h3>
        <div className="space-y-3">
          <Button
            onClick={onResetTable}
            variant="outline"
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg border-gray-200 hover:bg-gray-50 font-medium"
            disabled={isLoading}
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Table</span>
          </Button>
          <Button
            onClick={onDownloadCSV}
            variant="outline"
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg border-gray-200 hover:bg-gray-50 font-medium"
            disabled={isLoading}
          >
            <Download className="h-4 w-4" />
            <span>Download CSV</span>
          </Button>
          <Button
            onClick={onSaveDataset}
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-sm"
            disabled={isLoading}
          >
            <Save className="h-4 w-4" />
            <span>Save Dataset</span>
          </Button>
        </div>
      </div>

      {/* Workflow Controls Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Workflow Controls</h3>
        <div className="space-y-3">
          <Button
            onClick={onTrainClassifier}
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-sm"
            disabled={isLoading}
          >
            <Rocket className="h-4 w-4" />
            <span>Train Classifier</span>
          </Button>
          <Button
            onClick={onStartAutoCollect}
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-sm"
            disabled={isLoading}
          >
            <Play className="h-4 w-4" />
            <span>Start Auto-Collect</span>
          </Button>
          <Button
            onClick={onRunClustering}
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium shadow-sm"
            disabled={isLoading}
          >
            <Network className="h-4 w-4" />
            <span>Run Clustering</span>
          </Button>
          <Button
            onClick={onCollectStats}
            className="w-full flex items-center justify-center space-x-2 h-11 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium shadow-sm"
            disabled={isLoading}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Collect Stats</span>
          </Button>
        </div>
      </div>

      {/* Status & Logs Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3 text-lg">Status</h3>
        <div className="text-sm">
          {isLoading ? (
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-700 font-medium">Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Ready</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
