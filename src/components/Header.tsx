
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
    <header className="bg-gray-50 border-b border-gray-200 h-16 flex items-center px-6 shadow-sm">
      <div className="flex-1 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          YouTube Niche Research Tool
        </h1>
        
        {/* Dataset Selector */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Dataset:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center space-x-2 hover:bg-gray-50"
              >
                <span>{currentDataset}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {datasets.map((dataset) => (
                <DropdownMenuItem 
                  key={dataset}
                  onClick={() => onDatasetChange(dataset)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 h-9 flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Dataset</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
