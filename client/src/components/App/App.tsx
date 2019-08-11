import React, { useState } from "react";

import styles from "./App.module.scss";
import Groups, { Group } from "components/GroupList/GroupList";

const App = () => {
  const [group, setGroup] = useState<Group["id"] | null>(null)
  return (
    <div className={styles.main}>
      <div className={`${styles.panel} ${styles.groupList}`}>
        <Groups group={group} setGroup={setGroup} />
      </div>
      <div className={`${styles.panel} ${styles.groupDetail}`}>
        Group detail
        {group === null ? "null" : group}
    </div>
      <div className={`${styles.panel} ${styles.userDetail}`}>
        User detail
    </div>
    </div>
  );
};

export default App;
