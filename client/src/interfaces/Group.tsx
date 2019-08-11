import { IconName } from "@blueprintjs/core";

type Colors =
  "vermilion" | "rose" | "violet" | "indigo" | "cobalt" |
  "turquoise" | "forest" | "lime" | "gold" | "sepia";

export interface Model {
  id: number;
  name: string;
  color: Colors;
  icon: IconName;
  description: string;
}

// @TODO: Support "none"
export type Selection = Model["id"] | "all" | "new";