export interface IBlogInfo {
  title: string;
  summary: string;
  tags: string[];
  path: string;
  author: string;
  createDate: string;
  updateDate: string;
}

export interface IBlogComponent extends IBlogInfo {
  component: any;
}
