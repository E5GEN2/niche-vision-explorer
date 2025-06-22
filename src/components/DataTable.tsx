
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
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <tr>
              <th className="w-12 px-6 py-4 text-left">
                <Star className="h-4 w-4 text-gray-400" />
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 text-sm">Title</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 text-sm w-32">URL</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 text-sm w-20">Cluster</th>
              <th className="px-6 py-4 text-right font-semibold text-gray-700 text-sm w-24">Views</th>
              <th className="px-6 py-4 text-right font-semibold text-gray-700 text-sm w-32">Upload Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((video, index) => (
              <tr 
                key={video.id}
                className={`
                  h-14 hover:bg-blue-50/50 transition-all duration-200
                  ${video.starred ? 'bg-yellow-50/50 hover:bg-yellow-100/50' : ''}
                `}
              >
                <td className="px-6 py-4">
                  <button
                    onClick={() => onStarToggle(video.id)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors p-1 rounded-md hover:bg-yellow-50"
                  >
                    <Star 
                      className={`h-4 w-4 ${video.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} 
                    />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onTitleClick(video.url)}
                    className="text-gray-900 hover:text-blue-600 hover:underline text-left font-medium truncate max-w-xs block transition-colors"
                    title={video.title}
                  >
                    {video.title}
                  </button>
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  <span 
                    className="truncate max-w-24 inline-block"
                    title={video.url}
                  >
                    {video.url}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {video.cluster}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-900 font-medium">
                  {formatViews(video.views)}
                </td>
                <td className="px-6 py-4 text-right text-gray-500 text-sm">
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
