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
        title: '首页',
        url: '/',
        icon: 'el-icon-setting',
        children: []
    },
    {
        title: '商品管理',
        url: '/pages/goods/',
        icon: 'el-icon-message',
        children: [
            {
                title: '商品分类',
                url: '/pages/goods/category.html',
                icon: 'el-icon-message',
                children: []
            }, {
                title: '商品单位',
                url: '/pages/goods/unit',
                icon:'el-icon-setting',
                children: [
                    {
                        title: '商品单位12',
                        url: '/pages/goods/unit12.html',
                        icon:'el-icon-setting',
                        children: []
                    }, {
                        title: '商品单位22',
                        url: '/pages/goods/unit22.html',
                        icon:'el-icon-setting',
                        children: []
                    },
                ]
            }, {
                title: '商品列表',
                url: '/pages/goods/index.html',
                icon:'el-icon-setting',
                children: []
            },
        ]
    },
    {
        title: '测试',
        url: 'test',
        icon:'el-icon-message',
        children: [
            {
                title: 'about',
                url: '/pages/about.html',
                icon:'el-icon-setting',
                children: []
            }, {
                title: 'product',
                url: '/pages/product.html',
                icon:'el-icon-setting',
                children: []
            },
        ]
    }
]
