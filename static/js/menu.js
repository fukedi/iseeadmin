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
        url: '/pages/goods/category.html',
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
            url: '/pages/goods/unit12.html',
            target: '_self',
            icon: 'el-icon-setting',
            children: []
          }, {
            index: '1-1-1',
            title: '商品单位22',
            url: '/pages/goods/unit22.html',
            target: '_self',
            icon: 'el-icon-setting',
            children: []
          },
        ]
      }, {
        index: '1-2',
        title: '商品列表',
        url: '/pages/goods/index.html',
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
        url: '/pages/manage/profile.html',
        target: '_self',
        icon: 'el-icon-tickets',
        children: []
      }, {
        index: '3-1',
        title: '修改密码',
        url: '/pages/manage/modify.html',
        target: '_self',
        icon: 'el-icon-edit-outline',
        children: []
      }, {
        index: '3-2',
        title: '安全退出',
        url: '/pages/manage/logout.html',
        target: '_self',
        icon: 'el-icon-switch-button',
        children: []
      }
    ]
  },
  {
    index: '4',
    title: '其它页面',
    url: '/pages/other',
    target: '_self',
    icon: 'el-icon-user',
    children: [
      {
        index: '4-0',
        title: '登陆',
        url: '/pages/other/login.html',
        target: '_blank',
        icon: 'el-icon-tickets',
        children: []
      },
      {
        index: '4-1',
        title: '空白模板',
        url: '/pages/other/blank.html',
        target: '_self',
        icon: 'el-icon-tickets',
        children: []
      }
    ]
  },
  {
    index: '5',
    title: '组件',
    url: '/pages/component',
    target: '_self',
    icon: 'el-icon-menu',
    children: [
      {
        index: '5-0',
        title: '表单',
        url: '/pages/component/form',
        target: '_self',
        icon: 'el-icon-tickets',
        children: [
          {
            index: '5-0-0',
            title: 'input输入框',
            url: '/pages/component/form/input.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-0-1',
            title: 'radio单选框',
            url: '/pages/component/form/radio.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-0-2',
            title: 'checkbox多选框',
            url: '/pages/component/form/checkbox.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-0-3',
            title: 'inputnumber计数器',
            url: '/pages/component/form/inputnumber.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-4',
            title: '表单元素',
            url: '/pages/component/form/element.html',
            target: '_self',
            icon: '',
            children: []
          },
          // {
          //   index: '5-0-2',
          //   title: '表单组合',
          //   url: '/pages/component/form/group.html',
          //   target: '_self',
          //   icon: 'el-icon-tickets',
          //   children: []
          // }
        ]
      },
      {
        index: '5-1',
        title: '表格',
        url: '/pages/component/table',
        target: '_self',
        icon: 'el-icon-tickets',
        children: [
          {
            index: '5-1-0',
            title: '简单表格',
            url: '/pages/component/table/simpletable.html',
            target: '_self',
            icon: '',
            children: []
          }
          // {
          //   index: '5-0-2',
          //   title: '表单组合',
          //   url: '/pages/component/form/group.html',
          //   target: '_self',
          //   icon: 'el-icon-tickets',
          //   children: []
          // }
        ]
      }
    ]
  }
]
