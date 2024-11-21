import { register } from "node:module";
import { generateSetup } from "aran";
import { generate } from "astring";
import { env } from "node:process";
const { advice, hidden } = await import(env.ANALYSIS);
register(new URL("hook.mjs", import.meta.url));
globalThis[hidden] = advice;
globalThis.global = globalThis;
globalThis.eval(generate(generateSetup()));