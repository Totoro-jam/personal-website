import type { UIStrings } from "./types";

export { tplStr } from "./format";

import zh from "./lang/zh";

/** Returns Chinese UI strings. Single-language site, no locale switching. */
export function useTranslations(_locale?: string): UIStrings {
  return zh;
}
