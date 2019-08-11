import React, { FC, useState } from "react";
import { H4, ButtonGroup, Button } from "@blueprintjs/core";

import UserList from "components/UserList/UserList";
import GroupDetail from "components/GroupDetail/GroupDetail";

import * as Group from "interfaces/Group";
import * as User from "interfaces/User";

import styles from "./Panel2.module.scss"

interface Props {
  group: Group.Selection;
  setGroup: (g: Group.Selection) => void;
  user: User.Selection;
  setUser: (g: User.Selection) => void;
}

interface TabProps extends Props {
  tab: string;
  setTab: (s: string) => void;
}

const Header: FC<TabProps> = ({ tab, setTab, group, user, setUser }) => (
  <div className={styles.header}>
    {typeof group === "number" && (
      <div className={styles.headerTabs}>
        <ButtonGroup fill>
          <Button
            fill active={tab === "info"} icon="info-sign"
            text="Info" onClick={() => { setTab("info"); }}
          />
          <Button
            fill active={tab === "users"} icon="people"
            text="Users" onClick={() => { setTab("users"); }}
          />
        </ButtonGroup>
      </div>
    )}
    <div className={styles.headerNew}>
      <Button
        fill active={user === "new"} icon="new-person" text="Create user"
        onClick={() => { setUser(user === "new" ? null : "new"); }}
      />
    </div>
  </div>
);

const TabUsers: FC<TabProps> = ({ group, user, setUser }) => (
  <UserList group={group} user={user} setUser={setUser} />
);

const TabInfo: FC<TabProps> = ({ group, setGroup }) => (
  <div className={styles.info}>
    <GroupDetail id={group} cancel={() => { setGroup("all"); }} />
  </div>
);

const Body: FC<TabProps> = (props) => {
  if (props.group === "all") { return <TabUsers {...props} />; }
  if (props.group === "new") { return <TabInfo {...props} />; }
  // I'm a little lazy here, should have a dictionary
  if (props.tab === "users") { return <TabUsers {...props} />; }
  else { return <TabInfo {...props} />; }

};

const Panel2: FC<Props> = (props) => {
  const [tab, setTab] = useState("info");

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <H4>Group detail</H4>
      </div>
      {props.group !== "new" && (
        <Header {...props} tab={tab} setTab={setTab} />
      )}
      <div className={styles.body}>
        <Body
          key={props.group}
          {...props} tab={tab} setTab={setTab}
        />
      </div>
    </div>
  );
};

export default Panel2;
