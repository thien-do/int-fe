import { IconName } from "@blueprintjs/core";

export interface Model {
  id: number;
  name: string;
  color: string;
  icon: IconName;
  description: string;
}

// @TODO: Support "none"
export type Selection = Model["id"] | "all" | "new";