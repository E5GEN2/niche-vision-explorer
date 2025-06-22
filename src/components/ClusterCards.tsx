
import React from 'react';
import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react';

interface ClusterData {
  id: number;
  name: string;
  videoCount: number;
  supplyDemandRatio: number;
  velocity: number;
}

interface ClusterCardsProps {
  clusters: ClusterData[];
}

const ClusterCards: React.FC<ClusterCardsProps> = ({ clusters }) => {
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
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-lg">{cluster.name}</h3>
              <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-600 font-medium">{cluster.videoCount} videos</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClusterCards;
