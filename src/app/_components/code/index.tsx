'use client';
import React, { useEffect, useState } from 'react';

interface Props {
  lang: string;
  names: string;
  theme?: string;
  children: any;
}

/**
 * 直接用 import('shiki') 会报错，所以这里用动态 import
 */
const importShiki = async () => {
  return await import('shiki');
};

/**
 * 根据props.children拼接成完整的string
 */
const codeFormat = (props: any) => {
  const children = props.children;
  // 如果没有children，直接返回
  if (!children) return '';
  // 如果children是数组，就用reduce拼接成完整的string
  // 否则就直接返回children的值
  if (children instanceof Array) {
    // 因为mdx文件每一行都是一个p元素，所以这里存在嵌套关系：current.props.children
    return props.children?.reduce(
      (pre: string, current: any) =>
        (pre += current.props.children.toString()) + '\n',
      ''
    );
  } else if (typeof children === 'string') {
    return children;
  } else if (typeof children?.props?.children === 'string') {
    // 因为mdx文件每一行都是一个p元素，所以这里存在嵌套关系：children.props.children
    return children.props.children;
  }
  return '';
};

/**
 * 切割html
 */
const cutHtml = (html: string) => {
  // 提取html的头、尾、内容
  const headRegex = /<pre\b[^>]*><code>/i;
  const contentRegex = /<pre[^>]*><code>([\s\S]*?)<\/code><\/pre>/;
  const head = html.match(headRegex)?.[0] || '';
  const foot = '</code></pre>';
  const content = html.match(contentRegex)?.[1] || '';
  // 提取分割线代码
  const dividingRegex =
    /\n<span class="line"><span\b[^>]*>--<\/span><\/span>\n/;
  const dividing = content.match(dividingRegex)?.[0] || '';
  // 用分割线代码把html的content分割成不同文件
  if (dividing) {
    const contentList = content.split(dividing);
    return contentList.map((cont) => head + cont + foot);
  } else {
    return [head + content + foot];
  }
};

export default function Index(props: Props) {
  const { lang, theme = 'vitesse-dark', names = '' } = props;
  // 文件名称数组
  const nameList = names.split(',');
  // 用于计算html的string，由code计算得到
  const codeString = codeFormat(props);
  // 需要展示的html，由code计算得到
  const [codeHtmlList, setCodeHtmlList] = useState<string[]>([]);
  // 当前展示的html的index
  const [showIndex, setShowIndex] = useState(0);

  const getHtmlByCode = async () => {
    const { codeToHtml } = await importShiki();
    const html = await codeToHtml(codeString, { lang, theme });
    const htmlList = cutHtml(html);
    setCodeHtmlList(htmlList);
  };

  useEffect(() => {
    getHtmlByCode();
  }, []);

  return (
    <div className="code bg-gradient-to-b from-black to-gray-900 rounded-[12px]">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          </div>
          <div className="px-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex items-center">
          {nameList.map((name, index) => (
            <div
              key={name}
              className="text-white text-sm"
              onClick={() => setShowIndex(index)}>
              {name}
            </div>
          ))}
        </div>
      </div>
      <div
        className="px-5 pb-4"
        dangerouslySetInnerHTML={{ __html: codeHtmlList[showIndex] || '' }}
      />
    </div>
  );
}
