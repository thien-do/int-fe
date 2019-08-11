import React, { FC, useState } from "react";
import { Button, ControlGroup, NumericInput, Tag } from "@blueprintjs/core";

interface Props {
  busy: boolean;
  last: number;
  curr: number;
  setCurr: (page: number) => void;
}

const getIsOk = (curr: number, last: number): boolean => (
  1 <= curr && curr <= last && curr === Math.round(curr)
);

const PaginationGo: FC<Props> = (props) => {
  // Note: curr !== props.curr
  // - curr: temporary/draft value, reflects user's input
  // - props.curr: permanent value, reflects fetch's result
  const [curr, setCurr] = useState(props.curr);
  const tag = <Tag minimal>of {props.last}</Tag>;
  const isOk = getIsOk(curr, props.last);
  return (
    <form onSubmit={e => { e.preventDefault(); props.setCurr(curr); }}>
      <fieldset disabled={props.busy}>
        <ControlGroup>
          <NumericInput
            value={curr} onValueChange={v => { setCurr(v); }}
            min={1} max={props.last} minorStepSize={1}
            buttonPosition="none" size={2} rightElement={tag}
            intent={isOk ? "none" : "danger"}
          />
          <Button type="submit" text="Go" disabled={!isOk} />
        </ControlGroup>
      </fieldset>
    </form>
  );
}

export default PaginationGo;
