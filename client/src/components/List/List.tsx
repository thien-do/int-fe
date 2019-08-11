import React, { useState, useEffect } from "react";
import request from "utils/api/request";

import styles from "./List.module.scss";
import Pagination from "./Pagination/Pagination";

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

  useEffect(() => {
    setBusy(true);
    request<T[]>({
      path: props.requestPath,
      page: { current: currPage, limit: 20 },
    })
      .then((res) => {
        setCurrPage(currPage);
        setBusy(false);
        setLastPage(res.page ? res.page.last : 1);
        setItems(res.body);
      });
  }, [currPage, props.requestPath]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {busy ? "busy" : "not busy"}
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
          curr={currPage} setCurr={setCurrPage}
          last={lastPage} busy={busy}
        />
      </div>
    </div>
  );
};

export default List;
