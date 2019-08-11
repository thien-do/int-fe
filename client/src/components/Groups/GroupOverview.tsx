import React, { FC }  from "react";
import { Text } from "@blueprintjs/core"

import styles from "./GroupOverview.module.scss";

export interface Group {
  id: number;
  name: string;
  color: string;
  description: string;
}

interface Props {
  group: Group;
}

const GroupOverview: FC<Props> = ({ group }) => (
  <div className={styles.main}>
    <Text className={styles.name}>{group.name}</Text>
    <Text className={styles.description} ellipsize={true}>{group.description}</Text>
  </div>
);

export default GroupOverview;
