import React from "react";

import styles from "./App.module.scss";
import Groups from "components/Groups/Groups";

const App = () => (
  <div className={styles.main}>
    <div className={`${styles.panel} ${styles.groupList}`}>
      <Groups />
    </div>
    <div className={`${styles.panel} ${styles.groupDetail}`}>
      Group detail
    </div>
    <div className={`${styles.panel} ${styles.userDetail}`}>
      User detail
    </div>
  </div>
);

export default App;
