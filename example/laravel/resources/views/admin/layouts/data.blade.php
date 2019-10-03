iseeData: {
version: iseeAdmin.version,
drawer: false,
direction: 'rtl',
showClose: false,
status: false,
show: true,
asideShow: iseeAdmin.asideShow,
asideShowIcon: iseeAdmin.asideShowIcon,
fullscreen: false,
fullscreenIcon: '&#xe610;',
defaultActive: iseeAdmin.defaultActive,
tagList: iseeAdmin.tagList,
breadcrumb: iseeAdmin.breadcrumb,
menu: iseeMenu,
avatar: {
url: avatarUrl,
size: 32,
list: [
{
index: '',
indexPath: [],
icon: 'el-icon-user-solid',
url: '',
title: userName,
}, {
index: '3-0',
indexPath: ['3', '3-0'],
icon: 'el-icon-tickets',
url: '/manage/profile.html',
title: '基本资料',
}, {
index: '3-1',
indexPath: ['3', '3-1'],
icon: 'el-icon-edit-outline',
url: '/manage/modify.html',
title: '修改密码',
}, {
index: '3-2',
indexPath: ['3', '3-2'],
icon: 'el-icon-switch-button',
url: '/manage/modify.html',
title: '安全退出',
},
]
}
},
