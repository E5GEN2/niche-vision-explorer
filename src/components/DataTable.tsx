
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
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="w-12 px-6 py-4 text-left">
                <Star className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm">Title</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm w-32">URL</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm w-20">Cluster</th>
              <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-200 text-sm w-24">Views</th>
              <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-200 text-sm w-32">Upload Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
            {data.map((video, index) => (
              <tr 
                key={video.id}
                className={`
                  h-14 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200
                  ${video.starred ? 'bg-yellow-50/50 hover:bg-yellow-100/50 dark:bg-yellow-900/20 dark:hover:bg-yellow-800/30' : ''}
                `}
              >
                <td className="px-6 py-4">
                  <button
                    onClick={() => onStarToggle(video.id)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors p-1 rounded-md hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
                  >
                    <Star 
                      className={`h-4 w-4 ${video.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} 
                    />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onTitleClick(video.url)}
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:underline text-left font-medium truncate max-w-xs block transition-colors"
                    title={video.title}
                  >
                    {video.title}
                  </button>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">
                  <span 
                    className="truncate max-w-24 inline-block"
                    title={video.url}
                  >
                    {video.url}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium">
                    {video.cluster}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-900 dark:text-gray-100 font-medium">
                  {formatViews(video.views)}
                </td>
                <td className="px-6 py-4 text-right text-gray-500 dark:text-gray-400 text-sm">
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
