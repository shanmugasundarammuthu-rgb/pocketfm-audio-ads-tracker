import { useState, useMemo } from 'react';
import { 
  initialExperiments, 
  stages, 
  audioFormats, 
  shows, 
  teamMembers 
} from './data/experiments';
import { StatCard } from './components/StatCard';
import { StageColumn } from './components/StageColumn';
import { FilterBar } from './components/FilterBar';
import { EditModal } from './components/EditModal';
import { TeamView } from './components/TeamView';

function App() {
  const [experiments, setExperiments] = useState(initialExperiments);
  const [filters, setFilters] = useState({
    search: '',
    format: 'all',
    show: 'all',
    assignee: 'all',
    stage: 'all'
  });
  const [editingExperiment, setEditingExperiment] = useState(null);
  const [viewMode, setViewMode] = useState('board'); // 'board' or 'team'
  
  // Calculate stats
  const stats = useMemo(() => ({
    total: experiments.length,
    pending: experiments.filter(e => e.stage === 'pending').length,
    cpiTesting: experiments.filter(e => e.stage === 'cpi-testing').length,
    scalingTesting: experiments.filter(e => e.stage === 'scaling-testing').length,
    succeeded: experiments.filter(e => e.stage === 'succeeded').length,
    failed: experiments.filter(e => e.stage === 'failed').length,
    avgCPI: experiments
      .filter(e => e.cpiValue !== null)
      .reduce((sum, e) => sum + e.cpiValue, 0) / 
      experiments.filter(e => e.cpiValue !== null).length || 0
  }), [experiments]);
  
  // Filter experiments
  const filteredExperiments = useMemo(() => {
    return experiments.filter(exp => {
      const format = audioFormats.find(f => f.id === exp.formatId);
      const show = shows.find(s => s.id === exp.showId);
      const assignee = teamMembers.find(p => p.id === exp.assignedTo);
      
      const matchesSearch = filters.search === '' || 
        format.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        show.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        assignee.name.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesFormat = filters.format === 'all' || exp.formatId === filters.format;
      const matchesShow = filters.show === 'all' || exp.showId === filters.show;
      const matchesAssignee = filters.assignee === 'all' || exp.assignedTo === filters.assignee;
      const matchesStage = filters.stage === 'all' || exp.stage === filters.stage;
      
      return matchesSearch && matchesFormat && matchesShow && matchesAssignee && matchesStage;
    });
  }, [experiments, filters]);
  
  // Group by stage for board view
  const experimentsByStage = useMemo(() => {
    return stages.map(stage => ({
      stage,
      experiments: filteredExperiments.filter(e => e.stage === stage.id)
    }));
  }, [filteredExperiments]);
  
  const handleSaveExperiment = (savedExperiment) => {
    if (editingExperiment) {
      setExperiments(prev => prev.map(e => 
        e.id === savedExperiment.id ? savedExperiment : e
      ));
    } else {
      setExperiments(prev => [...prev, { ...savedExperiment, id: `exp-${Date.now()}` }]);
    }
    setEditingExperiment(null);
  };
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Audio Ad Experiments</h1>
              <p className="text-purple-200">Pocket FM UK • Meta CPI Testing & Scaling</p>
            </div>
            <button
              onClick={() => setEditingExperiment({})}
              className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              + New Experiment
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
          <StatCard title="Total" value={stats.total} color="gray" />
          <StatCard title="Pending" value={stats.pending} color="gray" />
          <StatCard title="CPI Testing" value={stats.cpiTesting} color="blue" />
          <StatCard title="Scaling" value={stats.scalingTesting} color="purple" />
          <StatCard title="Succeeded" value={stats.succeeded} color="green" />
          <StatCard title="Failed" value={stats.failed} color="red" />
          <StatCard 
            title="Avg CPI" 
            value={stats.avgCPI ? `$${stats.avgCPI.toFixed(2)}` : '—'} 
            color="blue"
            subtext="Tested only"
          />
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex bg-white rounded-lg shadow p-1">
            <button
              onClick={() => setViewMode('board')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === 'board' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Board View
            </button>
            <button
              onClick={() => setViewMode('team')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === 'team' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Team View
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredExperiments.length} of {experiments.length} experiments
          </div>
        </div>
        
        {/* Filters */}
        <FilterBar 
          filters={filters}
          onFilterChange={handleFilterChange}
          formats={audioFormats}
          shows={shows}
          teamMembers={teamMembers}
        />
        
        {/* Content */}
        {viewMode === 'board' ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {experimentsByStage.map(({ stage, experiments }) => (
              <StageColumn
                key={stage.id}
                stage={stage}
                experiments={experiments}
                onEdit={setEditingExperiment}
              />
            ))}
          </div>
        ) : (
          <TeamView 
            experiments={filteredExperiments}
            teamMembers={teamMembers}
            onEdit={setEditingExperiment}
          />
        )}
      </main>
      
      {/* Edit Modal */}
      {editingExperiment !== null && (
        <EditModal
          experiment={editingExperiment.id ? editingExperiment : null}
          onSave={handleSaveExperiment}
          onClose={() => setEditingExperiment(null)}
        />
      )}
    </div>
  );
}

export default App;
