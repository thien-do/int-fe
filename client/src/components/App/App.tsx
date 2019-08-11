import React, { useState } from "react";

import { Group } from "components/GroupList/GroupList";
import { User } from "components/UserList/UserList";

import styles from "./App.module.scss";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";

// @TODO: Support "none"
export type GroupSelection = Group["id"] | "all" | "new";
export type UserSelection = User["id"] | "new" | null;

const App = () => {

  const [group, setGroup] = useState<GroupSelection>("all")
  const [user, setUser] = useState<UserSelection>(null)

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
