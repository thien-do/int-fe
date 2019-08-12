export interface Model {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export type Selection = Model["id"] | "new" | null;