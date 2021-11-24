const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'useClickInside', link: '/tiangong-use/useClickInside/' },
        { text: 'useMergeTable', link: '/tiangong-use/useMergeTable/' },
        { text: 'useDialogVisible', link: '/tiangong-use/useDialogVisible/' },
        { text: 'useList', link: '/tiangong-use/useList/' },
        { text: 'useConcatList', link: '/tiangong-use/useConcatList/' },
      ]
    },
    // {
    //   text: '反馈',
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
