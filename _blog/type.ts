import { ReactElement } from 'react';

export interface IBlogAbstract {
  title: string;
  path: string;
  author: string;
  createDate: string;
  updateDate: string;
}

export interface BlogComponent extends IBlogAbstract {
  component: any;
}
