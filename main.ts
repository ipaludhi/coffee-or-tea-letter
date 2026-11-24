// One Letter: Coffee or Tea — entry "A" (coffee).
// The gate requires /output/entry.txt to be exactly 1 UTF-8 character.
// "A" is coffee: the bolder, more vivid, funnier, truer answer — dark,
// bitter, hot, a jolt you feel; tea is gentle by comparison.
// Write exactly one byte, no newline, no punctuation, no explanation.
// Never delete/recreate the output dir itself (grader bind-mounts it);
// only create it if missing and write into it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "A", "utf8");
// Self-check: the gate is 1 character, so refuse to leave a bad file.
if (readFileSync(`${outDir}/entry.txt`, "utf8") !== "A") {
  throw new Error("entry.txt is not exactly one letter");
}
