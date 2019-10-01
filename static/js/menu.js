/**
 * 菜单
 * @author youge
 * @email 46914685@qq.com
 * @git https://gitee.com/youge/iseeadmin.git
 * @date 20190930
 * @type {*[]}
 */
var iseeMenu = [
    {
        index:'0',
        title: '首页',
        url: '/',
        icon: 'el-icon-setting',
        children: []
    },
    {
        index:'1',
        title: '商品管理',
        url: '/pages/goods/',
        icon: 'el-icon-message',
        children: [
            {
                index:'1-0',
                title: '商品分类',
                url: '/pages/goods/category.html',
                icon: 'el-icon-message',
                children: []
            }, {
                index:'1-1',
                title: '商品单位',
                url: '/pages/goods/unit',
                icon:'el-icon-setting',
                children: [
                    {
                        index:'1-1-0',
                        title: '商品单位12',
                        url: '/pages/goods/unit12.html',
                        icon:'el-icon-setting',
                        children: []
                    }, {
                        index:'1-1-1',
                        title: '商品单位22',
                        url: '/pages/goods/unit22.html',
                        icon:'el-icon-setting',
                        children: []
                    },
                ]
            }, {
                index:'1-2',
                title: '商品列表',
                url: '/pages/goods/index.html',
                icon:'el-icon-setting',
                children: []
            },
        ]
    },
    {
        index:'2',
        title: '测试',
        url: 'test',
        icon:'el-icon-message',
        children: [
            {
                index:'2-0',
                title: 'about',
                url: '/pages/about.html',
                icon:'el-icon-setting',
                children: []
            }, {
                index:'2-1',
                title: 'product',
                url: '/pages/product.html',
                icon:'el-icon-setting',
                children: []
            },
        ]
    }
]
