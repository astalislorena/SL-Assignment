import { Avatar, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosClient } from "../../../api/axiosClient";
import { Forks } from "../../../api/models/Forks";

type UsersAvatarsProps = {
  gistId: string;
};

function UsersAvatars({ gistId }: UsersAvatarsProps) {
  const [users, setUsers] = useState<Forks[]>([]);

  useEffect(() => {
    axiosClient
      .get<Forks[]>(`/gists/${gistId}/forks`)
      .then((res) => setUsers(res.data));
  }, [gistId]);

  if (users.length < 1) {
    return null;
  }

  const avatars = [...new Map(users.map((u) => [u.owner.id, u])).values()]
    .slice(0, 3)
    .map((u) => u.owner)
    .map((user) => (
      <Avatar
        key={user.id}
        radius="xl"
        size="sm"
        component={Link}
        to={user.url}
        src={user.avatar_url}
      />
    ));

  return (
    <Group>
      {"Forked by"}
      <Avatar.Group id={gistId} spacing="sm">
        {avatars}
        {users.length > 3 ? (
          <Avatar radius="xl" size="sm">
            +{users.length - 3}
          </Avatar>
        ) : null}
      </Avatar.Group>
    </Group>
  );
}

export default UsersAvatars;
