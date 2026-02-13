// Audio Ad Formats with CPI thresholds
export const audioFormats = [
  { id: 'format-1', theme: 'Classic ASMR', name: 'Standard ASMR visual + Audio story', cpiThreshold: 2.50 },
  { id: 'format-2', theme: 'Use Case: Transport', name: 'Commute visuals (driving/riding) + Audio + Subs', cpiThreshold: 2.50 },
  { id: 'format-3', theme: 'Use Case: Fitness', name: 'Gym/Workout visuals + Audio + Subs', cpiThreshold: 2.50 },
  { id: 'format-4', theme: 'Use Case: Chores', name: 'Household chores (cleaning/cooking) + Audio + Subs', cpiThreshold: 2.50 },
  { id: 'format-5', theme: 'Brand Split-Screen', name: 'Brand (top) / Title (bottom) / Subs (center)', cpiThreshold: 2.50 },
  { id: 'format-6', theme: 'Video-to-Audio', name: 'Short video hook → Transitions to Subs/Audio only', cpiThreshold: 2.50 },
  { id: 'format-7', theme: 'Brand: Fantasy', name: 'Brand-centric visual tailored for Fantasy genre', cpiThreshold: 2.50 },
  { id: 'format-8', theme: 'Genre Tagline', name: 'Focus on Genre tagline + Audio', cpiThreshold: 2.50 },
  { id: 'format-9', theme: 'UGC: Experience', name: 'Person listening/reacting → Transitions to Audio', cpiThreshold: 2.50 },
  { id: 'format-10', theme: 'UGC: Review', name: 'Person explaining story details + Subs', cpiThreshold: 2.50 },
  { id: 'format-11', theme: 'Writing Animation', name: 'Animated handwriting on page + Page flip', cpiThreshold: 2.50 },
  { id: 'format-12', theme: 'Burning Edges', name: 'Visual of book pages burning at the edges', cpiThreshold: 2.50 },
  { id: 'format-13', theme: 'Blood Drops', name: 'Visual of blood drops hitting book pages', cpiThreshold: 2.50 },
  { id: 'format-14', theme: 'Magic Erase', name: 'Words being erased (Harry Potter style)', cpiThreshold: 2.50 },
  { id: 'format-15', theme: 'Comic Motion', name: 'Comic-book style motion stills + Subs', cpiThreshold: 2.50 },
  { id: 'format-16', theme: 'Lofi Thriller', name: 'Car backseat POV, rain, radio playing thriller audio', cpiThreshold: 2.50 },
  { id: 'format-17', theme: 'Baby Podcaster', name: 'AI baby narrator for Dark/Crime stories + LA visuals', cpiThreshold: 2.50 },
  { id: 'format-18', theme: 'Story Writer', name: 'Character writing in relaxed setup + Ambient SFX', cpiThreshold: 2.50 },
  { id: 'format-19', theme: 'RPG World', name: 'Main character walking through story world (Game style)', cpiThreshold: 2.50 },
  { id: 'format-20', theme: 'Pop-up Book', name: 'Characters "pop up" from book during narration', cpiThreshold: 2.50 },
  { id: 'format-21', theme: 'Trading Cards', name: 'Kids debating character stats via trading cards', cpiThreshold: 2.50 },
  { id: 'format-22', theme: 'Gwent Style', name: 'Card-game based interface for story battles', cpiThreshold: 2.50 },
  { id: 'format-23', theme: 'Short Promos', name: '30s–2.5m cliffhanger clips with enhanced SFX', cpiThreshold: 2.50 },
  { id: 'format-24', theme: '2D Lofi/App UI', name: '2D animation (bored in transit) → Cut to App UI', cpiThreshold: 2.50 },
  { id: 'format-25', theme: 'Social UGC', name: 'People chatting in social settings about show twists', cpiThreshold: 2.50 },
  { id: 'format-26', theme: 'Reel Style', name: 'High-energy: Alternating colors, oversized text, emojis', cpiThreshold: 2.50 },
  { id: 'format-27', theme: 'Theatre Reverb', name: 'Audio with auditorium reverb + intermittent visuals', cpiThreshold: 2.50 },
  { id: 'format-28', theme: 'Memory Book', name: 'Vintage photos in flipping book + Nostalgic audio', cpiThreshold: 2.50 },
  { id: 'format-29', theme: 'Dream/Float', name: 'Visual of listener floating as environments shift', cpiThreshold: 2.50 },
  { id: 'format-30', theme: 'Mixed ASMR', name: 'Multi-story ASMR compilation', cpiThreshold: 2.50 },
  { id: 'format-31', theme: 'Bingeability', name: 'Focus on "travel/less screentime" utility + Story', cpiThreshold: 2.50 },
  { id: 'format-32', theme: 'Hobby ASMR', name: 'Miniature painting/crafting visuals + Story snippets', cpiThreshold: 2.50 },
  { id: 'format-33', theme: 'Nature ASMR', name: 'Underwater/Nature movement visuals + Character VO', cpiThreshold: 2.50 },
  { id: 'format-34', theme: 'Animal ASMR', name: 'Pet grooming visuals; AI focus on "lost in the story"', cpiThreshold: 2.50 }
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

// Initial experiments data - updated with new format IDs
export const initialExperiments = [
  {
    id: 'exp-1',
    formatId: 'format-1',
    showId: 'show-1',
    stage: 'cpi-testing',
    assignedTo: 'person-1',
    cpiTestingDate: '2025-02-15',
    cpiValue: null,
    notes: 'First test for Classic ASMR on Mystery Manor',
    createdAt: '2025-02-10'
  },
  {
    id: 'exp-2',
    formatId: 'format-16',
    showId: 'show-1',
    stage: 'cpi-testing',
    assignedTo: 'person-2',
    cpiTestingDate: '2025-02-14',
    cpiValue: 1.85,
    notes: 'Lofi Thriller performing well on Mystery Manor',
    createdAt: '2025-02-08'
  },
  {
    id: 'exp-3',
    formatId: 'format-16',
    showId: 'show-1',
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
    formatId: 'format-7',
    showId: 'show-3',
    stage: 'cpi-testing',
    assignedTo: 'person-3',
    cpiTestingDate: '2025-02-18',
    cpiValue: null,
    notes: 'Testing Brand: Fantasy for Sci-Fi audience',
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
    formatId: 'format-23',
    showId: 'show-5',
    stage: 'succeeded',
    assignedTo: 'person-4',
    cpiTestingDate: '2025-02-08',
    scalingDate: '2025-02-12',
    cpiValue: 1.45,
    scalingCpiValue: 1.52,
    notes: 'Short Promos excellent performance, fully scaled',
    createdAt: '2025-02-03'
  },
  {
    id: 'exp-7',
    formatId: 'format-9',
    showId: 'show-2',
    stage: 'pending',
    assignedTo: 'person-5',
    cpiTestingDate: null,
    cpiValue: null,
    notes: 'Waiting for UGC: Experience creative assets',
    createdAt: '2025-02-13'
  },
  {
    id: 'exp-8',
    formatId: 'format-25',
    showId: 'show-5',
    stage: 'cpi-testing',
    assignedTo: 'person-3',
    cpiTestingDate: '2025-02-16',
    cpiValue: null,
    notes: 'Testing Social UGC for comedy audience',
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
