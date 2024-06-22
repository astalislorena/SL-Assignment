import { Card } from "@mantine/core";
import { Gist } from "../../api/models/Gist";

type GistCardProps = {
  gist: Gist;
};

function GistCard({ gist }: GistCardProps) {
  return (
    <Card withBorder p="xl">
      <Card.Section>
        {gist.html_url}
        {gist.description}
        {gist.forks_url}
      </Card.Section>
    </Card>
  );
}

export default GistCard;
