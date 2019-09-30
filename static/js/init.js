// 初始化数据
// localStorage.removeItem('iseeTagList')
var iseeTagList =JSON.parse( localStorage.getItem('iseeTagList'))
var isseHomeTag = {
  title: '首页',
  url: '/',
  closable: false,
  show: true,
  effect: 'dark',
  type: '',
}
if (iseeTagList == null) {
  iseeTagList = []
  iseeTagList.push(isseHomeTag)
}

var iseeDefaultActive = localStorage.getItem('iseeDefaultActive')
if (iseeDefaultActive == null) {
  iseeDefaultActive = '/'
}
