import { Avatar, Card, Group } from "@mantine/core";
import { Gist } from "../../api/models/Gist";
import FilesBadges from "./components/FileBadges";
import { Link } from "react-router-dom";

type GistCardProps = {
  gist: Gist;
};

function GistCard({ gist }: GistCardProps) {
  return (
    <Card withBorder p="xl">
      <Card.Section>
        <Group position="apart">
          <Group>
            <Link to={gist.html_url}>{Object.keys(gist.files).join(", ")}</Link>
            <Avatar
              radius="xl"
              size="sm"
              component={Link}
              to={gist.owner.url}
              src={gist.owner.avatar_url}
            />
          </Group>

          <FilesBadges files={gist.files} />
        </Group>
      </Card.Section>
    </Card>
  );
}

export default GistCard;
