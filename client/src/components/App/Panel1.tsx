import React, { FC } from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";

import GroupList from "components/GroupList/GroupList";
import * as Group from "interfaces/Group";

import styles from "./Panel1.module.scss";
import Divider from "./Divider/Divider";

interface Props {
  group: Group.Selection;
  setGroup: (g: Group.Selection) => void;
}

const Panel1: FC<Props> = ({ group, setGroup }) => (
  <div className={styles.main}>
    <div className={styles.header}>
      <ButtonGroup fill>
        <Button
          fill active={group === "all"}
          text="All groups" onClick={() => { setGroup("all"); }}
        />
        <Button
          fill active={group === "new"} icon="folder-new"
          text="Create new group" onClick={() => { setGroup("new"); }}
        />
      </ButtonGroup>
    </div>
    <Divider>or select a group to view detail:</Divider>
    <div className={styles.body}>
      <GroupList group={group} setGroup={setGroup} />
    </div>
  </div>
);

export default Panel1;
