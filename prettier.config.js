// see: https://prettier.io/docs/en/options.html
module.exports = {
  // 超过最大值换行
  printWidth: 80,
  // 是否使用 tab 缩进
  useTabs: false,
  // tab键宽度，默认为2
  tabWidth: 2,
  // 行末加分号
  semi: true,
  // 用单引号代替双引号
  singleQuote: true,
  // 多行时使用尾后逗号, all 尽可能多地使用尾后逗号
  trailingComma: 'none',
  // markdown 文件是否折行, never 不折行
  proseWrap: 'never',
  // 是否使用空白字符格式化 HTML 文件, strict 都不格式化
  htmlWhitespaceSensitivity: 'strict',
  // 行尾符
  endOfLine: 'auto',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  jsxSingleQuote: false
};
