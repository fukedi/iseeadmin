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
        icon: '',
        children: [
          {
            index: '1-1-0',
            title: '商品单位120',
            url: '/pages/goods/unit12.html',
            target: '_self',
            icon: '',
            children: [{
              index: '1-1-0-0',
              title: '商品单位12-0',
              url: '/pages/goods/unit22.html',
              target: '_self',
              icon: '',
              children: []
            }]
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
        index: '5-11',
        title: '基础',
        url: '/pages/component/basic',
        target: '_self',
        icon: 'el-icon-switch-button',
        children: [
          {
            index: '5-11-3',
            title: 'Layout布局',
            url: '/pages/component/basic/layout.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-11-4',
            title: 'Container布局',
            url: '/pages/component/basic/container.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-11-0',
            title: '按钮组件',
            url: '/pages/component/basic/button.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-11-1',
            title: 'Color色彩',
            url: '/pages/component/basic/color.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-11-5',
            title: 'Icon 图标',
            url: '/pages/component/basic/icon.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-11-2',
            title: 'Link文字链接',
            url: '/pages/component/basic/link.html',
            target: '_self',
            icon: '',
            children: []
          },
        ]
      },
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
          }, {
            index: '5-0-1',
            title: 'radio单选框',
            url: '/pages/component/form/radio.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-2',
            title: 'checkbox多选框',
            url: '/pages/component/form/checkbox.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-3',
            title: 'inputnumber计数器',
            url: '/pages/component/form/inputnumber.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-4',
            title: 'select选择器',
            url: '/pages/component/form/select.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-5',
            title: 'cascader级联选择器',
            url: '/pages/component/form/cascader.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-6',
            title: 'switch开关',
            url: '/pages/component/form/switch.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-8',
            title: '滑块组件',
            url: '/pages/component/form/slider.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-9',
            title: '上传组件',
            url: '/pages/component/form/upload.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-10',
            title: '评分组件',
            url: '/pages/component/form/rate.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-0-11',
            title: '颜色选择器',
            url: '/pages/component/form/colorpicker.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-12',
            title: '穿梭框',
            url: '/pages/component/form/transfer.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-13',
            title: '时间选择器',
            url: '/pages/component/form/timepicker.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-14',
            title: '日期选择器',
            url: '/pages/component/form/datepicker.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-15',
            title: '日期时间选择器',
            url: '/pages/component/form/datetimepicker.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-0-7',
            title: 'form表单',
            url: '/pages/component/form/form.html',
            target: '_self',
            icon: '',
            children: []
          },
        ]
      },

      {
        index: '5-1',
        title: '数据',
        url: '/pages/component/data',
        target: '_self',
        icon: 'el-icon-tickets',
        children: [
          {
            index: '5-1-0',
            title: '简单表格',
            url: '/pages/component/data/simpletable.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-1-1',
            title: '复杂表格1',
            url: '/pages/component/data/complextable1.html',
            target: '_self',
            icon: '',
            children: []
          },
          {
            index: '5-1-2',
            title: '复杂表格2',
            url: '/pages/component/data/complextable2.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-1-3',
            title: 'Tag标签',
            url: '/pages/component/data/tag.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-1-4',
            title: 'Progress进度条',
            url: '/pages/component/data/progress.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-1-5',
            title: 'Tree树形组件',
            url: '/pages/component/data/tree.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-1-6',
            title: 'Pagination分页',
            url: '/pages/component/data/pagination.html',
            target: '_self',
            icon: '',
            children: []
          }, {
            index: '5-1-7',
            title: 'Badge标记',
            url: '/pages/component/data/badge.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-1-8',
            title: 'Avatar头像',
            url: '/pages/component/data/avatar.html',
            target: '_self',
            icon: '',
            children: []
          },
        ]
      },
      {
        index: '5-2',
        title: '通知',
        url: '/pages/component/notices',
        target: '_self',
        icon: 'el-icon-tickets',
        children: [
          {
            index: '5-2-0',
            title: 'Alert警告',
            url: '/pages/component/notices/alert.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-2-1',
            title: 'Loading加载',
            url: '/pages/component/notices/loading.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-2-2',
            title: 'Message消息提示',
            url: '/pages/component/notices/message.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-2-3',
            title: 'MessageBox弹框',
            url: '/pages/component/notices/messagebox.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-2-4',
            title: 'Notification通知',
            url: '/pages/component/notices/notification.html',
            target: '_self',
            icon: '',
            children: []
          },
        ]
      },
      {
        index: '5-3',
        title: '导航',
        url: '/pages/component/navigation',
        target: '_self',
        icon: 'el-icon-tickets',
        children: [
          {
            index: '5-3-0',
            title: 'NavMenu导航菜单',
            url: '/pages/component/navigation/navmenu.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-3-1',
            title: 'Tabs标签页',
            url: '/pages/component/navigation/tabs.html',
            target: '_self',
            icon: '',
            children: []
          },{
            index: '5-3-2',
            title: 'Breadcrumb面包屑',
            url: '/pages/component/navigation/breadcrumb.html',
            target: '_self',
            icon: '',
            children: []
          },
        ]
      },





    ]
  }
]
