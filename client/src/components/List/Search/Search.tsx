import React, { FC, useState } from "react";
import { Button, ControlGroup, InputGroup } from "@blueprintjs/core"

import styles from "./Search.module.scss";

interface Props {
  busy: boolean;
  query: string;
  setQuery: (s: string) => void;
}

type Event = React.ChangeEvent<HTMLInputElement>

const Search: FC<Props> = (props) => {
  // Note: query !== props.query
  // - query: temporary/draft value, reflects user's input
  // - props.query: permanent value, reflects fetch's result
  const [query, setQuery] = useState(props.query);
  return (
    <form
      className={styles.main}
      onSubmit={e => { e.preventDefault(); props.setQuery(query); }}
    >
      <fieldset disabled={props.busy}>
        <ControlGroup>
          <InputGroup
            fill value={query}
            onChange={(e: Event) => { setQuery(e.currentTarget.value); }}
          />
          <Button icon="search" type="submit" />
        </ControlGroup>
      </fieldset>
    </form>
  );
}

export default Search;
