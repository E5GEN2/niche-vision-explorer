
import React from 'react';
import { Download, RotateCcw, Save, Rocket, Play, Network, BarChart3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ControlsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onResetTable: () => void;
  onDownloadCSV: () => void;
  onSaveDataset: () => void;
  onTrainClassifier: () => void;
  onStartAutoCollect: () => void;
  onRunClustering: () => void;
  onCollectStats: () => void;
  isLoading?: boolean;
}

const ControlsSidebar: React.FC<ControlsSidebarProps> = ({
  isOpen,
  onClose,
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
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-md border-r border-gray-200 shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Controls</h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-8">
            {/* Dataset Controls Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-5 text-lg flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Dataset Controls
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={onResetTable}
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl border-gray-200 hover:bg-gray-50 font-medium transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset Table</span>
                </Button>
                <Button
                  onClick={onDownloadCSV}
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl border-gray-200 hover:bg-gray-50 font-medium transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <Download className="h-4 w-4" />
                  <span>Download CSV</span>
                </Button>
                <Button
                  onClick={onSaveDataset}
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <Save className="h-4 w-4" />
                  <span>Save Dataset</span>
                </Button>
              </div>
            </div>

            {/* Workflow Controls Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-5 text-lg flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Workflow Controls
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={onTrainClassifier}
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <Rocket className="h-4 w-4" />
                  <span>Train Classifier</span>
                </Button>
                <Button
                  onClick={onStartAutoCollect}
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-lg transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <Play className="h-4 w-4" />
                  <span>Start Auto-Collect</span>
                </Button>
                <Button
                  onClick={onRunClustering}
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium shadow-lg transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <Network className="h-4 w-4" />
                  <span>Run Clustering</span>
                </Button>
                <Button
                  onClick={onCollectStats}
                  className="w-full flex items-center justify-center space-x-2 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium shadow-lg transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Collect Stats</span>
                </Button>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                Status
              </h3>
              <div className="text-sm">
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-700 font-medium">Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">Ready</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlsSidebar;
