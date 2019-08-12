import React, { FC } from "react";
import { Text, Icon, Classes } from "@blueprintjs/core";

import * as Group from "interfaces/Group";
import getColorValue from "utils/group/getColorValue";

import styles from "./GroupOverview.module.scss";

interface Props {
  busy: boolean;
  group: Group.Model;
  active?: boolean;
  setActive?: () => void;
}

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
        <Icon color={getColorValue(group.color)} icon="folder-close" />
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
