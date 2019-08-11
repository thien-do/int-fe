import React, { FC } from "react";
import { Text } from "@blueprintjs/core";

import styles from "./Divider.module.scss";

interface Props {
  children?: string
}

const Divider: FC<Props> = ({ children }) => (
  <div className={styles.main}>
    <div className={styles.line} />
    {children && (
      <Text className={styles.text}>{children}</Text>
    )}
    <div className={styles.line} />
  </div>
);

export default Divider;
