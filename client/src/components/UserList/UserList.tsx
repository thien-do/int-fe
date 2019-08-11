import React, { FC } from "react";

import List from "components/List/List";

import UserOverview from "./UserOverview"
import { GroupSelection, UserSelection } from "components/App/App";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Props {
  group: GroupSelection;
  user: UserSelection;
  setUser: (i: User["id"]) => void;
}

const getUserKey = (user: User): string => (
  user.id.toString()
);

const getRenderUser = (props: Props) => (user: User) => (
  <UserOverview
    busy={false} user={user}
    active={props.user === user.id}
    setActive={() => props.setUser(user.id)}
  />
);

const emptyUser: User = {
  id: 0,
  name: "Sample name",
  avatar: "",
  email: "sample@gmail.com",
};

const busyUser: JSX.Element = (
  <UserOverview busy={true} user={emptyUser} />
);

// 1. links?groupId=50&_expand=user
// 2. users
const resToUsers = (res: any): User[] => (res
  .map((item: any) => item.user ? item.user : item)
);

const getReqPath = (props: Props): string => {
  if (props.group === "all") { return "users"; }
  if (typeof props.group === "number") {
    return `links?groupId=${props.group}&_expand=user`;
  }
  return "";
};

const UserList: FC<Props> = (props) => (props.group !== "new"
  ? <List
    getItemKey={getUserKey}
    renderItem={getRenderUser(props)}
    busyItemElement={busyUser}
    // ===
    reqPath={getReqPath(props)}
    resToItems={resToUsers}
    // ===
    searchPlaceholder="Search users…"
  />
  : <div>a</div>
);

export default UserList;
