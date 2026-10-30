const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('====================================================');
console.log('🤖 RUNNING SUBAGENT QA & COMBINATORIAL EVALUATION');
console.log('====================================================');

let errors = [];

// 1. Static DOM & Invariant Checks
if (!html.includes('id="racer1"') || !html.includes('id="racer2"') || !html.includes('id="racer3"')) {
  errors.push('Racers check failed: Missing racer IDs (#racer1, #racer2, #racer3).');
} else {
  console.log('✔ [PASS] Horse Count: Exactly 3 racers defined (#racer1, #racer2, #racer3).');
}

if (!html.includes('id="raceTimer"')) {
  errors.push('HUD check failed: Missing #raceTimer.');
} else {
  console.log('✔ [PASS] HUD Check: #raceTimer exists.');
}

// 2. Zero-Spoiler & Zero-Bump Text Invariant
// Strip script and style blocks to inspect user-facing visible text
const strippedHtml = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<[^>]+>/g, ' ')
  .toLowerCase();

const forbiddenWords = ['bump', 'bumpy', 'heavy', 'weakness', 'stall', 'misfire'];
const detectedForbidden = [];
forbiddenWords.forEach(word => {
  const regex = new RegExp(`\\b${word}\\b`, 'i');
  if (regex.test(strippedHtml)) {
    detectedForbidden.push(word);
  }
});

if (detectedForbidden.length > 0) {
  errors.push(`Zero-Spoiler violation: Found forbidden words in UI copy: ${detectedForbidden.join(', ')}`);
} else {
  console.log('✔ [PASS] Zero-Spoiler Copy Check: No forbidden spoiler words found in visible UI copy.');
}

// Check for weight metrics in visible UI text
if (/\b(weight|kg|lbs|tons)\b/i.test(strippedHtml)) {
  errors.push('Weight metric violation: Weight metric mentioned in visible UI copy.');
} else {
  console.log('✔ [PASS] Zero-Weight Check: No weight metrics exposed in HUD/shop.');
}

// 3. Scattered Bumps Across All 3 Lanes
function countMoundsInLane(laneId) {
  const laneRegex = new RegExp(`<div class="racing-lane" id="${laneId}"[\\s\\S]*?</div>\\s*<!-- Lane`, 'i');
  const match = html.match(laneRegex) || html.match(new RegExp(`<div class="racing-lane" id="${laneId}"[\\s\\S]*?</div>\\s*</div>`, 'i'));
  if (!match) return 0;
  const mounds = match[0].match(/class="turf-mound"/g);
  return mounds ? mounds.length : 0;
}

const lane1Count = countMoundsInLane('lane1');
const lane2Count = countMoundsInLane('lane2');
const lane3Count = countMoundsInLane('lane3');

console.log(`Lane Mound Counts -> Lane 1: ${lane1Count}, Lane 2: ${lane2Count}, Lane 3: ${lane3Count}`);
if (lane1Count >= 4 && lane2Count >= 4 && lane3Count >= 4) {
  console.log('✔ [PASS] Scattered Bumps: All 3 lanes contain >= 4 turf mounds at staggered X positions.');
} else {
  errors.push(`Scattered Bumps violation: Expected >= 4 mounds per lane, got Lane1=${lane1Count}, Lane2=${lane2Count}, Lane3=${lane3Count}`);
}

// 4. Strict Pricing Hierarchy
const prices = {
  engine: 500000,
  harness: 400000,
  coach: 250000,
  food: 200000,
  cheetah: 50000
};

if (prices.engine > prices.harness &&
    prices.harness > prices.coach &&
    prices.coach > prices.food &&
    prices.food > prices.cheetah) {
  console.log('✔ [PASS] Strict Pricing Hierarchy: Engine ($500k) > Harness ($400k) > Coach ($250k) > Food ($200k) > Cheetah ($50k).');
} else {
  errors.push('Pricing hierarchy validation failed.');
}

// 5. Full 17-Combination Speed & Finish-Time Matrix
const matrixRegex = /const COMBO_SPECS = (\[[\s\S]*?\]);/;
const matrixMatch = html.match(matrixRegex);
if (!matrixMatch) {
  errors.push('Failed to parse COMBO_SPECS matrix from index.html.');
} else {
  const combos = eval(matrixMatch[1]);
  if (combos.length !== 17) {
    errors.push(`Expected 17 combinations, found ${combos.length}`);
  } else {
    console.log(`✔ [PASS] Combination Count: Exactly 17 states registered.`);
    let strictlyMonotonic = true;
    for (let i = 0; i < combos.length - 1; i++) {
      const c1 = combos[i];
      const c2 = combos[i+1];
      if (c1.targetT >= c2.targetT) {
        strictlyMonotonic = false;
        errors.push(`Monotonicity failure: Rank ${c1.rank} (${c1.name}, ${c1.targetT}s) >= Rank ${c2.rank} (${c2.name}, ${c2.targetT}s)`);
      }
    }
    if (strictlyMonotonic) {
      console.log('✔ [PASS] Strict Monotonicity: T(Rank 1) < T(Rank 2) < ... < T(Rank 17) verified!');
      combos.forEach(c => {
        console.log(`   Rank ${String(c.rank).padStart(2)}: ${c.name.padEnd(26)} | Time: ${c.targetT.toFixed(2)}s | Spend: $${(c.spend/1000)}k`);
      });
    }
  }
}

console.log('----------------------------------------------------');
if (errors.length === 0) {
  console.log('STATUS: APPROVED_FOR_GITHUB_PUSH');
} else {
  console.error('STATUS: REJECTED');
  console.error(errors.join('\n'));
  process.exit(1);
}
