import React, { useState, useEffect } from "react";
import request from "utils/api/request";

import styles from "./List.module.scss";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";

interface Props<T> {
  requestPath: string;
  renderItem: (item: T) => JSX.Element;
  getItemKey: (item: T) => string;
}

function List<T>(props: Props<T>) {
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState<T[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setBusy(true);
    request<T[]>({
      path: props.requestPath,
      page: { current: currPage, limit: 20 },
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
      <div className={styles.body}>
        {items.map((item) => (
          <div className={styles.item} key={props.getItemKey(item)}>
            {props.renderItem(item)}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Pagination
          busy={busy} last={lastPage}
          curr={currPage} setCurr={setCurrPage}
        />
      </div>
    </div>
  );
};

export default List;
