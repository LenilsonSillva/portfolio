import { en } from "./en";
import { ptBR } from "./ptBR";
import { ptPT } from "./pt";

export type Lang = "en" | "pt-BR" | "pt-PT";
export type Dict = typeof en;

export const dicts: Record<Lang, Dict> = {
  en,
  "pt-BR": ptBR,
  "pt-PT": ptPT,
};
