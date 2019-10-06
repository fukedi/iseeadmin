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
        index: '0',
        title: '首页',
        url: '/',
        target: '_self',
        icon: 'el-icon-setting',
        children: []
    },
    {
        index: '1',
        title: '商品管理',
        url: '/pages/goods/',
        target: '_self',
        icon: 'el-icon-message',
        children: [
            {
                index: '1-0',
                title: '商品分类',
                url: '/pages/goods/category',
                target: '_self',
                icon: 'el-icon-message',
                children: []
            }, {
                index: '1-1',
                title: '商品单位',
                url: '/pages/goods/unit',
                target: '_self',
                icon: 'el-icon-setting',
                children: [
                    {
                        index: '1-1-0',
                        title: '商品单位12',
                        url: '/pages/goods/unit12',
                        target: '_self',
                        icon: 'el-icon-setting',
                        children: []
                    }, {
                        index: '1-1-1',
                        title: '商品单位22',
                        url: '/pages/goods/unit22',
                        target: '_self',
                        icon: 'el-icon-setting',
                        children: []
                    },
                ]
            }, {
                index: '1-2',
                title: '商品列表',
                url: '/pages/goods/index',
                target: '_self',
                icon: 'el-icon-setting',
                children: []
            },
        ]
    },
    {
        index: '3',
        title: '管理员管理',
        url: '/pages/manage/',
        target: '_self',
        icon: 'el-icon-user',
        children: [
            {
                index: '3-0',
                title: '基本资料',
                url: '/pages/manage/profile',
                target: '_self',
                icon: 'el-icon-tickets',
                children: []
            }, {
                index: '3-1',
                title: '修改密码',
                url: '/pages/manage/modify',
                target: '_self',
                icon: 'el-icon-edit-outline',
                children: []
            }, {
                index: '3-2',
                title: '安全退出',
                url: '/pages/manage/logout',
                target: '_self',
                icon: 'el-icon-switch-button',
                children: []
            }
        ]
    }
]
