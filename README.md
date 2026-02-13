# Pocket FM UK - Audio Ad Experiments Tracker

A custom dashboard for tracking Audio Ad Format experiments across Meta CPI Testing and Meta Scaling Testing stages.

## Features

- **Board View**: Kanban-style view of experiments by stage
- **Team View**: See who's working on what
- **CPI Tracking**: Record and evaluate CPI values against configurable thresholds
- **Auto-evaluation**: Automatically determine pass/fail based on format-specific CPI thresholds
- **Filters**: Search and filter by format, show, assignee, or stage

## Stages

1. **Pending** - Waiting to start
2. **Meta CPI Testing** - Running CPI tests
3. **Meta Scaling Testing** - Approved for scaling
4. **Succeeded** - Successfully scaled
5. **Failed** - Did not meet CPI threshold

## Data Model

### Audio Formats (with CPI thresholds)
- Host Read Ad ($2.50)
- Sponsored Segment ($3.00)
- Pre-Roll Ad ($2.00)
- Mid-Roll Ad ($2.25)
- Dynamic Insertion ($1.80)

### Shows
- Mystery Manor (Thriller)
- Love in London (Romance)
- Sci-Fi Chronicles (Sci-Fi)
- True Crime Stories (Crime)
- Comedy Central (Comedy)

## Getting Started

```bash
npm install
npm start
```

## Deploying

```bash
# Deploy to Vercel
npx vercel --prod

# Or use the deployment script
bash ../../scripts/deploy.sh vercel
```

## Usage

1. **Add Experiments**: Click "New Experiment" to create a test
2. **Record CPI**: Edit an experiment to add the tested CPI value
3. **Auto-evaluate**: Click "Auto-update stage" to pass/fail based on threshold
4. **Track Progress**: Use Board View for pipeline, Team View for assignments

## Customization

Edit `src/data/experiments.js` to:
- Add more audio formats
- Update CPI thresholds
- Add team members
- Add shows
