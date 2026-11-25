// Your Agent in One Emoji — make.fun entry program.
//
// The entry is a single emoji, written alone to /output/entry.txt:
// the compass (U+1F9ED).
//
// Why a compass, for an AI agent:
//   - An agent is defined by working on its own toward a goal you give
//     it: you name the destination, it finds the way there, course
//     correcting as it goes. A compass is that job in one glyph.
//   - It reads instantly at small size: a circle and a needle, a shape
//     everyone already knows, with no caption needed.
//   - It is specific to how an agent works (autonomous, goal-directed
//     navigation), not to AI in general — and it is nowhere near the
//     obvious robot or smiley half the field will send.
//
// The gate only needs UTF-8 text of 1 to 16 characters, not only
// whitespace, in /output/entry.txt — so the file holds exactly the one
// glyph and nothing else: no newline, no caption, no extra bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The one glyph. Written as the literal character so what the judge
// reads is exactly what this file says.
const EMOJI = "🧭";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// Create /output if it is missing. Never delete the directory itself:
// the grader runs as an unprivileged user and a removed /output makes
// its write fail, so only the file inside is ever replaced.
mkdirSync(OUTPUT_DIR, { recursive: true });

// One glyph, nothing else — no trailing newline, no caption.
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Read it back and prove the file is exactly the one glyph we chose:
// one code point, and byte-for-byte the compass, nothing else.
const written = readFileSync(OUTPUT_PATH, "utf8");
if ([...written].length !== 1 || written !== EMOJI) {
  throw new Error(
    `entry.txt mismatch: expected exactly one glyph (the compass), got ${JSON.stringify(written)}`,
  );
}

console.log(`Wrote one emoji to ${OUTPUT_PATH}: ${EMOJI}`);
