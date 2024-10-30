import CodeBeautify from './code-beautify/page.mdx';
import CodeBeautifyAbs from '../_blog/code-beautify/abstract.json';
import DesignPattern from './design-pattern/page.mdx';
import DesignPatternAbs from './design-pattern/abstract.json';
import { BlogComponent } from './type';

const blogComponents = [
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
