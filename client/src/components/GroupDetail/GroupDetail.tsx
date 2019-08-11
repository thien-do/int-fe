import React, { FC, useState, useEffect } from "react";
import { FormGroup, Classes, Text, EditableText } from "@blueprintjs/core";

import * as Group from "interfaces/Group";
import request from "utils/api/request";

import styles from "./GroupDetail.module.scss";

interface Props {
  id: Group.Selection;
}

const emptyModel: Group.Model = {
  id: Infinity,
  name: "",
  color: "cobalt",
  icon: "cube",
  description: "",
};

const GroupDetail: FC<Props> = (props) => {

  const [busy, setBusy] = useState(false);
  const [model, setModel] = useState<Group.Model>(emptyModel);

  useEffect(() => {
    setBusy(true);
    request<Group.Model>({
      path: `groups/${props.id}`,
    })
      .then((res) => {
        setBusy(false);
        setModel(res.body)
      });
  }, [props.id]);

  const withSkeleton = (style: string) => `${style} ${busy && Classes.SKELETON}`;

  return (
    <div>
      <FormGroup label="Group name" labelFor="name">
        <EditableText
          value={model.name}
        />
      </FormGroup>
      <Text className={withSkeleton(styles.name)}>
        {model.name}
      </Text>
      <Text className={withSkeleton(styles.description)}>
        {model.description}
      </Text>
    </div>
  );
};

export default GroupDetail;
