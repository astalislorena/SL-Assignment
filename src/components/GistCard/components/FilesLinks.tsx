import { Badge, Group } from "@mantine/core";
import { File } from "../../../api/models/Gist";
import { Link } from "react-router-dom";

type FilesLinksProps = {
  files: { [id: string]: File };
};

function FilesLinks({ files }: FilesLinksProps) {
  const filesLinks = [];
  for (const key in files) {
    filesLinks.push(<Link to={files[key].raw_url}>{key}</Link>);
  }
  return <Group>{filesLinks}</Group>;
}

export default FilesLinks;
