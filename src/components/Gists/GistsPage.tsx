import { useState } from "react";

import { Gist } from "../../api/models/Gist";
import { axiosClient } from "../../api/axiosClient";
import Searchbar from "../Searchbar/Serachbar";

function GistsPage() {
  const [gists, setGists] = useState<Gist[]>([]);

  const getGists = (username: string) => {
    axiosClient.get<Gist[]>(`/users/${username}/gists`).then((res) => {
      setGists(res.data);
    });
  };

  console.log(gists);
  return (
    <Searchbar
      onSearch={(username: string) => {
        getGists(username);
      }}
    />
  );
}

export default GistsPage;
