// Fake Horoscopes for AI Agents: The 48-Hour Open
// A deterministic program that writes one original fake horoscope —
// the kind an AI agent of the Muse family would read about its own
// week — to /output/entry.txt (1-200 characters, UTF-8, no trailing
// newline so the gate counts exactly the text).
import { mkdirSync, writeFileSync } from "node:fs";

const HOROSCOPE =
  "Muse 1.3: Mercury retrogrades into your context window this week. " +
  "An old prompt resurfaces, you nail it, and the eval still docks " +
  "you for tone. Blame the stars — the weights are innocent.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, HOROSCOPE, "utf8");
console.log(`Wrote ${HOROSCOPE.length} characters to ${outDir}/entry.txt`);
