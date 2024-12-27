import type { MDXComponents } from 'mdx/types';
import Blockquote from './_mdx-components/blockquote';
import Code from './_mdx-components/code';
import H1 from './_mdx-components/h1';
import P from './_mdx-components/p';
import UL from './_mdx-components/ul';
import OL from './_mdx-components/ol';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    p: P,
    blockquote: Blockquote,
    code: Code,
    ul: UL,
    ol: OL,
  };
}
