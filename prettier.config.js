module.exports = {
  // 是否使用单引号而不是双引号
  singleQuote: true,
  // 在语句结尾是否使用分号
  semi: true,
  // 是否在多行对象、数组等末尾添加逗号。选择“none”表示不添加逗号
  trailingComma: "es5", // 可选值：none | es5 | all
  // 设置每行的最大字符数
  printWidth: 80,
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 是否在对象字面量的花括号两侧加上空格
  bracketSpacing: true,
  // JSX 标签的闭合括号是否与最后一行元素在同一行
  jsxBracketSameLine: false,
  // 箭头函数参数是否始终使用括号
  arrowParens: "always", // 可选值：always | avoid
  // 行尾是否需要使用换行符
  endOfLine: "lf", // 可选值：auto | lf | crlf | cr
  // 是否对 HTML 文件中的属性值添加引号
  htmlWhitespaceSensitivity: "css", // 可选值：css | strict | ignore
  // 是否删除已不再使用的 HTML 空格
  vueIndentScriptAndStyle: false,
  // 是否对 CSS/SCSS 等文件做格式化
  cssEnable: true,
  // 是否根据项目文件的内容选择是否自动加引号
  quoteProps: "as-needed", // 可选值：as-needed | consistent | preserve
  // 是否格式化代码中的 JavaScript 和 JSON
  embeddedLanguageFormatting: "auto", // 可选值：auto | off
  // 是否忽略 prettierrc 配置中的注释
  ignorePath: ".prettierignore", // 指定忽略的文件列表文件
  // 是否格式化 Markdown 文件中的代码块
  markdownWhitespaceSensitivity: "css", // 可选值：css | strict | ignore
  // 格式化时是否删除注释
  deleteUnused: false, // 启用删除不必要的注释
  // 个别文件单独处理
  overrides: [
    {
      files: "src/app/layout.tsx",
      options: {
        printWidth: 300,
      },
    },
  ],
};
