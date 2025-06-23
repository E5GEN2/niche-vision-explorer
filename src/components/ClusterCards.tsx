
import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, ArrowLeft, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from './DataTable';

interface VideoData {
  id: string;
  title: string;
  url: string;
  cluster: number;
  views: number;
  uploadDate: string;
  starred: boolean;
}

interface ClusterData {
  id: number;
  name: string;
  videoCount: number;
  supplyDemandRatio: number;
  velocity: number;
}

interface ClusterCardsProps {
  clusters: ClusterData[];
  onClusterSelect?: (clusterId: number) => void;
  selectedCluster?: number | null;
  clusterVideos?: VideoData[];
  onBackToOverview?: () => void;
  onStarToggle?: (id: string) => void;
  onTitleClick?: (url: string) => void;
}

const ClusterCards: React.FC<ClusterCardsProps> = ({ 
  clusters, 
  onClusterSelect,
  selectedCluster,
  clusterVideos = [],
  onBackToOverview,
  onStarToggle,
  onTitleClick
}) => {
  // If a cluster is selected, show the cluster detail view
  if (selectedCluster && onBackToOverview && onStarToggle && onTitleClick) {
    const cluster = clusters.find(c => c.id === selectedCluster);
    
    return (
      <div className="mt-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBackToOverview}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Overview</span>
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {cluster?.name} Cluster
              </h2>
              <p className="text-gray-600">
                {clusterVideos.length} videos in this cluster
              </p>
            </div>
          </div>
        </div>
        
        <DataTable
          data={clusterVideos}
          onStarToggle={onStarToggle}
          onTitleClick={onTitleClick}
        />
      </div>
    );
  }

  // Default overview of all clusters
  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Clustering & Analytics</h2>
        <p className="text-gray-600">Analyze your video data with intelligent clustering and performance metrics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clusters.map((cluster) => (
          <div 
            key={cluster.id}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            onClick={() => onClusterSelect?.(cluster.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                {cluster.name}
              </h3>
              <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-600 font-medium">
                {cluster.videoCount} videos
              </p>
            </div>
            
            {/* Mini chart placeholder */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg h-16 mb-4 flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="bg-gradient-to-t from-blue-400 to-blue-300 rounded-sm shadow-sm" 
                    style={{
                      width: '4px',
                      height: `${Math.random() * 32 + 8}px`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">Supply/Demand:</span>
                </div>
                <span className="font-semibold text-gray-900">{cluster.supplyDemandRatio.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-600 font-medium">Velocity:</span>
                </div>
                <span className="font-semibold text-gray-900">{cluster.velocity} views/day</span>
              </div>
            </div>
            
            {/* View Details Button */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 group-hover:text-blue-700 font-medium">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClusterCards;
