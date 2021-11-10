const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'useClickInside', link: '/tiangong-use/useClickInside/' },
        { text: 'useMergeTable', link: '/tiangong-use/useMergeTable/' },
      ]
    },
    // {
    //   text: '导航',
    // },
    // {
    //   text: '反馈',
    // },
    // {
    //   text: '数据录入',
    // },
    // {
    //   text: '数据展示',
    // },
    // {
    //   text: '布局',
    // },
  ]
}

const config = {
  title: '@tiangong/use',
  description: 'Just playing around.',
  themeConfig: {
    sidebar,
  }
}

export default config
