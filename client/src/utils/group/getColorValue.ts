import { Colors } from "@blueprintjs/core";

import * as Group from "interfaces/Group";

// @TODO: use blueprint map directly
const colorMap: { [index: string]: string } = {
  "vermilion": Colors.VERMILION3,
  "rose": Colors.ROSE3,
  "violet": Colors.VIOLET3,
  "indigo": Colors.INDIGO3,
  "cobalt": Colors.COBALT3,
  "turquoise": Colors.TURQUOISE3,
  "forest": Colors.FOREST3,
  "lime": Colors.LIME3,
  "gold": Colors.GOLD3,
  "sepia": Colors.SEPIA3,
};

const getColorValue = (key: Group.Model["color"]) => (
  colorMap[key]
);

export default getColorValue;