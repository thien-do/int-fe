import React, { FC } from "react";

import List from "components/List/List";

import GroupOverview, { Group } from "./GroupOverview"
import styles from "./Groups.module.scss";

const getGroupKey = (group: Group): string => (
  group.id.toString()
);

const renderGroup = (group: Group): JSX.Element => (
  <GroupOverview group={group} />
);

const Groups: FC = () => (
  <div className={styles.main}>
    <List
      requestPath="groups"
      getItemKey={getGroupKey}
      renderItem={renderGroup}
    />
  </div>
);

export default Groups;
