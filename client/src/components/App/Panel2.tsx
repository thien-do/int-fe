import React, { FC } from "react";

import UserList from "components/UserList/UserList";

import styles from "./Panel1.module.scss";
import { UserSelection, GroupSelection } from "./App";

interface Props {
  group: GroupSelection;
  user: UserSelection;
  setUser: (g: UserSelection) => void;
}

const Panel2: FC<Props> = ({ user, setUser, group }) => (
  <div className={styles.main}>
    <div className={styles.header}>
      Header
    </div>
    <div className={styles.body}>
      <UserList group={group} user={user} setUser={setUser} />
    </div>
  </div>
);

export default Panel2;
