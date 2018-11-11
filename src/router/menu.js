let menu = [{
        path: '/cnnode',
        name: 'cnNode',
        component: () =>
            import ('@/views/cnnode/list/index')
    },
    {
        path: '/douban',
        name: 'DouBan',
        component: () =>
            import ('@/views/douban/index')
    },
    {
        path: '/article/:articleId',
        name: 'Article',
        component: () =>
            import ('@/views/cnnode/articleCon/detail')
    }
]
export default menu;