import { create } from "zustand";

export type Belonging = "internal" | "external";

export const DIMENSIONS = [
  { key: "minima", label: "Minima", radius: 15 },
  { key: "marginale", label: "Marginale", radius: 25 },
  { key: "secondaria", label: "Secondaria", radius: 40 },
  { key: "intermedia", label: "Intermedia", radius: 50 },
  { key: "importante", label: "Importante", radius: 60 },
  { key: "primaria", label: "Primaria", radius: 70 },
  { key: "centrale", label: "Centrale", radius: 85 },
] as const;

export type DimensionKey = (typeof DIMENSIONS)[number]["key"];

export interface IPosition {
  id: string;
  label: string;
  belonging: Belonging;
  dimension: DimensionKey;
  radius: number;
}

export type Context =
  | "home"
  | "workplace"
  | "workplace_common";

interface ResearchState {
  consent: boolean;
  participantId: string;
  context: Context | "";
  startedAt: number | null;
  positions: IPosition[];
  setConsent: (v: boolean) => void;
  setParticipantId: (v: string) => void;
  setContext: (v: Context) => void;
  startSession: () => void;
  addPosition: (p: Omit<IPosition, "id">) => void;
  removePosition: (id: string) => void;
}

export const useResearchStore = create<ResearchState>((set) => ({
  consent: false,
  participantId: "",
  context: "",
  startedAt: null,
  positions: [],
  setConsent: (v) => set({ consent: v }),
  setParticipantId: (v) => set({ participantId: v }),
  setContext: (v) => set({ context: v }),
  startSession: () => set((s) => ({ startedAt: s.startedAt ?? Date.now() })),
  addPosition: (p) =>
    set((s) => ({
      positions: [
        ...s.positions,
        { ...p, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` },
      ],
    })),
  removePosition: (id) =>
    set((s) => ({ positions: s.positions.filter((x) => x.id !== id) })),
}));
