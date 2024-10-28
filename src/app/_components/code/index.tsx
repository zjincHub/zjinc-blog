'use client';
import React, { useEffect, useState } from 'react';

interface Props {
  lang: string;
  name: string;
  theme?: string;
  children: any;
}

// 直接用 import('shiki') 会报错，所以这里用动态 import
const importShiki = async () => {
  return await import('shiki');
};

// 根据props.children拼接成完整的string
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

export default function Index(props: Props) {
  const { lang, theme = 'vitesse-dark' } = props;
  const [code, setCode] = useState('');
  const codeString = codeFormat(props);

  const getHtmlByCode = async () => {
    const { codeToHtml } = await importShiki();
    const html = await codeToHtml(codeString, { lang, theme });
    setCode(html);
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
        <div className="text-white text-sm">index.js</div>
      </div>
      <div className="px-5 pb-4" dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
}
