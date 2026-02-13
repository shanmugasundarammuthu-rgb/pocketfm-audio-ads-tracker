export function StatCard({ title, value, subtext, color }) {
  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500'
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-3">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center text-white text-sm font-bold`}>
          {typeof value === 'string' && value.startsWith('$') ? value.slice(1) : value}
        </div>
        <div className="ml-3 min-w-0">
          <h3 className="text-xs font-medium text-gray-500 truncate">{title}</h3>
          {subtext && <p className="text-xs text-gray-400 truncate">{subtext}</p>}
        </div>
      </div>
    </div>
  );
}
