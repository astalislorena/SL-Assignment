import { useState } from "react";

import { Button, TextInput } from "@mantine/core";

type SearchbarProps = {
  onSearch: (username: string) => void;
};

function Searchbar({ onSearch }: SearchbarProps) {
  const [username, setUsername] = useState("");

  return (
    <div className="searchbar">
      <TextInput
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
        style={{ paddingRight: 10 }}
      />
      <Button onClick={() => onSearch(username)}>Search</Button>
    </div>
  );
}

export default Searchbar;
