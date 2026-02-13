import { getFormatById, getShowById, getTeamMemberById, getStageById, evaluateCPI } from '../data/experiments';

export function ExperimentCard({ experiment, onEdit }) {
  const format = getFormatById(experiment.formatId);
  const show = getShowById(experiment.showId);
  const assignee = getTeamMemberById(experiment.assignedTo);
  const stage = getStageById(experiment.stage);
  const cpiEvaluation = experiment.cpiValue ? evaluateCPI(experiment.formatId, experiment.cpiValue) : null;
  
  return (
    <div 
      className={`bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer ${stage.borderColor}`}
      onClick={() => onEdit?.(experiment)}
    >
      {/* Header: Theme + Audio Format x Show */}
      <div className="mb-3">
        <div className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded mb-2">
          {format.theme}
        </div>
        <h4 className="font-semibold text-gray-900">{format.name}</h4>
        <p className="text-sm text-gray-600 mt-1">× {show.name}</p>
        <p className="text-xs text-gray-400">{show.genre} • {show.audience}</p>
      </div>
      
      {/* Stage Badge */}
      <div className="mb-3">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${stage.color}`}>
          {stage.name}
        </span>
      </div>
      
      {/* CPI Info */}
      {(experiment.cpiValue !== null && experiment.cpiValue !== undefined) && (
        <div className={`mb-3 p-2 rounded ${cpiEvaluation === 'pass' ? 'bg-green-50' : cpiEvaluation === 'fail' ? 'bg-red-50' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              {experiment.stage === 'scaling-testing' ? 'Scaling CPI:' : 'Tested CPI:'}
            </span>
            <span className={`font-bold ${cpiEvaluation === 'pass' ? 'text-green-700' : cpiEvaluation === 'fail' ? 'text-red-700' : 'text-gray-700'}`}>
              ${experiment.cpiValue.toFixed(2)}
            </span>
          </div>
          {experiment.scalingCpiValue !== null && experiment.scalingCpiValue !== undefined && (
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm font-medium text-gray-700">Scaling CPI:</span>
              <span className="font-bold text-purple-700">${experiment.scalingCpiValue.toFixed(2)}</span>
            </div>
          )}
          <div className="mt-1 text-xs text-gray-500">
            Threshold: ${format.cpiThreshold.toFixed(2)}
          </div>
          {cpiEvaluation && (
            <div className={`mt-1 text-xs font-medium ${cpiEvaluation === 'pass' ? 'text-green-600' : 'text-red-600'}`}>
              {cpiEvaluation === 'pass' ? '✓ Under threshold' : '✗ Over threshold'}
            </div>
          )}
        </div>
      )}
      
      {/* Date */}
      {experiment.cpiTestingDate && (
        <div className="mb-2 text-xs text-gray-500">
          <span className="font-medium">CPI Test:</span> {experiment.cpiTestingDate}
        </div>
      )}
      {experiment.scalingDate && (
        <div className="mb-2 text-xs text-gray-500">
          <span className="font-medium">Scaling Start:</span> {experiment.scalingDate}
        </div>
      )}
      
      {/* Assignee */}
      {assignee && (
        <div className="flex items-center mt-3 pt-3 border-t">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-medium">
            {assignee.avatar}
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900">{assignee.name}</p>
            <p className="text-xs text-gray-500">{assignee.role}</p>
          </div>
        </div>
      )}
      
      {/* Notes */}
      {experiment.notes && (
        <p className="mt-3 text-xs text-gray-500 italic">"{experiment.notes}"</p>
      )}
    </div>
  );
}
