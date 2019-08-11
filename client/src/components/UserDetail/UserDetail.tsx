import React, { FC, useState, useEffect } from "react";
import { FormGroup, Classes, InputGroup, TextArea, HTMLSelect, Button } from "@blueprintjs/core";

import * as User from "interfaces/User";
import request from "utils/api/request";

import styles from "./UserDetail.module.scss";
import getColorValue from "utils/group/getColorValue";

interface Props {
  id: User.Selection;
}

const emptyModel: User.Model = {
  id: Infinity, name: "", email: "", avatar: ""
};

const notYet: () => void = () => { alert("Not implemented"); };

const UserDetail: FC<Props> = (props) => {

  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [model, setModel] = useState<User.Model>(emptyModel);

  const setModelManually = (m: User.Model) => {
    setModel(m);
    setDirty(true);
  };

  useEffect(() => {
    if (props.id !== "new") {
      setBusy(true);
      request<User.Model>({
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

      <FormGroup label="Email" labelFor="email">
        <InputGroup
          className={withSkeleton("")} fill
          id="email" value={model.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setModelManually({ ...model, email: e.currentTarget.value });
          }}
        />
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

export default UserDetail;
