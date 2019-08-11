import React, { FC } from "react";
import { Text, Icon, Colors, Classes } from "@blueprintjs/core";

import styles from "./GroupOverview.module.scss";
import { Group } from "./GroupList";

interface Props {
  busy: boolean;
  group: Group;
  active?: boolean;
  setActive?: () => void;
}

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

const GroupOverview: FC<Props> = ({
  active = false,
  setActive,
  busy,
  group
}) => {
  const withSkeleton = (style: string) => `${style} ${busy && Classes.SKELETON}`;
  return (
    <div
      className={[
        styles.main,
        active ? styles.mainActive : ""
      ].join(" ")}
      onClick={setActive}
    >
      <div className={withSkeleton(styles.icon)}>
        <Icon color={colorMap[group.color]} icon={group.icon} />
      </div>
      <div className={styles.body}>
        <Text className={withSkeleton(styles.name)}>{group.name}</Text>
        <Text className={withSkeleton(styles.description)} ellipsize={true}>
          {group.description}
        </Text>
      </div>
    </div>
  );
};

export default GroupOverview;
