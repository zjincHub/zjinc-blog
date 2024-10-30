import fs from 'fs';
import { join } from 'path';
import { BlogAbstract } from '@/interfaces/blog';
import 

const postsDirectory = join(process.cwd(), '_blog');

export function getBlogPaths() {
  return fs.readdirSync(postsDirectory);
}

export function getBlogAbstract(path: string) {
  try {
    const realPath = path.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realPath}/abstract.json`);
    const jsonContents = fs.readFileSync(fullPath, 'utf8');
    const abstract: BlogAbstract = require(jsonContents);
    return abstract;
  } catch (e: unknown) {
    return null;
  }
}

// export function getAllBlogAbstract() {
//   const paths = getBlogPaths();
//   return paths
//     .map((path) => getBlogAbstract(path))
//     .filter((abstract) => abstract !== null)
//     .sort((abstract1, abstract2) =>
//       new Date(abstract1.date) > new Date(abstract2.date) ? -1 : 1
//     );
// }
