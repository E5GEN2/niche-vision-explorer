
import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  currentDataset: string;
  datasets: string[];
  onDatasetChange: (dataset: string) => void;
  onNewDataset: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentDataset, 
  datasets, 
  onDatasetChange, 
  onNewDataset 
}) => {
  return (
    <header className="bg-white border-b border-gray-100 h-16 flex items-center px-8 shadow-sm backdrop-blur-sm">
      <div className="flex-1 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo / Title */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">YT</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
            YouTube Niche Research
          </h1>
        </div>
        
        {/* Dataset Selector */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-600">Dataset:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center space-x-2 min-w-[160px] justify-between shadow-sm"
              >
                <span className="font-medium text-gray-900">{currentDataset}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[160px]">
              {datasets.map((dataset) => (
                <DropdownMenuItem 
                  key={dataset}
                  onClick={() => onDatasetChange(dataset)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer font-medium text-gray-700 hover:text-gray-900"
                >
                  {dataset}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* New Dataset Button */}
        <Button 
          onClick={onNewDataset}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-6 py-2 h-10 flex items-center space-x-2 shadow-sm font-medium"
        >
          <Plus className="h-4 w-4" />
          <span>New Dataset</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
