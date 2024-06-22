import { Grid } from "@mantine/core";
import { Gist } from "../../api/models/Gist";
import GistCard from "../GistCard/GistCard";

type GistsGridProps = {
  gists: Gist[];
};

function GistsGrid({ gists }: GistsGridProps) {
  const rows = gists.map((gist) => (
    <Grid.Col key={gist.id}>
      <GistCard gist={gist} />
    </Grid.Col>
  ));
  return <Grid>{rows}</Grid>;
}

export default GistsGrid;
