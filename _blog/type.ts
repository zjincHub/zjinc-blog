export interface IBlogInfo {
  title: string;
  summary: string;
  tags: string[];
  author: string;
  createDate: string;
  updateDate: string;
}

export interface IBlog extends IBlogInfo {
  path: string;
  component: any;
}
