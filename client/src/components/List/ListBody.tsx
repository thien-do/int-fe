import React from "react";

import styles from "./ListBody.module.scss";
import { NonIdealState } from "@blueprintjs/core";

export const defaultLimit = 20;

interface Props<T> {
  busy: boolean;
  search: boolean;
  items: T[];
  getItemKey: (t: T) => string;
  renderItem: (t: T) => JSX.Element;
  busyItemElement: JSX.Element;
}

const Busy: <T>(props: Props<T>) => JSX.Element = (props) => (
  <div>
    {Array(defaultLimit).fill(0).map((v, index) => (
      <div className={styles.item} key={index}>{props.busyItemElement}</div>
    ))}
  </div>
);

// @TODO: Support more cases
const Empty: <T>(props: Props<T>) => JSX.Element = ({ search }) => (
  <NonIdealState
    title={search ? "No search results" : "No group yet"}
    description={search
      ? "Try searching for something else."
      : "Click \"Create new group\" to start."}
  />
);

const Normal: <T>(props: Props<T>) => JSX.Element = (props) => (
  <div>
    {props.items.map((item) => (
      <div className={styles.item} key={props.getItemKey(item)}>
        {props.renderItem(item)}
      </div>
    ))}
  </div>
);

const ListBody: <T>(props: Props<T>) => JSX.Element = (props) => {
  if (props.busy) { return <Busy {...props} />; }
  else if (props.items.length === 0) { return <Empty {...props} />; }
  else { return <Normal {...props} />; }
};

export default ListBody;
