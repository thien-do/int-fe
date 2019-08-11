import React, { useState } from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";

import GroupList, { Group } from "components/GroupList/GroupList";

import styles from "./App.module.scss";
import Divider from "./Divider/Divider";

// @TODO: Support "none"
export type GroupSelection = Group["id"] | "all" | "new";

const App = () => {

  const [group, setGroup] = useState<GroupSelection>("all")

  return (
    <div className={styles.main}>
      <div className={styles.panel1}>
        <div className={styles.box}>
          <ButtonGroup fill>
            <Button
              fill active={group === "all"} text="All groups"
              onClick={() => { setGroup("all"); }}
            />
            <Button
              fill active={group === "new"} text="Create new group"
              onClick={() => { setGroup("new"); }}
            />
          </ButtonGroup>
        </div>
        <Divider>or select a group to view detail:</Divider>
        <div className={styles.groupList}>
          <GroupList group={group} setGroup={setGroup} />
        </div>
      </div>
      <div className={styles.panel2}>
        Group detail
        {group === null ? "null" : group}
      </div>
      <div className={styles.panel3}>
        User detail
    </div>
    </div>
  );
};

export default App;
