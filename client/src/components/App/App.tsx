import React, { useState } from "react";
import { Button } from "@blueprintjs/core";

import GroupList, { Group } from "components/GroupList/GroupList";

import styles from "./App.module.scss";
import Divider from "./Divider/Divider";

const App = () => {
  const [group, setGroup] = useState<Group["id"] | null>(null)
  return (
    <div className={styles.main}>
      <div className={styles.panel1}>
        <div className={styles.all}>
          <Button
            fill active={group === null}
            text="View all users"
            onClick={() => { setGroup(null); }}
          />
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
