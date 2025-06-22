
import React, { useState } from 'react';
import { X, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewDatasetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

const NewDatasetModal: React.FC<NewDatasetModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [datasetName, setDatasetName] = useState('');

  if (!isOpen) return null;

  const handleCreate = () => {
    if (datasetName.trim()) {
      onCreate(datasetName.trim());
      setDatasetName('');
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-96 max-w-md mx-4 shadow-2xl border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <Database className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Create New Dataset</h2>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Enter dataset name..."
            value={datasetName}
            onChange={(e) => setDatasetName(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            autoFocus
          />
        </div>
        
        <div className="flex space-x-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 h-11 rounded-lg border-gray-200 hover:bg-gray-50 font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            className="flex-1 h-11 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-sm"
            disabled={!datasetName.trim()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewDatasetModal;
