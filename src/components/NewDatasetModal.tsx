
import React, { useState } from 'react';
import { X } from 'lucide-react';
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">Create New Dataset</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600"
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
            className="w-full"
            autoFocus
          />
        </div>
        
        <div className="flex space-x-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
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
