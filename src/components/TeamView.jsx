import { getFormatById, getShowById, getStageById, evaluateCPI } from '../data/experiments';

export function TeamView({ experiments, teamMembers, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPI</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teamMembers.map(member => {
            const memberExperiments = experiments.filter(e => e.assignedTo === member.id);
            if (memberExperiments.length === 0) return null;
            
            return memberExperiments.map((exp, idx) => {
              const format = getFormatById(exp.formatId);
              const show = getShowById(exp.showId);
              const stage = getStageById(exp.stage);
              const cpiEval = exp.cpiValue ? evaluateCPI(exp.formatId, exp.cpiValue) : null;
              
              return (
                <tr key={exp.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onEdit(exp)}>
                  {idx === 0 && (
                    <td className="px-6 py-4 whitespace-nowrap" rowSpan={memberExperiments.length}>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                          {member.avatar}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.role}</div>
                          <div className="text-xs text-gray-400 mt-1">{memberExperiments.length} experiments</div>
                        </div>
                      </div>
                    </td>
                  )}
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{format.name}</div>
                    <div className="text-sm text-gray-500">× {show.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${stage.color}`}>
                      {stage.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {exp.cpiValue ? (
                      <div>
                        <span className={`font-medium ${cpiEval === 'pass' ? 'text-green-600' : cpiEval === 'fail' ? 'text-red-600' : ''}`}>
                          ${exp.cpiValue.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">/ ${format.cpiThreshold}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {exp.cpiTestingDate || '—'}
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
