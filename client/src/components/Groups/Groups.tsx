import React, { useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import request from "utils/api/request";

import styles from "./Groups.module.scss";

interface Group {
  id: number;
  name: string;
  color: string;
  description: string;
}

const Groups = () => {
  const [busy, setBusy] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    setBusy(true);
    request<Group[]>({
      path: "users",
      page: { current: currPage, limit: 10 },
    })
      .then((res) => {
        setBusy(false);
        setCurrPage(currPage);
        setLastPage(res.page ? res.page.last : 1);
        setGroups(res.body);
      });
  }, [currPage]);

  return (
    <div className={styles.main}>
      {busy ? "busy" : "not busy"}
      {groups.map(i => i.id).toString()}
      <Button onClick={() => setCurrPage(currPage + 1)}>Next</Button>
    </div>
  );
};

export default Groups;
