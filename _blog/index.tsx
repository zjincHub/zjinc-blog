import CodeBeautify from './code-beautify/page.mdx';
import CodeBeautifyAbs from '../_blog/code-beautify/abstract';
import DesignPattern from './design-pattern/page.mdx';
import DesignPatternAbs from './design-pattern/abstract';
import { IBlogComponent } from './type';

const blogComponents: IBlogComponent[] = [
  {
    ...CodeBeautifyAbs,
    component: CodeBeautify,
  },
  {
    ...DesignPatternAbs,
    component: DesignPattern,
  },
];

export default blogComponents;
