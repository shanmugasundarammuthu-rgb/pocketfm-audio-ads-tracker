import { ExperimentCard } from './ExperimentCard';

export function StageColumn({ stage, experiments, onEdit }) {
  return (
    <div className="min-w-[320px] w-80 flex flex-col">
      {/* Column Header */}
      <div className={`p-3 rounded-t-lg ${stage.color}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{stage.name}</h3>
          <span className="bg-white bg-opacity-50 px-2 py-1 rounded-full text-sm font-medium">
            {experiments.length}
          </span>
        </div>
      </div>
      
      {/* Column Body */}
      <div className={`flex-1 p-3 rounded-b-lg min-h-[200px] ${stage.color.replace('text-', '').replace('800', '100').replace('100', '50')}`}>
        <div className="space-y-3">
          {experiments.map(experiment => (
            <ExperimentCard 
              key={experiment.id} 
              experiment={experiment}
              onEdit={onEdit}
            />
          ))}
          {experiments.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-8">No experiments</p>
          )}
        </div>
      </div>
    </div>
  );
}
