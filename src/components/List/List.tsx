import React, { useState, useEffect } from "react";
import request from "utils/api/request";

import styles from "./List.module.scss";
import Pagination from "./Pagination/Pagination";
import ListSearch from "./Search/Search";
import ListBody, { defaultLimit } from "./ListBody";

interface Props<T> {
  getItemKey: (t: T) => string;
  renderItem: (t: T) => JSX.Element;
  busyItemElement: JSX.Element;

  reqPath: string;
  resToItems: (r: any) => T[];

  searchPlaceholder: string;
}

function List<T>(props: Props<T>): JSX.Element {
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState<T[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const { reqPath, resToItems } = props;

  useEffect(() => {
    setBusy(true);
    request<any>({
      path: reqPath,
      page: { current: currPage, limit: defaultLimit },
      search: { query: query },
    })
      .then((res) => {
        setCurrPage(currPage);
        setBusy(false);
        setLastPage(res.page ? res.page.last : 1);
        setItems(resToItems(res.body));
      });
  }, [currPage, reqPath, query, resToItems]);

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
