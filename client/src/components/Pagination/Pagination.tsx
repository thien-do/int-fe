import React, { FC } from "react";
import { Button, Tooltip } from "@blueprintjs/core"

import styles from "./Pagination.module.scss";
import PaginationGo from "./PaginationGo";

interface Props {
  busy: boolean;
  curr: number;
  setCurr: (page: number) => void;
  last: number;
}

const Pagination: FC<Props> = ({ busy, curr, setCurr, last }) => (
  <div className={styles.main}>
    <div className={styles.prev}>
      <Tooltip content="Go to previous page">
        <Button
          icon="arrow-left" text="Prev"
          disabled={busy || curr === 1}
          onClick={() => setCurr(curr - 1)}
        />
      </Tooltip>
    </div>
    <div className={styles.go}>
      <PaginationGo
        curr={curr} setCurr={setCurr} busy={busy} last={last}
        key={curr} // See: "Fully uncontrolled component with a key"
      />
    </div>
    <div className={styles.next}>
      <Tooltip content="Go to next page">
        <Button
          icon="arrow-right" text="Next"
          disabled={busy || curr === last}
          onClick={() => setCurr(curr + 1)}
        />
      </Tooltip>
    </div>
  </div>
);

export default Pagination;
