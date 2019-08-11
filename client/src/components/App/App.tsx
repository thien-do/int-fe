import React, { useState } from "react";

import styles from "./App.module.scss";
import GroupList, { Group } from "components/GroupList/GroupList";
import { Button, Text } from "@blueprintjs/core";

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
        <div className={styles.groupListText}>
          <Text>or select a group to view detail:</Text>
        </div>
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
