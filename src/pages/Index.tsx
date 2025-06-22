
import React, { useState } from 'react';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import ControlPanel from '../components/ControlPanel';
import ClusterCards from '../components/ClusterCards';
import Footer from '../components/Footer';
import NewDatasetModal from '../components/NewDatasetModal';
import LoadingOverlay from '../components/LoadingOverlay';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  // State management
  const [currentDataset, setCurrentDataset] = useState('Default Dataset');
  const [datasets, setDatasets] = useState(['Default Dataset', 'Gaming Videos', 'Tech Reviews']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const [videoData, setVideoData] = useState([
    {
      id: '1',
      title: 'How to Build a PC in 2024 - Complete Guide',
      url: 'https://youtube.com/watch?v=abc123',
      cluster: 1,
      views: 1250000,
      uploadDate: '2024-01-15',
      starred: false
    },
    {
      id: '2',
      title: 'Best Gaming Laptops Under $1000',
      url: 'https://youtube.com/watch?v=def456',
      cluster: 2,
      views: 850000,
      uploadDate: '2024-01-20',
      starred: true
    },
    {
      id: '3',
      title: 'React Tutorial for Beginners',
      url: 'https://youtube.com/watch?v=ghi789',
      cluster: 3,
      views: 500000,
      uploadDate: '2024-01-25',
      starred: false
    },
    {
      id: '4',
      title: 'iPhone 15 Pro Max Review',
      url: 'https://youtube.com/watch?v=jkl012',
      cluster: 1,
      views: 2100000,
      uploadDate: '2024-02-01',
      starred: true
    },
    {
      id: '5',
      title: 'Web Development Roadmap 2024',
      url: 'https://youtube.com/watch?v=mno345',
      cluster: 3,
      views: 750000,
      uploadDate: '2024-02-05',
      starred: false
    }
  ]);

  const clusterData = [
    { id: 1, name: 'Tech Reviews', videoCount: 24, supplyDemandRatio: 0.12, velocity: 350 },
    { id: 2, name: 'Gaming', videoCount: 18, supplyDemandRatio: 0.08, velocity: 520 },
    { id: 3, name: 'Tutorials', videoCount: 31, supplyDemandRatio: 0.15, velocity: 280 },
    { id: 4, name: 'Unboxing', videoCount: 12, supplyDemandRatio: 0.06, velocity: 180 }
  ];

  // Event handlers
  const handleDatasetChange = (dataset: string) => {
    setCurrentDataset(dataset);
    toast({
      title: "Dataset Changed",
      description: `Switched to ${dataset}`,
    });
  };

  const handleNewDataset = () => {
    setIsModalOpen(true);
  };

  const handleCreateDataset = (name: string) => {
    setDatasets([...datasets, name]);
    setCurrentDataset(name);
    toast({
      title: "Dataset Created",
      description: `Created and switched to ${name}`,
    });
  };

  const handleStarToggle = (id: string) => {
    setVideoData(prev => 
      prev.map(video => 
        video.id === id ? { ...video, starred: !video.starred } : video
      )
    );
  };

  const handleTitleClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleAsyncAction = async (actionName: string, duration: number = 2000) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, duration));
      toast({
        title: "Success",
        description: `${actionName} completed successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${actionName.toLowerCase()}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetTable = () => {
    setVideoData(prev => prev.map(video => ({ ...video, starred: false })));
    toast({
      title: "Table Reset",
      description: "All stars have been cleared",
    });
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      ['Title', 'URL', 'Cluster', 'Views', 'Upload Date', 'Starred'].join(','),
      ...videoData.map(video => [
        `"${video.title}"`,
        video.url,
        video.cluster,
        video.views,
        video.uploadDate,
        video.starred
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentDataset}_export.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "CSV Downloaded",
      description: "Dataset exported successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        currentDataset={currentDataset}
        datasets={datasets}
        onDatasetChange={handleDatasetChange}
        onNewDataset={handleNewDataset}
      />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Pane - Data Table */}
            <div className="col-span-12 lg:col-span-8">
              <DataTable
                data={videoData}
                onStarToggle={handleStarToggle}
                onTitleClick={handleTitleClick}
              />
            </div>
            
            {/* Right Pane - Control Panel */}
            <div className="col-span-12 lg:col-span-4">
              <ControlPanel
                onResetTable={handleResetTable}
                onDownloadCSV={handleDownloadCSV}
                onSaveDataset={() => handleAsyncAction('Save Dataset')}
                onTrainClassifier={() => handleAsyncAction('Train Classifier', 3000)}
                onStartAutoCollect={() => handleAsyncAction('Start Auto-Collect', 4000)}
                onRunClustering={() => handleAsyncAction('Run Clustering', 3500)}
                onCollectStats={() => handleAsyncAction('Collect Stats', 2500)}
                isLoading={isLoading}
              />
            </div>
          </div>
          
          {/* Clustering Section */}
          <ClusterCards clusters={clusterData} />
        </div>
      </main>
      
      <Footer />
      
      <NewDatasetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateDataset}
      />
      
      <LoadingOverlay isVisible={isLoading} />
    </div>
  );
};

export default Index;
