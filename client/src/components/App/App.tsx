import React, { useState } from "react";

import * as Group from "interfaces/Group";
import * as User from "interfaces/User";

import styles from "./App.module.scss";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";

const App = () => {

  const [group, setGroup] = useState<Group.Selection>("all")
  const [user, setUser] = useState<User.Selection>(null)

  return (
    <div className={styles.main}>
      <div className={styles.panel1}>
        <Panel1 group={group} setGroup={setGroup} />
      </div>
      <div className={styles.panel2}>
        <Panel2 group={group} user={user} setUser={setUser} />
      </div>
      <div className={styles.panel3}>
        {user && user.toString()}
      </div>
    </div>
  );
};

export default App;
