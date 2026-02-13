import { useState } from 'react';
import { audioFormats, shows, teamMembers, stages, evaluateCPI } from '../data/experiments';

export function EditModal({ experiment, onSave, onClose }) {
  const [formData, setFormData] = useState({
    formatId: experiment?.formatId || audioFormats[0].id,
    showId: experiment?.showId || shows[0].id,
    stage: experiment?.stage || 'pending',
    assignedTo: experiment?.assignedTo || teamMembers[0].id,
    cpiTestingDate: experiment?.cpiTestingDate || '',
    scalingDate: experiment?.scalingDate || '',
    cpiValue: experiment?.cpiValue || '',
    scalingCpiValue: experiment?.scalingCpiValue || '',
    notes: experiment?.notes || ''
  });
  
  const format = audioFormats.find(f => f.id === formData.formatId);
  const cpiEvaluation = formData.cpiValue ? evaluateCPI(formData.formatId, parseFloat(formData.cpiValue)) : null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...experiment,
      ...formData,
      cpiValue: formData.cpiValue ? parseFloat(formData.cpiValue) : null,
      scalingCpiValue: formData.scalingCpiValue ? parseFloat(formData.scalingCpiValue) : null
    });
  };
  
  const handleAutoStage = () => {
    if (formData.cpiValue && formData.stage === 'cpi-testing') {
      const result = evaluateCPI(formData.formatId, parseFloat(formData.cpiValue));
      if (result === 'pass') {
        setFormData({ ...formData, stage: 'scaling-testing' });
      } else if (result === 'fail') {
        setFormData({ ...formData, stage: 'failed' });
      }
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {experiment ? 'Edit Experiment' : 'New Experiment'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Audio Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Audio Format</label>
              <select
                value={formData.formatId}
                onChange={(e) => setFormData({ ...formData, formatId: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                {audioFormats.map(f => (
                  <option key={f.id} value={f.id}>
                    {f.theme} — {f.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">CPI Threshold: ${format.cpiThreshold}</p>
            </div>
            
            {/* Show */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Show</label>
              <select
                value={formData.showId}
                onChange={(e) => setFormData({ ...formData, showId: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                {shows.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.genre})
                  </option>
                ))}
              </select>
            </div>
            
            {/* Assignee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
              <select
                value={formData.assignedTo}
                onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                {teamMembers.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            
            {/* Stage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stage</label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              >
                {stages.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            
            {/* CPI Testing Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CPI Testing Date</label>
              <input
                type="date"
                value={formData.cpiTestingDate}
                onChange={(e) => setFormData({ ...formData, cpiTestingDate: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* CPI Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CPI Value ($)
                {format && <span className="text-gray-400 ml-2">(Threshold: ${format.cpiThreshold})</span>}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.cpiValue}
                  onChange={(e) => setFormData({ ...formData, cpiValue: e.target.value })}
                  className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="2.50"
                />
                {formData.cpiValue && (
                  <span className={`px-3 py-2 rounded-lg font-medium ${
                    cpiEvaluation === 'pass' ? 'bg-green-100 text-green-800' : 
                    cpiEvaluation === 'fail' ? 'bg-red-100 text-red-800' : 'bg-gray-100'
                  }`}>
                    {cpiEvaluation === 'pass' ? '✓ Pass' : cpiEvaluation === 'fail' ? '✗ Fail' : '-'}
                  </span>
                )}
              </div>
              {formData.stage === 'cpi-testing' && formData.cpiValue && (
                <button
                  type="button"
                  onClick={handleAutoStage}
                  className="mt-2 text-sm text-primary hover:underline"
                >
                  Auto-update stage based on CPI
                </button>
              )}
            </div>
            
            {/* Scaling Date */}
            {formData.stage === 'scaling-testing' || formData.stage === 'succeeded' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scaling Start Date</label>
                <input
                  type="date"
                  value={formData.scalingDate}
                  onChange={(e) => setFormData({ ...formData, scalingDate: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            ) : null}
            
            {/* Scaling CPI */}
            {(formData.stage === 'scaling-testing' || formData.stage === 'succeeded') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scaling CPI Value ($)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.scalingCpiValue}
                  onChange={(e) => setFormData({ ...formData, scalingCpiValue: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="2.00"
                />
              </div>
            )}
            
            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows="3"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Any additional notes..."
              />
            </div>
            
            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
