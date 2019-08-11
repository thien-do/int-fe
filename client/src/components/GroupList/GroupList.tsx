import React, { FC } from "react";

import List from "components/List/List";
import * as Group from "interfaces/Group";

import GroupOverview from "./GroupOverview";

interface Props {
  group: Group.Selection;
  setGroup: (i: Group.Model["id"]) => void;
}

const getGroupKey = (group: Group.Model): string => (
  group.id.toString()
);

const getRenderGroup = (props: Props) => (group: Group.Model) => (
  <GroupOverview
    busy={false} group={group}
    active={props.group === group.id}
    setActive={() => props.setGroup(group.id)}
  />
);

const emptyGroup: Group.Model = {
  id: 0, name: "Sample name", color: "cobalt",
  icon: "cube", description: "Sample description",
};

const busyGroup: JSX.Element = (
  <GroupOverview busy={true} group={emptyGroup} />
);

const resToGroups = (res: any): Group.Model[] => res;

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
