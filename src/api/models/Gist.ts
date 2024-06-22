export interface Gist {
  html_url: string;
  forks_url: string;
  description: string;
  files: { [id: string]: File };
}

export interface File {
  language: string;
}
