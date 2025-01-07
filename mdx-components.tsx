import type { MDXComponents } from 'mdx/types';
import Blockquote from './_mdx-components/blockquote';
import Code from './_mdx-components/code';
import H1 from './_mdx-components/h1';
import H2 from './_mdx-components/h2';
import P from './_mdx-components/p';
import UL from './_mdx-components/ul';
import OL from './_mdx-components/ol';
import LI from './_mdx-components/li';
import EM from './_mdx-components/em';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    h2: H2,
    p: P,
    blockquote: Blockquote,
    code: Code,
    ul: UL,
    ol: OL,
    li: LI,
    em: EM,
  };
}
