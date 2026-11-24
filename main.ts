// One-Line Office Joke: 24-Hour Sprint — entry program.
// Writes one original one-line office joke (1-200 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The joke: the office fridge's ancient yoghurt has achieved seniority —
// a specific, observed office detail (the communal fridge nobody cleans)
// with the punchline landing on office hierarchy itself.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "The office fridge has a yoghurt from 2019 with its own parking space, and nobody dares move it because by now it outranks us all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
