import fs from 'fs';
import { join } from 'path';
import { BlogAbstract } from '@/interfaces/blog';

const postsDirectory = join(process.cwd(), 'src/app/blog');

export function getBlogPaths() {
  return fs.readdirSync(postsDirectory);
}

export function getBlogAbstract(path: string) {
  const realPath = path.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realPath}/abstract.json`);
  const jsonContents = fs.readFileSync(fullPath, 'utf8');
  const abstract: BlogAbstract = JSON.parse(jsonContents);
  return abstract;
}

export function getAllBlogAbstract() {
  const paths = getBlogPaths();
  return paths
    .map((path) => getBlogAbstract(path))
    .sort((abstract1, abstract2) =>
      new Date(abstract1.date) > new Date(abstract2.date) ? -1 : 1
    );
}
