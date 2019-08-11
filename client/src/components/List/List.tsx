import React, { useState, useEffect } from "react";
import request from "utils/api/request";

import styles from "./List.module.scss";
import Pagination from "./Pagination/Pagination";
import ListSearch from "./Search/Search";
import ListBody, { defaultLimit } from "./ListBody";

interface Props<T> {
  requestPath: string;

  getItemKey: (t: T) => string;
  renderItem: (t: T) => JSX.Element;
  busyItemElement: JSX.Element;

  searchPlaceholder: string;
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
      <div className={styles.search}>
        <ListSearch
          busy={busy} query={query} placeholder={props.searchPlaceholder}
          setQuery={(v) => { setQuery(v); setCurrPage(1); }}
        />
      </div>
      <div className={styles.body}>
        <ListBody
          busy={busy} items={items} search={!!query}
          getItemKey={props.getItemKey} renderItem={props.renderItem}
          busyItemElement={props.busyItemElement}
        />
      </div>
      <div className={styles.pagination}>
        <Pagination
          busy={busy} last={lastPage}
          curr={currPage} setCurr={setCurrPage}
        />
      </div>
    </div>
  );
}

export default List;
