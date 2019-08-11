import React, { FC } from "react";

import UserDetail from "components/UserDetail/UserDetail";
import * as User from "interfaces/User";

import styles from "./Panel3.module.scss";

interface Props {
  user: User.Selection;
}

const Panel3: FC<Props> = ({ user }) => (
  <div className={styles.main}>
    {user && <UserDetail key={user} id={user} />}
  </div>
);

export default Panel3;
