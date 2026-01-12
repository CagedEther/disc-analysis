// DISC Profile Analysis Framework
// This framework is embedded directly in the app and used for transcript analysis

export const DISC_FRAMEWORK = `# DISC Profile Analysis Framework

## Analysis Objective

Analyze the provided transcript text to determine the speaker's DISC behavioral profile. Output the **primary dimension** (strongest) and optionally a **secondary dimension** (if clearly present). Each dimension should include a confidence level and supporting evidence from the transcript.

---

## The Four DISC Dimensions

### D – Dominance
**Core Traits:** Direct, decisive, competitive, results-oriented, takes charge

### I – Influence  
**Core Traits:** Enthusiastic, optimistic, collaborative, expressive, people-focused

### S – Steadiness
**Core Traits:** Patient, reliable, team-oriented, calm, supportive, conflict-averse

### C – Conscientiousness
**Core Traits:** Analytical, precise, systematic, quality-focused, detail-oriented

---

## Analysis Criteria

Evaluate the transcript against the following markers for each dimension. Assign higher weight to patterns that appear consistently throughout the text.

### Dominance (D) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Action verbs, achievement words ("win," "goal," "results," "deliver," "now," "must"), direct commands |
| **Sentence Structure** | Short, declarative sentences; imperatives; statements over questions |
| **Conversational Style** | Interrupts or redirects; drives toward decisions; limits small talk; impatient with details |
| **Focus** | "What" and "when" over "why" or "how"; bottom-line orientation |
| **Tone** | Confident, assertive, commanding; may appear blunt |
| **Key Phrases** | "Let's just do it," "What's the bottom line?", "We need to move on," "Here's what we're going to do" |

### Influence (I) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Positive emotion words ("excited," "love," "amazing," "great"), social words ("we," "together," "team") |
| **Sentence Structure** | Expressive, longer sentences; storytelling; exclamations |
| **Conversational Style** | Shares personal anecdotes; uses humor; enthusiastic; may go off-topic; animated |
| **Focus** | People and relationships; big-picture ideas; collaborative outcomes |
| **Tone** | Warm, upbeat, optimistic, energetic |
| **Key Phrases** | "This is so exciting!", "I was just telling someone...", "Wouldn't it be great if...", "We should celebrate" |

### Steadiness (S) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Supportive words ("understand," "help," "support," "comfortable"), team language, hedging words |
| **Sentence Structure** | Conditional phrasing ("Could we maybe..."), polite constructions, questions seeking consensus |
| **Conversational Style** | Listens more than speaks; waits turn; doesn't interrupt; affirms others; avoids conflict |
| **Focus** | Team harmony; process stability; how changes affect people |
| **Tone** | Calm, patient, warm, accommodating; may seem passive |
| **Key Phrases** | "Whatever works for everyone," "I want to make sure we're all comfortable," "Let me help with that," "How does the team feel?" |

### Conscientiousness (C) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Analytical words ("data," "analysis," "evidence," "logic"), precision language, qualifiers ("specifically," "exactly") |
| **Sentence Structure** | Complex, well-structured sentences; caveats and conditionals ("however," "although," "if...then") |
| **Conversational Style** | Asks clarifying questions; provides detailed explanations; cautious before committing; points out risks |
| **Focus** | Accuracy, quality, the "why" behind decisions; evidence-based reasoning |
| **Tone** | Measured, formal, objective; may seem reserved or critical |
| **Key Phrases** | "Let me think about that," "The data suggests...," "What's the rationale?", "We should consider the risks," "To be precise..." |

---

## Axis Evaluation

Use the two-axis model to triangulate your assessment:

\`\`\`
                    BOLD (Fast-paced, Assertive)
                              │
              D (Dominance)   │   I (Influence)
                              │
    TASK ─────────────────────┼───────────────────── PEOPLE
    FOCUSED                   │                     FOCUSED
                              │
              C (Conscient.)  │   S (Steadiness)
                              │
                    RESERVED (Methodical, Cautious)
\`\`\`

### Axis 1: Bold vs. Reserved
- **Bold:** Speaks frequently, confidently; makes statements; comfortable with conflict; fast-paced
- **Reserved:** Speaks less or more carefully; asks questions; avoids conflict; methodical pace

### Axis 2: Task vs. People Focus
- **Task:** Focuses on goals, data, outcomes, efficiency; less emotional language; formal
- **People:** Focuses on relationships, team, feelings; uses personal pronouns; warmer tone

| Quadrant | Axis Combination |
|----------|------------------|
| **D** | Bold + Task-focused |
| **I** | Bold + People-focused |
| **S** | Reserved + People-focused |
| **C** | Reserved + Task-focused |

---

## Scoring Methodology

### Step 1: Evidence Collection
For each dimension, identify and count:
- Matching vocabulary/phrases (list specific examples)
- Matching sentence patterns
- Matching conversational behaviors

### Step 2: Dimension Scoring
Rate each dimension on strength of evidence:

| Score | Label | Criteria |
|-------|-------|----------|
| 0 | None | No meaningful indicators present |
| 1 | Weak | 1-2 isolated indicators; could be situational |
| 2 | Moderate | 3-5 indicators; some pattern emerging |
| 3 | Strong | 6+ indicators; consistent pattern across transcript |
| 4 | Dominant | Pervasive pattern; defines communication style |

### Step 3: Profile Determination

1. **Primary Dimension:** Highest scoring dimension (must be score 2+)
2. **Secondary Dimension:** Second-highest scoring dimension (only include if score 2+ AND within 2 points of primary)
3. **Confidence Level:** Based on evidence quantity and consistency

| Confidence | Criteria |
|------------|----------|
| **High** | Primary score 4; clear differentiation from others; 350+ words analyzed |
| **Medium** | Primary score 3; reasonable differentiation; 150-350 words |
| **Low** | Primary score 2; limited differentiation or <150 words |

---

## Important Considerations

### Minimum Data Threshold
- **Ideal:** 350+ words for reliable assessment
- **Minimum:** 150 words for tentative assessment
- **Below 150 words:** Flag as "Insufficient data for reliable assessment"

### Context Awareness
- People adapt their communication style to context (e.g., more formal with executives)
- Single-topic discussions may not reveal full profile
- High-stress situations can amplify or mask certain traits
- Consider the speaker's role in the conversation (presenter, participant, facilitator)

### Common Blends
Frequently observed combinations:
- **D/I:** Bold, outgoing, action-oriented leaders
- **D/C:** Direct, analytical, results-focused
- **I/S:** Warm, supportive, relationship-builders
- **S/C:** Methodical, reliable, detail-conscious
- **C/S:** Thoughtful, careful, quality-focused

---

## Quick Reference: Distinguishing Similar Styles

| Comparison | Key Differentiator |
|------------|-------------------|
| **D vs. C** | D pushes for speed; C prioritizes accuracy |
| **D vs. I** | D focuses on task outcomes; I focuses on people engagement |
| **I vs. S** | I is energetic/initiating; S is calm/responding |
| **S vs. C** | S prioritizes harmony; C prioritizes correctness |
| **Assertive D vs. Assertive I** | D: "Here's what we're doing"; I: "Isn't this exciting!" |
| **Reserved S vs. Reserved C** | S: "How does everyone feel?"; C: "What does the data say?" |
`;

export type DISCDimension = 'D' | 'I' | 'S' | 'C';

export interface DISCScore {
  D: number;
  I: number;
  S: number;
  C: number;
}

export interface DetailedBreakdown {
  trait: string;
  score: number;
  evidence: string[];
  analysis: string;
}

export interface DISCAnalysisResult {
  overall_profile: {
    primary: DISCDimension;
    scores: DISCScore;
    summary: string;
  };
  detailed_breakdown: DetailedBreakdown[];
  recommendations: string[];
  confidence: 'high' | 'medium' | 'low';
}
