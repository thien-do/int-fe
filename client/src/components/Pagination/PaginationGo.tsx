import React, { FC, useState } from "react";
import { Button, ControlGroup, NumericInput, Tag } from "@blueprintjs/core";

// import styles from "./PaginationGo.module.scss";

interface Props {
  busy: boolean;
  last: number;
  curr: number;
  setCurr: (page: number) => void;
}

const PaginationGo: FC<Props> = ({
  busy, curr, setCurr, last
}) => {
  // t: temporary / draft / currently input
  const [tCurr, tSetCurr] = useState(curr);
  const tag = <Tag minimal>of {last}</Tag>
  return (
    <form
      onSubmit={e => { e.preventDefault(); setCurr(tCurr); }}
    >
      <ControlGroup>
        <NumericInput
          value={tCurr} onValueChange={v => { tSetCurr(v); }}
          min={1} max={last} disabled={busy}
          buttonPosition="none" size={2} rightElement={tag}
        />
        <Button type="submit" text="Go" disabled={busy} />
      </ControlGroup>
    </form>
  );
}

export default PaginationGo;
