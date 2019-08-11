import React, { FC } from "react";

import * as Group from "interfaces/Group";

interface Props {
  id: Group.Selection;
}

const GroupDetail: FC<Props> = (props) => (
  <div>
    {props.id.toString()}
  </div>
);

export default GroupDetail;
