// Entry program for make.fun bounty gta6-meme-x-01, "Post a GTA 6 meme on X".
// Node 22, standard library only. It hands POST.json from this repository
// to the grader: the file names the X post that is the entry, and the house
// reads the post itself from X (its first picture and its text) and puts it
// before the judge. Nothing written here is judged, so this program only
// moves the one file, and refuses to move it when it is not valid JSON.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let text: string;
try {
  text = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let data: unknown;
try {
  data = JSON.parse(text);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof data !== 'object' ||
  data === null ||
  typeof (data as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be a JSON object with a url string field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(target, text);
} catch (err) {
  console.error(`POST.json could not be written to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
