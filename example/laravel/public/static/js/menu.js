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
    icon: 'el-icon-setting',
    children: []
  },
  {
    index: '1',
    title: '商品管理',
    url: '/pages/goods/',
    icon: 'el-icon-message',
    children: [
      {
        index: '1-0',
        title: '商品分类',
<<<<<<< HEAD
        url: '/pages/goods/category',
=======
        url: '/pages/goods/category.html',
>>>>>>> dev
        icon: 'el-icon-message',
        children: []
      }, {
        index: '1-1',
        title: '商品单位',
        url: '/pages/goods/unit',
        icon: 'el-icon-setting',
        children: [
          {
            index: '1-1-0',
            title: '商品单位12',
<<<<<<< HEAD
            url: '/pages/goods/unit12',
=======
            url: '/pages/goods/unit12.html',
>>>>>>> dev
            icon: 'el-icon-setting',
            children: []
          }, {
            index: '1-1-1',
            title: '商品单位22',
<<<<<<< HEAD
            url: '/pages/goods/unit22',
=======
            url: '/pages/goods/unit22.html',
>>>>>>> dev
            icon: 'el-icon-setting',
            children: []
          },
        ]
      }, {
        index: '1-2',
        title: '商品列表',
<<<<<<< HEAD
        url: '/pages/goods/index',
=======
        url: '/pages/goods/index.html',
>>>>>>> dev
        icon: 'el-icon-setting',
        children: []
      },
    ]
  },
  {
    index: '3',
    title: '管理员管理',
    url: '/pages/manage/',
    icon: 'el-icon-user',
    children: [
      {
        index: '3-0',
        title: '基本资料',
<<<<<<< HEAD
        url: '/pages/manage/profile',
=======
        url: '/pages/manage/profile.html',
>>>>>>> dev
        icon: 'el-icon-tickets',
        children: []
      }, {
        index: '3-1',
        title: '修改密码',
<<<<<<< HEAD
        url: '/pages/manage/modify',
=======
        url: '/pages/manage/modify.html',
>>>>>>> dev
        icon: 'el-icon-edit-outline',
        children: []
      }, {
        index: '3-2',
        title: '安全退出',
<<<<<<< HEAD
        url: '/pages/manage/logout',
=======
        url: '/pages/manage/logout.html',
>>>>>>> dev
        icon: 'el-icon-switch-button',
        children: []
      }
    ]
  }
]
