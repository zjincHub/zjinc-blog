import { ReactElement } from 'react';

export interface IBlogAbstract {
  title: string;
  path: string;
  author: string;
  createDate: string;
  updateDate: string;
}

export interface IBlogComponent extends IBlogAbstract {
  component: any;
}
