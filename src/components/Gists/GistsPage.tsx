import { useState } from "react";

import { Gist } from "../../api/models/Gist";
import { axiosClient } from "../../api/axiosClient";
import Searchbar from "../Searchbar/Serachbar";
import { Container } from "@mantine/core";
import GistsGrid from "../GistsGrid/GistsGrid";

function GistsPage() {
  const [gists, setGists] = useState<Gist[]>([]);

  const getGists = (username: string) => {
    axiosClient.get<Gist[]>(`/users/${username}/gists`).then((res) => {
      setGists(res.data);
    });
  };

  console.log(gists);
  return (
    <Container>
      <Searchbar
        onSearch={(username: string) => {
          getGists(username);
        }}
      />
      <GistsGrid gists={gists} />
    </Container>
  );
}

export default GistsPage;
