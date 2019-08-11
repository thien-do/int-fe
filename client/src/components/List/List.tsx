import React, { useState, useEffect } from "react";
import request from "utils/api/request";

import styles from "./List.module.scss";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";

const defaultLimit = 20;

interface Props<T> {
  requestPath: string;

  getItemKey: (t: T) => string;
  renderItem: (t: T) => JSX.Element;
  busyItemElement: JSX.Element;
}

const renderBusy = (elm: JSX.Element): JSX.Element => (
  <div className={styles.body}>
    {Array(defaultLimit).fill(0).map((v, index) => (
      <div className={styles.item} key={index}>{elm}</div>
    ))}
  </div>
);

function renderList<T>(items: T[], props: Props<T>): JSX.Element {
  return (
    <div className={styles.body}>
      {items.map((item) => (
        <div className={styles.item} key={props.getItemKey(item)}>
          {props.renderItem(item)}
        </div>
      ))}
    </div>
  );
}

function List<T>(props: Props<T>): JSX.Element {
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState<T[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setBusy(true);
    request<T[]>({
      path: props.requestPath,
      page: { current: currPage, limit: defaultLimit },
      search: { query: query },
    })
      .then((res) => {
        setCurrPage(currPage);
        setBusy(false);
        setLastPage(res.page ? res.page.last : 1);
        setItems(res.body);
      });
  }, [currPage, props.requestPath, query]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Search
          busy={busy} query={query}
          setQuery={(v) => { setQuery(v); setCurrPage(1); }}
        />
      </div>
      {busy ? renderBusy(props.busyItemElement) : renderList(items, props)}
      <div className={styles.footer}>
        <Pagination
          busy={busy} last={lastPage}
          curr={currPage} setCurr={setCurrPage}
        />
      </div>
    </div>
  );
}

export default List;
