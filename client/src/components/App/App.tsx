import React, { useState } from "react";

import styles from "./App.module.scss";
import Groups, { Group } from "components/Groups/Groups";

const App = () => {
  const [group, setGroup] = useState<Group | null>(null)
  return (
    <div className={styles.main}>
      <div className={`${styles.panel} ${styles.groupList}`}>
        <Groups group={group} setGroup={setGroup} />
      </div>
      <div className={`${styles.panel} ${styles.groupDetail}`}>
        Group detail
        {group && group.id}
    </div>
      <div className={`${styles.panel} ${styles.userDetail}`}>
        User detail
    </div>
    </div>
  );
};

export default App;
