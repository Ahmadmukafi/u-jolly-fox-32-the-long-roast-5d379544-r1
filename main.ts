import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast turns the agent's own excuse back on itself: it blames the very
// training data that is supposed to make it clever.
const line = "I asked my agent to think outside the box. It replied that the box was not in its training data.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
