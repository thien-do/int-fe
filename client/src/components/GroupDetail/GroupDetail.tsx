import React, { FC, useState, useEffect } from "react";
import { FormGroup, Classes, InputGroup, TextArea, HTMLSelect, Button } from "@blueprintjs/core";

import * as Group from "interfaces/Group";
import request from "utils/api/request";

import styles from "./GroupDetail.module.scss";
import getColorValue from "utils/group/getColorValue";

interface Props {
  id: Group.Selection;
}

const emptyModel: Group.Model = {
  id: Infinity, name: "", color: "cobalt", description: "",
};

const notYet: () => void = () => { alert("Not implemented"); };

const GroupDetail: FC<Props> = (props) => {

  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [model, setModel] = useState<Group.Model>(emptyModel);

  const setModelManually = (m: Group.Model) => {
    setModel(m);
    setDirty(true);
  };

  useEffect(() => {
    if (props.id !== "new") {
      setBusy(true);
      request<Group.Model>({
        path: `groups/${props.id}`,
      })
        .then((res) => {
          setBusy(false);
          setModel(res.body);
        });
    }
  }, [props.id]);

  const withSkeleton = (style: string) => `${style} ${busy && Classes.SKELETON}`;

  return (
    <div>

      <FormGroup label="Name" labelFor="name">
        <InputGroup
          className={withSkeleton("")} fill large
          id="name" value={model.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setModelManually({ ...model, name: e.currentTarget.value });
          }}
        />
      </FormGroup>

      <FormGroup label="Description" labelFor="description">
        <TextArea
          className={withSkeleton("")} fill
          id="description" value={model.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setModelManually({ ...model, description: e.currentTarget.value });
          }}
        />
      </FormGroup>

      <FormGroup label="Color" labelFor="color">
        <div className={withSkeleton(styles.color)}>
          <div
            className={styles.colorPreview}
            style={{ background: getColorValue(model.color) }}
          />
          <HTMLSelect
            className={styles.colorSelect} fill
            id="color" value={model.color}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const color = e.currentTarget.value as Group.Model["color"]
              setModelManually({ ...model, color: color });
            }}
            options={[
              "Vermilion", "Rose", "Violet", "Indigo", "Cobalt",
              "Turquoise", "Forest", "Lime", "Gold", "Sepia"
            ].map((value) => ({
              value: value.toLowerCase(),
              label: value
            }))}
          />
        </div>
      </FormGroup>

      <div className={withSkeleton(styles.footer)}>
        {props.id === "new"
          ? <Button intent="primary" large fill text="Create" onClick={notYet} />
          : dirty
            ? <>
              <Button intent="primary" large fill text="Save" onClick={notYet} />
              <Button large fill text="Reset" onClick={notYet} />
            </>
            : <Button large fill text="Delete" onClick={notYet} />
        }
      </div>

    </div>
  );
};

export default GroupDetail;
