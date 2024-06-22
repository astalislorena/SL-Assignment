import { Owner } from "./Owner";

export interface Gist {
  id: string;
  html_url: string;
  forks_url: string;
  description: string;
  files: { [id: string]: File };
  owner: Owner;
}

export interface File {
  language: string;
  raw_url: string;
}
