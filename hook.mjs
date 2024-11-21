import { instrument } from "aran";
import { parse } from "acorn";
import { generate } from "astring";
import { readFile } from "node:fs/promises";
import { env } from "node:process";
import { fileURLToPath } from "node:url";

const { hidden, pointcut } = await import(env.ANALYSIS);

export const load = async (url, ctx, nxt) => {
  if (!url.startsWith("file://"))
    return nxt(url, ctx);
  return ({
    shortCircuit: true,
    format: "module",
    source: generate(
      instrument(
        {
          kind: "module",
          path: url.split("/").pop(),
          root: parse(
            await readFile(fileURLToPath(url), "utf8"),
            { sourceType: "module", ecmaVersion: "latest" },
          ),
        },
        {
          advice_variable: hidden,
          standard_pointcut: pointcut,
          initial_state: null,
        },
      ),
    ),
  });
};