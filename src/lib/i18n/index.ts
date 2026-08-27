import { en } from "./en";
import { pt } from "./pt";

export type Lang = "en" | "pt";
export type Dict = typeof en;

export const dicts: Record<Lang, Dict> = { en, pt };
