module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
    node: true,
  },
  'extends': [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src/',
        ],
      },
    },
  },
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false,
    'requireConfigFile': false,
  },
  'plugins': [
    'react',
    'react-hooks',
    '@babel',
  ],
  rules: {
    'no-restricted-exports': ['off'], // 關閉該規則
    'import/prefer-default-export': 'off',
    indent: [2, 2], // 縮排規則，index[0] 的數字代表含意為 關閉(0), 警告(1), 錯誤(2)
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    quotes: [2, 'single'], // 單引號, 雙引號
    semi: [2, 'never'], // 將關於分號的檢查關掉
    'linebreak-style': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        'extensions': [
          '.js',
          '.jsx',
        ],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-console': 'off',
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
      },
    ],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-nested-ternary': 'off',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: false,
      },
    ],
    'key-spacing': [1, { // 關於 key 的 ":" 前後是否有空格
      beforeColon: false,
      afterColon: true,
    }],
    'react/jsx-props-no-spreading': [
      2,
      {
        'custom': 'ignore',
      },
    ],
    'react/jsx-curly-brace-presence': [0, 'ignore'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': [
      2,
      {
        'forbid': [
          'any',
        ],
      },
    ],
    'react/destructuring-assignment': [0, 'always'],
    'import/no-cycle': [0, 'always'],
    'import/first': [0], // 雖說 import 都會先 Hoisting，在這些行數中間可否插入其他的變數或是函式
    'object-property-newline': [2, { // Object 的撰寫規則，詳請請查閱官方文件
      allowAllPropertiesOnSameLine: true,
    }],
  },
}
