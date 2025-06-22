
import React from 'react';
import { BarChart3 } from 'lucide-react';

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
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Clustering & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {clusters.map((cluster) => (
          <div 
            key={cluster.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{cluster.name}</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 mb-3">n = {cluster.videoCount} videos</p>
            
            {/* Mini chart placeholder */}
            <div className="bg-gray-100 rounded h-16 mb-3 flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="bg-blue-300 rounded-sm" 
                    style={{
                      width: '6px',
                      height: `${Math.random() * 32 + 8}px`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Metrics */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Supply/Demand:</span>
                <span className="font-medium text-gray-800">{cluster.supplyDemandRatio.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Velocity:</span>
                <span className="font-medium text-gray-800">{cluster.velocity} views/day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClusterCards;
