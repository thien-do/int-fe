import React, { useState, useEffect, FC } from "react";
import request from "utils/api/request";

import styles from "./Groups.module.scss";
import GroupOverview, { Group } from "./GroupOverview";
import Pagination from "components/Pagination/Pagination";

const Groups: FC = () => {
  const [busy, setBusy] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  console.log("Groups", busy, currPage, lastPage, groups);

  useEffect(() => {
    setBusy(true);
    request<Group[]>({
      path: "groups",
      page: { current: currPage, limit: 20 },
    })
      .then((res) => {
        setCurrPage(currPage);
        setBusy(false);
        setLastPage(res.page ? res.page.last : 1);
        setGroups(res.body);
      });
  }, [currPage]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {busy ? "busy" : "not busy"}
      </div>
      <div className={styles.body}>
        {groups.map((group) => (
          <div className={styles.item} key={group.id}>
            <GroupOverview group={group} />
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

export default Groups;
