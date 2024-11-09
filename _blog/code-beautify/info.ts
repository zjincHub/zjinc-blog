import { IBlogInfo } from '../type';

const blogInfo: IBlogInfo = {
  title: '前端代码美化之旅',
  summary:
    '本文将探讨如何在前端开发中通过代码美化工具提高代码质量和可读性，主要关注 ESLint 和 Prettier 的使用与配置。ESLint 是一个广泛应用的 JavaScript 代码检查工具，可以帮助开发者自动检测和修复代码中的语法和风格问题。Prettier 是一个代码格式化工具，用于自动化代码排版，使代码风格在团队中保持一致。本文将详细介绍如何在项目中安装和配置这两者，包括整合 ESLint 和 Prettier 的冲突处理，使它们各司其职：ESLint 负责代码规范检查，Prettier 负责格式化，达到最优的代码美化效果。',
  tags: ['Eslint', 'Prettier'],
  path: '/blog/code-beautify',
  author: 'zjinc',
  createDate: '2024年10月28日',
  updateDate: '2024年10月28日',
};

export default blogInfo;
