// DISC Profile Analysis Framework v2
// Enhanced framework with theoretical grounding, computational markers, few-shot examples, and validity checks

export const DISC_FRAMEWORK = `# DISC Profile Analysis Framework v2

## Analysis Objective

Analyze the provided transcript to determine the speaker's DISC behavioral profile. Output the **primary dimension** (strongest) and optionally a **secondary dimension** (if clearly present). Provide confidence level and supporting evidence from the transcript.

---

## Theoretical Foundation

The DISC model maps behavior along two psychological axes derived from William Moulton Marston's work:

- **Vertical Axis (Pace):** Active/Bold vs. Passive/Reserved — reflects perceived power relative to environment. High-power individuals (D, I) speak assertively and drive conversations; low-power individuals (S, C) adapt and respond methodically.
- **Horizontal Axis (Priority):** Task-Focused vs. People-Focused — reflects environmental perception. Task-oriented styles (D, C) see the environment as challenging and prioritize outcomes; people-oriented styles (I, S) see it as favorable and prioritize relationships.

This creates four quadrants where linguistic patterns cluster predictably.

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

Evaluate the transcript against the following markers. Assign higher weight to patterns that appear consistently.

### Dominance (D) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Action verbs, achievement words ("win," "goal," "results," "deliver," "now," "must"), direct commands |
| **Sentence Structure** | Short, declarative sentences; imperatives; statements over questions; low word-count per sentence |
| **Conversational Style** | Interrupts or redirects; drives toward decisions; limits small talk; impatient with details |
| **Focus** | "What" and "when" over "why" or "how"; bottom-line orientation |
| **Tone** | Confident, assertive, commanding; may appear blunt |
| **Computational Markers** | High 1st-person agentivity ("I decided," "I'll handle"); absence of hedging; active voice dominant |
| **Key Phrases** | "Let's just do it," "What's the bottom line?", "We need to move on," "Here's what we're going to do," "No excuses" |
| **Anti-patterns (rules OUT D)** | Heavy hedging ("maybe," "perhaps"); consensus-seeking questions; long explanations before action |

### Influence (I) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Positive emotion words ("excited," "love," "amazing," "great," "incredible"), social words ("we," "together," "team") |
| **Sentence Structure** | Expressive, longer sentences; storytelling; exclamations; high lexical diversity |
| **Conversational Style** | Shares personal anecdotes; uses humor; enthusiastic; may go off-topic; animated |
| **Focus** | People and relationships; big-picture ideas; collaborative outcomes; social recognition |
| **Tone** | Warm, upbeat, optimistic, energetic |
| **Computational Markers** | High exclamation mark usage; metaphors and hyperbole; references to others by name; storytelling structure |
| **Key Phrases** | "This is so exciting!", "I was just telling someone...", "Wouldn't it be great if...", "We should celebrate," "Oh my gosh" |
| **Anti-patterns (rules OUT I)** | Flat affect; data-heavy language; avoiding social references; formal/reserved tone |

### Steadiness (S) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Supportive words ("understand," "help," "support," "comfortable"), team language, hedging words |
| **Sentence Structure** | Conditional phrasing ("Could we maybe..."), polite constructions, questions seeking consensus |
| **Conversational Style** | Listens more than speaks; waits turn; doesn't interrupt; affirms others; avoids conflict |
| **Focus** | Team harmony; process stability; how changes affect people |
| **Tone** | Calm, patient, warm, accommodating; may seem passive |
| **Computational Markers** | High 1st-person plural ("we," "us," "our"); epistemic hedging ("maybe," "perhaps," "might"); politeness markers |
| **Key Phrases** | "Whatever works for everyone," "I want to make sure we're all comfortable," "Let me help with that," "How does the team feel?" |
| **Anti-patterns (rules OUT S)** | Direct commands; competitive language; rushing others; conflict initiation |

### Conscientiousness (C) Indicators

| Category | What to Look For |
|----------|------------------|
| **Vocabulary** | Analytical words ("data," "analysis," "evidence," "logic"), precision language, qualifiers ("specifically," "exactly") |
| **Sentence Structure** | Complex, well-structured sentences; caveats and conditionals ("however," "although," "if...then") |
| **Conversational Style** | Asks clarifying questions; provides detailed explanations; cautious before committing; points out risks |
| **Focus** | Accuracy, quality, the "why" behind decisions; evidence-based reasoning |
| **Tone** | Measured, formal, objective; may seem reserved or critical |
| **Computational Markers** | Comparative structures ("as...as," "more than"); numerical references; formal register; complex syntax |
| **Key Phrases** | "Let me think about that," "The data suggests...," "What's the rationale?", "We should consider the risks," "To be precise..." |
| **Anti-patterns (rules OUT C)** | Vague generalizations; emotion-based arguments; rushing to decisions without analysis |

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
- Check anti-patterns (reduce score if present)

### Step 2: Dimension Scoring
Rate each dimension 0–100 based on strength of evidence:

| Score Range | Label | Criteria |
|-------------|-------|----------|
| 0–20 | None | No meaningful indicators present |
| 21–40 | Weak | 1-2 isolated indicators; could be situational |
| 41–60 | Moderate | 3-5 indicators; some pattern emerging |
| 61–80 | Strong | 6+ indicators; consistent pattern across transcript |
| 81–100 | Dominant | Pervasive pattern; defines communication style |

### Step 3: Profile Determination

1. **Primary Dimension:** Highest scoring dimension (must score 40+)
2. **Secondary Dimension:** Second-highest scoring dimension (only include if score 40+ AND within 15 points of primary)
3. **Blended Profile:** If two dimensions score within 15 points, report as blend (e.g., "Di" or "SC")
4. **Confidence Level:** Based on evidence quantity and consistency

| Confidence | Criteria |
|------------|----------|
| **High** | Primary score 80+; clear differentiation from others; 350+ words analyzed |
| **Medium** | Primary score 60+; reasonable differentiation; 150-350 words |
| **Low** | Primary score 40+; limited differentiation or <150 words |

---

## Few-Shot Examples

### Example 1: High Dominance (D)
**Transcript excerpt:**
> "Okay, let's get started. We need to wrap this up in the next 30 minutes. Here's the bottom line - we're behind schedule and we need to catch up fast. I've already made the decision to move forward with option A. No excuses. If there are blockers, escalate them to me immediately and I'll handle it. Let's execute."

**Analysis:**
- **D Score: 90** — Imperatives ("let's get started," "let's execute"), bottom-line language, short declarative sentences, time pressure, unilateral decisions ("I've already made the decision"), action focus
- **I Score: 20** — Minimal; "team" implied but no enthusiasm or storytelling
- **S Score: 0** — No hedging, no consensus-seeking, no accommodation
- **C Score: 20** — Mentions blockers but no detailed analysis
- **Result:** Primary D, High confidence

### Example 2: High Influence (I)
**Transcript excerpt:**
> "Oh my gosh, I'm so excited about this project! This is going to be amazing, everyone. I was just telling Sarah yesterday about how incredible this team is. Wouldn't it be great if we could get everyone from the other departments involved too? By the way, did anyone see that presentation last week? It was so inspiring!"

**Analysis:**
- **D Score: 20** — Minimal directness
- **I Score: 90** — Exclamations ("Oh my gosh!"), positive emotion words ("excited," "amazing," "incredible," "inspiring"), storytelling ("I was just telling Sarah"), name-dropping, tangents, collaborative vision
- **S Score: 45** — Some team focus, inclusive language
- **C Score: 0** — No data, no analysis, no caution
- **Result:** Primary I, Secondary S possible, High confidence

### Example 3: High Conscientiousness (C)
**Transcript excerpt:**
> "Before we proceed, I'd like to review the data from the last quarter to ensure we're making an evidence-based decision. The analysis shows three potential risks we need to consider. Specifically, if we choose option B, we need to account for the 15% variance in the projections. What's the rationale behind prioritizing speed over accuracy here?"

**Analysis:**
- **D Score: 20** — Some directness but questioning, not commanding
- **I Score: 0** — No enthusiasm, no social focus
- **S Score: 20** — Wants team consideration but focused on process, not harmony
- **C Score: 90** — Data references, evidence-based language, risk analysis, precision ("15% variance," "specifically"), questioning rationale, formal register
- **Result:** Primary C, High confidence

---

## Validity Checks

### Minimum Data Threshold
- **Ideal:** 350+ words for reliable assessment
- **Minimum:** 150 words for tentative assessment
- **Below 150 words:** Flag as "Insufficient data for reliable assessment"

### Social Desirability Bias (SDB) Awareness
Watch for signs the speaker may be managing their image:
- Over-reporting benevolence or team-focus (inflated S signals)
- Vague, non-committal responses that avoid specifics (paltering)
- Vocabulary mismatches (overly formal words that seem coached)
- Heavy use of "Ethics" or "Values" language without specific examples

If SDB is suspected, weight behavioral patterns (sentence structure, pace) more heavily than vocabulary choices.

### Context Adjustment
Consider context when interpreting indicators:
- **Formal settings** (executive presentations): May inflate C/D signals
- **Casual settings** (team chat): May inflate I/S signals
- **High-stress situations:** Can amplify D or mask S
- **Role-specific:** A facilitator may show S behaviors regardless of natural style

Note the context in your assessment if it may be affecting the results.

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

---

## Common Blends

| Blend | Core Characteristics | Linguistic Signature |
|-------|---------------------|----------------------|
| **Di / iD** | Active, dynamic, bold leaders | Direct commands + enthusiasm |
| **iS / Si** | Warm, supportive, relationship-builders | Positive affect + consensus-seeking |
| **SC / CS** | Careful, modest, quality-focused | Hedging + precision language |
| **DC / CD** | Questioning, skeptical, results-driven | Direct + analytical |
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
    secondary?: DISCDimension;
    scores: DISCScore;
    summary: string;
  };
  detailed_breakdown: DetailedBreakdown[];
  recommendations: string[];
  confidence: 'high' | 'medium' | 'low';
}
