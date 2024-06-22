import { Badge, Group } from "@mantine/core";
import { File } from "../../../api/models/Gist";

type FilesBadgesProps = {
  files: { [id: string]: File };
};

function FilesBadges({ files }: FilesBadgesProps) {
  const fileTypes: string[] = [];
  for (const key in files) {
    if (!fileTypes.includes(files[key].language)) {
      fileTypes.push(files[key].language);
    }
  }

  const badges = fileTypes
    .filter((t) => t !== null)
    .map((fileType) => <Badge key={fileType}> {fileType} </Badge>);
  return <Group>{badges}</Group>;
}

export default FilesBadges;
