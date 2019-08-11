import React, { useState } from "react";

import { Group } from "components/GroupList/GroupList";

import styles from "./App.module.scss";
import Panel1 from "./Panel1";

// @TODO: Support "none"
export type GroupSelection = Group["id"] | "all" | "new";

const App = () => {

  const [group, setGroup] = useState<GroupSelection>("all")

  return (
    <div className={styles.main}>
      <div className={styles.panel1}>
        <Panel1 group={group} setGroup={setGroup} />
      </div>
      <div className={styles.panel2}>
        Group detail
        {group === null ? "null" : group}
      </div>
      <div className={styles.panel3}> User detail </div>
    </div>
  );
};

export default App;
