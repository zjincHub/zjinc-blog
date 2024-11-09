import CodeBeautify from './code-beautify/page.mdx';
import CodeBeautifyAbs from '../_blog/code-beautify/info';
import DesignPattern from './design-pattern/page.mdx';
import DesignPatternAbs from './design-pattern/info';
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
