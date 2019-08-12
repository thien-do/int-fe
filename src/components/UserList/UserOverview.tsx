import React, { FC } from "react";
import { Text, Classes } from "@blueprintjs/core";

import * as User from "interfaces/User";

import styles from "./UserOverview.module.scss";

interface Props {
  busy: boolean;
  user: User.Model;
  active?: boolean;
  setActive?: () => void;
}

const UserOverview: FC<Props> = ({
  active = false,
  setActive,
  busy,
  user
}) => {
  const withSkeleton = (style: string) => `${style} ${busy && Classes.SKELETON}`;
  return (
    <div
      className={[
        styles.main,
        active ? styles.mainActive : ""
      ].join(" ")}
      onClick={setActive}
    >
      <img
        className={withSkeleton(styles.avatar)}
        src={user.avatar} width={24} height={24} alt={user.name}
      />
      <Text className={withSkeleton(styles.info)} ellipsize={true}>
        <span className={styles.name}>{user.name}</span>
        <span> – </span> {/* Typography FTW */}
        <span className={styles.email}>{user.email}</span>
      </Text>
    </div>
  );
};

export default UserOverview;
