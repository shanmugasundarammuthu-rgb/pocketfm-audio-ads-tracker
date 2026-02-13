// Audio Ad Formats with CPI thresholds
export const audioFormats = [
  {
    id: 'format-1',
    name: 'Host Read Ad',
    description: 'Host personally reads the advertisement',
    cpiThreshold: 2.50, // Max acceptable CPI for this format
    typicalDuration: '30-60s'
  },
  {
    id: 'format-2',
    name: 'Sponsored Segment',
    description: 'Longer integrated brand segment',
    cpiThreshold: 3.00,
    typicalDuration: '2-3min'
  },
  {
    id: 'format-3',
    name: 'Pre-Roll Ad',
    description: 'Ad plays before episode starts',
    cpiThreshold: 2.00,
    typicalDuration: '15-30s'
  },
  {
    id: 'format-4',
    name: 'Mid-Roll Ad',
    description: 'Ad inserted mid-episode',
    cpiThreshold: 2.25,
    typicalDuration: '30-45s'
  },
  {
    id: 'format-5',
    name: 'Dynamic Insertion',
    description: 'Contextually targeted ad insertion',
    cpiThreshold: 1.80,
    typicalDuration: '30s'
  }
];

// Shows being tested
export const shows = [
  { id: 'show-1', name: 'Mystery Manor', genre: 'Thriller', audience: '18-34' },
  { id: 'show-2', name: 'Love in London', genre: 'Romance', audience: '25-45' },
  { id: 'show-3', name: 'Sci-Fi Chronicles', genre: 'Sci-Fi', audience: '18-40' },
  { id: 'show-4', name: 'True Crime Stories', genre: 'Crime', audience: '25-50' },
  { id: 'show-5', name: 'Comedy Central', genre: 'Comedy', audience: '18-35' }
];

// Team members
export const teamMembers = [
  { id: 'person-1', name: 'Sarah Chen', role: 'Growth Manager', avatar: 'SC' },
  { id: 'person-2', name: 'James Wilson', role: 'Media Buyer', avatar: 'JW' },
  { id: 'person-3', name: 'Emma Davis', role: 'Creative Strategist', avatar: 'ED' },
  { id: 'person-4', name: 'Michael Brown', role: 'Analyst', avatar: 'MB' },
  { id: 'person-5', name: 'Lisa Anderson', role: 'Campaign Manager', avatar: 'LA' }
];

// Experiment stages
export const stages = [
  { id: 'pending', name: 'Pending', color: 'bg-gray-100 text-gray-800', borderColor: 'stage-pending' },
  { id: 'cpi-testing', name: 'Meta CPI Testing', color: 'bg-blue-100 text-blue-800', borderColor: 'stage-cpi' },
  { id: 'scaling-testing', name: 'Meta Scaling Testing', color: 'bg-purple-100 text-purple-800', borderColor: 'stage-scaling' },
  { id: 'succeeded', name: 'Succeeded', color: 'bg-green-100 text-green-800', borderColor: 'stage-succeeded' },
  { id: 'failed', name: 'Failed', color: 'bg-red-100 text-red-800', borderColor: 'stage-failed' }
];

// Initial experiments data
export const initialExperiments = [
  {
    id: 'exp-1',
    formatId: 'format-1',
    showId: 'show-1',
    stage: 'cpi-testing',
    assignedTo: 'person-1',
    cpiTestingDate: '2025-02-15',
    cpiValue: null,
    notes: 'First test for Host Read on Mystery Manor',
    createdAt: '2025-02-10'
  },
  {
    id: 'exp-2',
    formatId: 'format-3',
    showId: 'show-2',
    stage: 'cpi-testing',
    assignedTo: 'person-2',
    cpiTestingDate: '2025-02-14',
    cpiValue: 1.85,
    notes: 'Pre-roll performing well',
    createdAt: '2025-02-08'
  },
  {
    id: 'exp-3',
    formatId: 'format-3',
    showId: 'show-2',
    stage: 'scaling-testing',
    assignedTo: 'person-2',
    cpiTestingDate: '2025-02-14',
    scalingDate: '2025-02-16',
    cpiValue: 1.85,
    scalingCpiValue: null,
    notes: 'Approved for scaling',
    createdAt: '2025-02-08'
  },
  {
    id: 'exp-4',
    formatId: 'format-2',
    showId: 'show-3',
    stage: 'cpi-testing',
    assignedTo: 'person-3',
    cpiTestingDate: '2025-02-18',
    cpiValue: null,
    notes: 'Testing sponsored segment for Sci-Fi audience',
    createdAt: '2025-02-12'
  },
  {
    id: 'exp-5',
    formatId: 'format-1',
    showId: 'show-4',
    stage: 'failed',
    assignedTo: 'person-1',
    cpiTestingDate: '2025-02-10',
    cpiValue: 3.20,
    notes: 'CPI too high for True Crime audience',
    createdAt: '2025-02-05'
  },
  {
    id: 'exp-6',
    formatId: 'format-5',
    showId: 'show-5',
    stage: 'succeeded',
    assignedTo: 'person-4',
    cpiTestingDate: '2025-02-08',
    scalingDate: '2025-02-12',
    cpiValue: 1.45,
    scalingCpiValue: 1.52,
    notes: 'Excellent performance, fully scaled',
    createdAt: '2025-02-03'
  },
  {
    id: 'exp-7',
    formatId: 'format-4',
    showId: 'show-1',
    stage: 'pending',
    assignedTo: 'person-5',
    cpiTestingDate: null,
    cpiValue: null,
    notes: 'Waiting for creative assets',
    createdAt: '2025-02-13'
  },
  {
    id: 'exp-8',
    formatId: 'format-2',
    showId: 'show-5',
    stage: 'cpi-testing',
    assignedTo: 'person-3',
    cpiTestingDate: '2025-02-16',
    cpiValue: null,
    notes: 'Testing comedy integration',
    createdAt: '2025-02-11'
  }
];

// Helper functions
export function getFormatById(id) {
  return audioFormats.find(f => f.id === id);
}

export function getShowById(id) {
  return shows.find(s => s.id === id);
}

export function getTeamMemberById(id) {
  return teamMembers.find(p => p.id === id);
}

export function getStageById(id) {
  return stages.find(s => s.id === id);
}

export function evaluateCPI(formatId, cpiValue) {
  const format = getFormatById(formatId);
  if (!format || cpiValue === null) return null;
  return cpiValue <= format.cpiThreshold ? 'pass' : 'fail';
}
