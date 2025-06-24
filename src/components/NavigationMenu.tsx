import React from 'react';
import { Plus, Menu, Table, BarChart3, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationMenuProps {
  currentDataset: string;
  datasets: string[];
  onDatasetChange: (dataset: string) => void;
  onNewDataset: () => void;
  onControlsOpen: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  currentDataset,
  datasets,
  onDatasetChange,
  onNewDataset,
  onControlsOpen,
  activeTab,
  onTabChange
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Navigation tabs */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">YT</span>
          </div>
          
          {/* Navigation tabs */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => onTabChange('data')}
              variant={activeTab === 'data' ? 'default' : 'outline'}
              className="flex items-center space-x-2"
              size="sm"
            >
              <Table className="h-4 w-4" />
              <span>Data Table</span>
            </Button>
            <Button
              onClick={() => onTabChange('analytics')}
              variant={activeTab === 'analytics' ? 'default' : 'outline'}
              className="flex items-center space-x-2"
              size="sm"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Clustering & Analytics</span>
            </Button>
          </div>
        </div>

        {/* Right side - Theme switcher, Dataset and controls */}
        <div className="flex items-center space-x-3">
          {/* Theme switcher */}
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
            <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>

          {/* Dataset Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Dataset:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="min-w-[120px] justify-between"
                >
                  <span className="truncate">{currentDataset}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {datasets.map((dataset) => (
                  <DropdownMenuItem 
                    key={dataset}
                    onClick={() => onDatasetChange(dataset)}
                  >
                    {dataset}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action buttons */}
          <Button 
            onClick={onNewDataset}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            New Dataset
          </Button>

          <Button
            onClick={onControlsOpen}
            variant="outline"
            size="sm"
          >
            <Menu className="h-4 w-4 mr-1" />
            Controls
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
