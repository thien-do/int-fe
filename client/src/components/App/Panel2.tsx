import React, { FC } from "react";

import UserList from "components/UserList/UserList";
import GroupDetail from "components/GroupDetail/GroupDetail";

import * as Group from "interfaces/Group";
import * as User from "interfaces/User";

import styles from "./Panel1.module.scss";

interface Props {
  group: Group.Selection;
  user: User.Selection;
  setUser: (g: User.Selection) => void;
}

const Panel2: FC<Props> = ({ user, setUser, group }) => (
  <div className={styles.main}>
    {group !== "all" && (
      <div className={styles.header}>
        <GroupDetail id={group} />
      </div>
    )}
    {group !== "new" && (
      <div className={styles.body}>
        <UserList group={group} user={user} setUser={setUser} />
      </div>
    )}
  </div>
);

export default Panel2;
