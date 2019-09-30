var menu = [
    {
        title: '首页',
        url: '/',
        icon: 'el-icon-setting',
        children: []
    },
    {
        title: '商品管理',
        url: '/pages/goods',
        icon: '',
        children: [
            {
                title: '商品分类',
                url: '/pages/goods/category.html',
                icon: '',
                children: []
            }, {
                title: '商品单位',
                url: '/pages/goods/unit.html',
                icon: '',
                children: [
                    {
                        title: '商品单位12',
                        url: '/pages/goods/unit12.html',
                        icon: '',
                        children: []
                    }, {
                        title: '商品单位22',
                        url: '/pages/goods/unit22.html',
                        icon: '',
                        children: []
                    },
                ]
            }, {
                title: '商品列表',
                url: '/pages/goods/index.html',
                icon: '',
                children: []
            },
        ]
    },
    {
        title: '测试',
        url: '',
        children: [
            {
                title: 'about',
                url: '/pages/about.html',
                children: []
            }, {
                title: 'product',
                url: '/pages/product.html',
                children: []
            },
        ]
    }
]
