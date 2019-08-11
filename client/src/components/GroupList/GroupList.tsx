import React, { FC } from "react";

import { IconName } from "@blueprintjs/core";
import List from "components/List/List";

import GroupOverview from "./GroupOverview"
import { GroupSelection } from "components/App/App";

export interface Group {
  id: number;
  name: string;
  color: string;
  icon: IconName;
  description: string;
}

interface Props {
  group: GroupSelection;
  setGroup: (i: Group["id"]) => void;
}

const getGroupKey = (group: Group): string => (
  group.id.toString()
);

const getRenderGroup = (props: Props) => (group: Group) => (
  <GroupOverview
    busy={false} group={group}
    active={props.group === group.id}
    setActive={() => props.setGroup(group.id)}
  />
);

const emptyGroup: Group = {
  id: 0, name: "Sample name", color: "",
  icon: "cube", description: "Sample description",
};

const busyGroup: JSX.Element = (
  <GroupOverview busy={true} group={emptyGroup} />
);

const resToGroups = (res: any): Group[] => res;

const GroupList: FC<Props> = (props) => (
  <List
    reqPath="groups"
    resToItems={resToGroups}
    // ===
    getItemKey={getGroupKey}
    renderItem={getRenderGroup(props)}
    busyItemElement={busyGroup}
    // ===
    searchPlaceholder="Search groups…"
  />
);

export default GroupList;
