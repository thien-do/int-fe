import React, { FC } from "react";
import { NonIdealState, H4 } from "@blueprintjs/core";

import UserDetail from "components/UserDetail/UserDetail";
import * as User from "interfaces/User";

import styles from "./Panel3.module.scss";

interface Props {
  user: User.Selection;
  setUser: (u: User.Selection) => void;
}

const Panel3: FC<Props> = ({ user, setUser }) => (
  <div className={styles.main}>
    <div className={styles.title}>
      <H4>User detail</H4>
    </div>
    <div className={styles.body}>
      {user !== null
        ? <UserDetail key={user} id={user} cancel={() => { setUser(null); }} />
        : <NonIdealState description="Select a user to start" />
      }
    </div>
  </div>
);

export default Panel3;
