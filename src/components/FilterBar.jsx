export function FilterBar({ filters, onFilterChange, formats, shows, teamMembers }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-wrap gap-4 items-end">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            placeholder="Search experiments..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {/* Format Filter */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Audio Format</label>
          <select
            value={filters.format}
            onChange={(e) => onFilterChange('format', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Formats</option>
            {formats.map(format => (
              <option key={format.id} value={format.id}>{format.name}</option>
            ))}
          </select>
        </div>
        
        {/* Show Filter */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Show</label>
          <select
            value={filters.show}
            onChange={(e) => onFilterChange('show', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Shows</option>
            {shows.map(show => (
              <option key={show.id} value={show.id}>{show.name}</option>
            ))}
          </select>
        </div>
        
        {/* Assignee Filter */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
          <select
            value={filters.assignee}
            onChange={(e) => onFilterChange('assignee', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Team</option>
            {teamMembers.map(person => (
              <option key={person.id} value={person.id}>{person.name}</option>
            ))}
          </select>
        </div>
        
        {/* Stage Filter */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Stage</label>
          <select
            value={filters.stage}
            onChange={(e) => onFilterChange('stage', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Stages</option>
            <option value="pending">Pending</option>
            <option value="cpi-testing">Meta CPI Testing</option>
            <option value="scaling-testing">Meta Scaling Testing</option>
            <option value="succeeded">Succeeded</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
    </div>
  );
}
