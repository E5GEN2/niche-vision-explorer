
import React from 'react';
import { Star } from 'lucide-react';

interface VideoData {
  id: string;
  title: string;
  url: string;
  cluster: number;
  views: number;
  uploadDate: string;
  starred: boolean;
}

interface DataTableProps {
  data: VideoData[];
  onStarToggle: (id: string) => void;
  onTitleClick: (url: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onStarToggle, onTitleClick }) => {
  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-8 px-3 py-3 text-left font-semibold text-gray-700">
                <Star className="h-4 w-4" />
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Title</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 w-32">URL</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 w-20">Cluster</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 w-24">Views</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 w-32">Upload Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((video, index) => (
              <tr 
                key={video.id}
                className={`
                  h-12 hover:bg-blue-50 transition-colors
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  ${video.starred ? 'bg-yellow-50' : ''}
                `}
              >
                <td className="px-3 py-3">
                  <button
                    onClick={() => onStarToggle(video.id)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Star 
                      className={`h-4 w-4 ${video.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} 
                    />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onTitleClick(video.url)}
                    className="text-blue-600 hover:text-blue-800 hover:underline text-left truncate max-w-xs"
                    title={video.title}
                  >
                    {video.title}
                  </button>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  <span 
                    className="truncate max-w-24 inline-block"
                    title={video.url}
                  >
                    {video.url}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {video.cluster}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {formatViews(video.views)}
                </td>
                <td className="px-4 py-3 text-right text-gray-600 text-sm">
                  {video.uploadDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
